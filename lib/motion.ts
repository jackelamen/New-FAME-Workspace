import { useEffect, useRef } from 'react';

/* ---------------------------------------------------------------------------
   Scroll choreography.

   Two shared observers rather than one per element: a page can carry fifty
   reveals and four parallax layers without fifty IntersectionObservers and
   fifty scroll listeners. Everything writes to CSS custom properties and lets
   the compositor do the rest, so nothing here touches layout during scroll.

   All of it is inert unless <html> carries `has-js` (set before first paint)
   and the visitor has not asked for reduced motion.
--------------------------------------------------------------------------- */

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* -- reveal ---------------------------------------------------------------- */

let revealObserver: IntersectionObserver | null = null;

const getRevealObserver = () => {
  if (revealObserver) return revealObserver;
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        /* One-way. Re-animating on scroll-back reads as a gimmick and makes
           the page feel restless when someone scrolls up to re-read. */
        revealObserver!.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }
  );
  return revealObserver;
};

/** Marks an element visible once it enters the viewport. */
export const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced()) {
      el.classList.add('is-in');
      return;
    }
    const observer = getRevealObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return ref;
};

/* -- scroll-linked --------------------------------------------------------- */

type Tracked = { el: HTMLElement; apply: (progress: number) => void };

const tracked = new Set<Tracked>();
let frame = 0;

const measure = () => {
  frame = 0;
  const vh = window.innerHeight;
  for (const item of tracked) {
    const rect = item.el.getBoundingClientRect();
    /* 0 when the element's top hits the bottom of the viewport, 1 when its
       bottom leaves the top. Clamped so off-screen elements hold their end
       state instead of drifting. */
    const raw = (vh - rect.top) / (vh + rect.height);
    item.apply(Math.min(1, Math.max(0, raw)));
  }
};

const schedule = () => {
  if (frame) return;
  frame = requestAnimationFrame(measure);
};

const track = (item: Tracked) => {
  tracked.add(item);
  if (tracked.size === 1) {
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
  }
  schedule();
  return () => {
    tracked.delete(item);
    if (tracked.size === 0) {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    }
  };
};

/**
 * Drives `--p` (0 to 1) on an element across its pass through the viewport.
 * CSS decides what to do with it, which keeps the motion editable in one place.
 */
export const useScrollProgress = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    return track({
      el,
      apply: (p) => el.style.setProperty('--p', p.toFixed(4)),
    });
  }, []);

  return ref;
};

/* -- smooth scroll --------------------------------------------------------- */

/**
 * Lenis, loaded only after mount and only when motion is welcome. The weight
 * of the scroll is most of what separates a site that feels built from one
 * that feels assembled, and it costs ~3kb.
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    if (prefersReduced()) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cancelled = false;

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.05,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        wheelMultiplier: 0.9,
      });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
};
