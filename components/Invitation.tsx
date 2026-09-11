import React from 'react';
import Backdrop from './Backdrop.tsx';
import { CONTACT_EMAIL } from '../constants.tsx';
import { useReveal } from '../lib/motion.ts';

/* The close. Mega scale, nothing else on the sheet, and the counterweight is
   a single tabular count so the scarcity reads as a fact rather than a
   marketing line. */
const Invitation: React.FC<{ onApply: () => void }> = ({ onApply }) => {
  const root = useReveal<HTMLDivElement>();

  return (
    <div className="relative overflow-hidden py-44 md:py-72">
      <Backdrop clip="invitation" dim={0.76} />

      <div ref={root} className="relative z-10 mx-auto w-full max-w-[110rem] px-[var(--gut)]">
        <div className="r-up flex items-baseline justify-between border-b u-rule pb-4">
          <span className="u-mark text-cream">The founding cohort</span>
          <span className="u-mark text-cream/50">Twelve places</span>
        </div>

        <h2 className="u-display text-scrim mt-14 max-w-[13ch] text-[length:var(--t-mega)] md:mt-20">
          <span className="r-line"><span>We would</span></span>
          <span className="r-line"><span style={{ ['--d' as string]: '100ms' }}>rather start</span></span>
          <span className="r-line">
            <span className="italic" style={{ ['--d' as string]: '200ms' }}>with twelve.</span>
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 lg:grid-cols-12">
          <p className="u-body r-up text-[1.05rem] text-cream/85 lg:col-span-5 md:text-[1.2rem]">
            Founding members shape how this works: the rate bands, the split,
            who gets in next. That is not a perk of joining early. It is the
            reason to.
          </p>

          <div className="r-up flex flex-col items-start gap-6 lg:col-span-4 lg:col-start-9" style={{ ['--d' as string]: '120ms' }}>
            <button
              onClick={onApply}
              className="u-label w-full bg-ember px-9 py-5 text-[length:var(--small)] text-void transition-colors duration-300 hover:bg-cream sm:w-auto"
            >
              Apply to join
            </button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="u-body break-all text-[0.9rem] text-cream/65 transition-colors hover:text-cream"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
