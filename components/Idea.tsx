import React from 'react';
import Backdrop from './Backdrop.tsx';
import { useReveal } from '../lib/motion.ts';

/* The pivot of the whole argument, so it gets the page to itself: one
   statement at display size with no supporting grid underneath it. The three
   clarifications sit far below, small, where they cannot dilute it. */
const Idea: React.FC = () => {
  const root = useReveal<HTMLDivElement>();

  return (
    <div className="relative overflow-hidden py-40 md:py-64">
      <Backdrop clip="idea" dim={0.76} />

      <div ref={root} className="relative z-10 mx-auto w-full max-w-[110rem] px-[var(--gut)]">
        <h2 className="u-display text-scrim text-[length:var(--t-xl)] max-w-[15ch]">
          <span className="r-line"><span>Not an agency</span></span>
          <span className="r-line"><span style={{ ['--d' as string]: '100ms' }}>you work for.</span></span>
          <span className="r-line">
            <span className="italic" style={{ ['--d' as string]: '200ms' }}>A collective</span>
          </span>
          <span className="r-line">
            <span className="italic" style={{ ['--d' as string]: '280ms' }}>you belong to.</span>
          </span>
        </h2>

        <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-14 lg:mt-40 lg:w-2/3 lg:ml-auto">
          {[
            'You keep your own name, your own clients and your own practice. Nothing about the collective sits between you and the work you already have.',
            'What you gain is a body that can take on briefs none of us could win alone, and split them between the people best placed to deliver each part.',
            'Members hold a share of what the collective wins. This is ownership, not a roster you get listed on and forgotten.',
          ].map((copy, i) => (
            <div key={i} className="r-up" style={{ ['--d' as string]: `${i * 110}ms` }}>
              <div className="mb-4 h-px w-8 bg-lift" />
              <p className="u-body text-[0.95rem] text-cream/80">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Idea;
