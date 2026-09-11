import React from 'react';
import Backdrop from './Backdrop.tsx';
import { PILLARS } from '../constants.tsx';
import { useReveal } from '../lib/motion.ts';

interface HeroProps {
  onApply: () => void;
}

/* Sheet 01.

   Three bands rather than a centred stack: annotation across the top, the
   claim hung off the left edge, the four disciplines as a drawn legend along
   the bottom. The legend is the acronym doing structural work, and it is the
   first thing that tells a visitor what the four letters are for. */
const Hero: React.FC<HeroProps> = ({ onApply }) => {
  const head = useReveal<HTMLHeadingElement>();
  const meta = useReveal<HTMLDivElement>();
  const legend = useReveal<HTMLDivElement>();

  const line = 'r-line';

  return (
    <header className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-8 pt-28 md:pt-32">
      <Backdrop clip="hero" dim={0.74} />

      {/* Sheet metadata. Tabular, tiny, unglamorous on purpose: it is the
          counterweight that makes the display size read as large. */}
      <div
        ref={meta}
        className="relative z-10 mx-auto w-full max-w-[110rem] px-[var(--gut)]"
      >
        <div className="r-up flex items-baseline justify-between gap-6 border-b u-rule pb-4 text-cream/60">
          <span className="u-mark text-cream">FAME</span>
          <span className="u-mark hidden sm:block">Seoul · 37.5665° N</span>
          <span className="u-mark">Forming 2026</span>
          <span className="u-mark hidden md:block">Sheet 01 / 04</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[110rem] flex-1 px-[var(--gut)] flex items-center">
        <h1 ref={head} className="u-display text-scrim text-[length:var(--t-hero)] max-w-[15ch]">
          <span className={line}><span style={{ ['--d' as string]: '0ms' }}>A collective</span></span>
          <span className={line}><span style={{ ['--d' as string]: '110ms' }}>for the people</span></span>
          <span className={line}><span style={{ ['--d' as string]: '220ms' }}>who make</span></span>
          <span className={line}>
            <span className="italic text-cream/95" style={{ ['--d' as string]: '330ms' }}>
              the night happen.
            </span>
          </span>
        </h1>
      </div>

      {/* Legend. Each discipline registers in turn, its rule drawing first. */}
      <div
        ref={legend}
        className="relative z-10 mx-auto w-full max-w-[110rem] px-[var(--gut)]"
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-4 lg:gap-x-8">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.name}>
              <div
                className="r-draw h-px w-full bg-cream/25"
                style={{ ['--d' as string]: `${i * 90}ms` }}
              />
              <div className="r-up pt-3" style={{ ['--d' as string]: `${180 + i * 90}ms` }}>
                <div className="flex items-baseline gap-2.5">
                  <span className="u-mark text-cream">{pillar.letter}</span>
                  <span className="u-label text-cream/85">{pillar.name}</span>
                </div>
                <p className="u-body mt-1.5 text-[0.8rem] text-cream/60">{pillar.line}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="r-up mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          style={{ ['--d' as string]: '560ms' }}
        >
          <p className="u-body max-w-[54ch] text-[0.9rem] text-cream/70">
            Founding members are being chosen now, across food, artistry, media
            and events. Based in Seoul. Not limited to it.
          </p>
          <div className="flex shrink-0 items-center gap-7">
            <button
              onClick={onApply}
              className="u-label bg-ember px-8 py-4 text-[length:var(--small)] text-void transition-colors duration-300 hover:bg-cream"
            >
              Apply to join
            </button>
            <a
              href="#why"
              className="u-mark text-cream/70 transition-colors duration-300 hover:text-cream"
            >
              Read the case ↓
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
