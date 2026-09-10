import React from 'react';
import { FIT } from '../constants.tsx';

/* Saying who this is not for is what makes the yes column credible, and it
   filters the applications before they cost anyone a conversation. */
const Fit: React.FC = () => (
  <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
    <p className="u-label text-ember mb-10">Honestly</p>
    <p className="u-display text-[clamp(2rem,5vw,3.75rem)] max-w-[20ch] mb-16 md:mb-24">
      This is not for everyone, and it should not be.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
      <div>
        <p className="u-label text-[0.6875rem] text-cream mb-7">This is for you if</p>
        <ul className="border-t u-rule">
          {FIT.yes.map((line) => (
            <li key={line} className="flex gap-5 py-5 border-b u-rule">
              <span className="u-body text-ember text-[1rem] leading-relaxed shrink-0">+</span>
              <span className="u-body text-[1.05rem] text-cream/90">{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="u-label text-[0.6875rem] text-dim mb-7">It is not, if</p>
        <ul className="border-t u-rule">
          {FIT.no.map((line) => (
            <li key={line} className="flex gap-5 py-5 border-b u-rule">
              <span className="u-body text-dim text-[1rem] leading-relaxed shrink-0">&minus;</span>
              <span className="u-body text-[1.05rem] text-dim">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Fit;
