import React from 'react';
import { FIT } from '../constants.tsx';
import { useReveal } from '../lib/motion.ts';

/* Two columns that are deliberately not equals. The qualifying side is set
   in display type at full weight; the disqualifying side is small, grey and
   indented. Matching the two would have implied the answer is balanced. It
   is not: the page wants one of these readers and not the other. */
const Fit: React.FC = () => {
  const root = useReveal<HTMLDivElement>();

  return (
    <div ref={root} className="mx-auto w-full max-w-[110rem] px-[var(--gut)]">
      <div className="r-draw h-px w-full bg-cream/25" />
      <p className="u-mark r-up mt-5 text-lift">05 / Honestly</p>

      <div className="mt-16 grid grid-cols-1 gap-y-20 lg:grid-cols-12 lg:gap-x-10 md:mt-24">
        <div className="lg:col-span-7">
          <h2 className="u-display mb-12 text-[length:var(--t-lg)] text-cream/45">
            <span className="r-line"><span>This is for you if</span></span>
          </h2>
          <ul>
            {FIT.yes.map((line, i) => (
              <li key={line} className="border-b u-rule py-6 first:border-t">
                <span className="u-display r-line block text-[clamp(1.4rem,2.6vw,2.35rem)]">
                  <span style={{ ['--d' as string]: `${i * 85}ms` }}>{line}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 lg:pt-40">
          <p className="u-mark r-up mb-8 text-cream/40">It is not, if</p>
          <ul className="space-y-5">
            {FIT.no.map((line, i) => (
              <li
                key={line}
                className="u-body r-up text-[0.9rem] text-cream/45"
                style={{ ['--d' as string]: `${i * 70}ms` }}
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fit;
