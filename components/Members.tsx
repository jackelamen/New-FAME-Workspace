import React from 'react';
import { PILLARS } from '../constants.tsx';
import { useReveal } from '../lib/motion.ts';

/* Sheet 03.

   The four letters at full display size, one per row, with the discipline
   hung off to the right. Previously these were 2.5rem italic glyphs in a
   gutter beside a bordered list; at this size the acronym stops being a
   decorative initial and becomes the structure of the section, which is what
   it actually is. Rows are asymmetric on purpose: the letter is the constant,
   everything else hangs. */
const Members: React.FC = () => {
  const head = useReveal<HTMLDivElement>();

  return (
    <div className="mx-auto w-full max-w-[110rem] px-[var(--gut)]">
      <div ref={head}>
        <div className="r-draw h-px w-full bg-cream/25" />
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-start">
          <p className="u-mark r-up text-lift">03 / Who we are assembling</p>
          <p className="u-body r-up max-w-[34ch] text-[0.95rem] text-cream/60 md:text-right" style={{ ['--d' as string]: '100ms' }}>
            The name has always spelled out the four. It is also the membership.
          </p>
        </div>
      </div>

      <div className="mt-14 md:mt-20">
        {PILLARS.map((pillar, i) => (
          <Row key={pillar.name} pillar={pillar} index={i} />
        ))}
      </div>
    </div>
  );
};

const Row: React.FC<{ pillar: (typeof PILLARS)[number]; index: number }> = ({ pillar, index }) => {
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className="group grid grid-cols-1 items-baseline gap-x-8 gap-y-4 border-t u-rule py-10 md:grid-cols-12 md:py-16"
    >
      <div className="md:col-span-4 lg:col-span-5">
        <span className="u-display r-line block text-[clamp(3.5rem,11vw,9rem)] leading-[0.8]">
          <span>
            <span className="text-lift">{pillar.letter}</span>
            <span className="text-cream/90">{pillar.name.slice(1)}</span>
          </span>
        </span>
      </div>

      <div className="md:col-span-3 lg:col-span-3">
        <p className="u-label r-up text-cream/70" style={{ ['--d' as string]: '120ms' }}>
          {pillar.line}
        </p>
      </div>

      <div className="md:col-span-4">
        <p className="u-body r-up text-[1rem] text-cream/60" style={{ ['--d' as string]: '200ms' }}>
          {pillar.detail}
        </p>
      </div>
    </article>
  );
};

export default Members;
