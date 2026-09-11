import React, { useEffect, useRef, useState } from 'react';
import { OFFER, ASKS } from '../constants.tsx';
import { useReveal } from '../lib/motion.ts';

/* Sheet 04.

   The one place the page changes axis. Everything else reads top to bottom;
   the five things you get move sideways while the section holds itself pinned.
   A single deliberate break carries more than motion sprinkled everywhere, and
   it lands on the part of the argument that actually has to convert.

   Desktop only. On a phone this becomes an ordinary stack: hijacking a small
   screen's scroll to move content sideways is a way to lose the reader. */
const Offer: React.FC = () => {
  const head = useReveal<HTMLDivElement>();
  const asks = useReveal<HTMLDivElement>();
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPinned(query.matches && !reduced.matches);
    sync();
    query.addEventListener('change', sync);
    reduced.addEventListener('change', sync);
    return () => {
      query.removeEventListener('change', sync);
      reduced.removeEventListener('change', sync);
    };
  }, []);

  useEffect(() => {
    if (!pinned) return;
    const el = outer.current;
    const rail = track.current;
    if (!el || !rail) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const travelled = Math.min(Math.max(-rect.top, 0), distance);
      /* Reserve the first 15% of scroll distance for the header to settle,
         then map the remaining 85% to the full panel translation. This keeps
         the first panel fully readable before the slide begins. */
      const raw = distance > 0 ? travelled / distance : 0;
      const p = Math.max(0, (raw - 0.15) / 0.85);
      const span = rail.scrollWidth - window.innerWidth + 96;
      rail.style.transform = `translate3d(${-p * Math.max(span, 0)}px,0,0)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    schedule();
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
      rail.style.transform = '';
    };
  }, [pinned]);

  const panels = (
    <>
      {OFFER.map((item, i) => (
        <article
          key={item.index}
          className="flex w-[85vw] shrink-0 flex-col justify-between border-t u-rule pt-8 sm:w-[70vw] lg:w-[55vw] lg:pt-10"
        >
          <div>
            <div className="flex items-baseline justify-between">
              <span className="u-mark text-lift">{item.index}</span>
              <span className="u-mark text-cream/35">{String(OFFER.length).padStart(2, '0')}</span>
            </div>
            <h3 className="u-display mt-10 text-[clamp(1.9rem,3vw,2.9rem)] lg:mt-16">{item.title}</h3>
          </div>
          <p className="u-body mt-8 max-w-[44ch] text-[0.95rem] text-cream/65 lg:mt-14">
            {item.detail}
          </p>
        </article>
      ))}
    </>
  );

  return (
    <>
      <div ref={outer} style={pinned ? { height: `${OFFER.length * 100}vh` } : undefined}>
        <div className={pinned ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden' : ''}>
          <div ref={head} className="mx-auto w-full max-w-[110rem] px-[var(--gut)]">
            <div className="r-draw h-px w-full bg-cream/25" />
            <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <p className="u-mark r-up text-lift">04 / What you get</p>
              <h2 className="u-display r-up max-w-[18ch] text-[length:var(--t-lg)] md:text-right" style={{ ['--d' as string]: '90ms' }}>
                Five things that are hard to get on your own.
              </h2>
            </div>
          </div>

          {pinned ? (
            <div className="mt-16 overflow-hidden lg:mt-24">
              <div
                ref={track}
                className="flex gap-14 pl-[var(--gut)] will-change-transform"
              >
                {panels}
              </div>
            </div>
          ) : (
            <div className="mx-auto mt-14 w-full max-w-[110rem] space-y-12 px-[var(--gut)]">
              {panels}
            </div>
          )}
        </div>
      </div>

      {/* The reciprocity half, back on the vertical axis. */}
      <div ref={asks} className="mx-auto w-full max-w-[110rem] px-[var(--gut)] pt-28 md:pt-44">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <p className="u-mark r-up text-lift">And what we ask</p>
            <p className="u-body r-up mt-6 max-w-[30ch] text-[0.95rem] text-cream/60" style={{ ['--d' as string]: '90ms' }}>
              A collective is only worth joining if everyone in it is carrying
              something.
            </p>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {ASKS.map((ask, i) => (
              <li key={ask} className="border-b u-rule py-7 first:border-t">
                <span className="u-display r-line block text-[clamp(1.35rem,2.3vw,2.1rem)] text-cream/90">
                  <span style={{ ['--d' as string]: `${i * 80}ms` }}>{ask}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Offer;
