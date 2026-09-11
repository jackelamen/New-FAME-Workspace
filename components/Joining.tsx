import React from 'react';
import { STEPS } from '../constants.tsx';
import { useReveal } from '../lib/motion.ts';

/* Four steps drawn as a run of nodes on a single line that draws itself in,
   rather than four bordered cards. The line is the point: it says the process
   is one continuous thing you can stop partway along, which is exactly what
   the copy claims. */
const Joining: React.FC = () => {
  const root = useReveal<HTMLDivElement>();

  return (
    <div ref={root} className="mx-auto w-full max-w-[110rem] px-[var(--gut)]">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <p className="u-mark r-up text-lift">06 / How you join</p>
        <p className="u-body r-up max-w-[36ch] text-[0.95rem] text-cream/60 md:text-right" style={{ ['--d' as string]: '90ms' }}>
          Four steps, and both sides can stop at any of them.
        </p>
      </div>

      <div className="relative mt-20 md:mt-32">
        {/* The connector. Drawn once, behind every node. */}
        <div className="r-draw absolute left-0 right-0 top-[7px] hidden h-px bg-cream/25 md:block" />

        <ol className="grid grid-cols-1 gap-y-14 md:grid-cols-4 md:gap-x-10">
          {STEPS.map((step, i) => (
            <li key={step.index} className="relative">
              <div
                className="r-up mb-8 hidden h-[15px] w-[15px] rounded-full border border-cream/40 bg-void md:block"
                style={{ ['--d' as string]: `${300 + i * 130}ms` }}
              >
                <div className="m-[3px] h-[7px] w-[7px] rounded-full bg-lift" />
              </div>

              <div className="r-up" style={{ ['--d' as string]: `${380 + i * 130}ms` }}>
                <span className="u-mark text-cream/40">{step.index}</span>
                <h3 className="u-display mt-4 text-[clamp(1.5rem,2.2vw,2rem)]">{step.title}</h3>
                <p className="u-body mt-4 max-w-[30ch] text-[0.9rem] text-cream/60">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Joining;
