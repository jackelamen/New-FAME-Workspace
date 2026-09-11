import React from 'react';
import { useReveal } from '../lib/motion.ts';

/* Sheet 02, first half.

   Built as a margin note against a statement rather than a heading over a
   grid. The two supporting paragraphs hang in the left gutter like callouts
   on a drawing, which puts the reader's problem literally in the margin of
   the claim. */
const Tension: React.FC = () => {
  const root = useReveal<HTMLDivElement>();

  return (
    <div ref={root} className="mx-auto w-full max-w-[110rem] px-[var(--gut)]">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-3">
          <div className="r-draw h-px w-full bg-cream/25" />
          <p className="u-mark r-up mt-5 text-lift">02 / Why this exists</p>

          <div className="mt-12 space-y-10 lg:mt-24">
            <p className="u-body r-up text-[0.95rem] text-cream/75" style={{ ['--d' as string]: '120ms' }}>
              You are good at one thing. The brief wants four. So the job goes to
              an agency that is worse than you at all of them, and you get called
              in at the bottom of the chain, on their margin, on their terms.
            </p>
            <p className="u-body r-up text-[0.95rem] text-cream/55" style={{ ['--d' as string]: '220ms' }}>
              Meanwhile the four people who could have done it properly are each
              sitting alone in a different part of the city, quoting against each
              other, and guessing at their own rates.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 lg:col-start-5">
          <h2 className="u-display text-[length:var(--t-xl)]">
            <span className="r-line"><span>Seoul is full of</span></span>
            <span className="r-line"><span style={{ ['--d' as string]: '90ms' }}>people doing</span></span>
            <span className="r-line"><span style={{ ['--d' as string]: '180ms' }}>excellent work</span></span>
            <span className="r-line">
              <span className="italic text-cream/50" style={{ ['--d' as string]: '270ms' }}>in isolation.</span>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Tension;
