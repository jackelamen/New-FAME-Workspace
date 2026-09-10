import React from 'react';
import { STEPS } from '../constants.tsx';

const Joining: React.FC = () => (
  <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-16 md:mb-24">
      <p className="u-label text-ember">How you join</p>
      <p className="u-body text-[1.05rem] text-dim max-w-[38ch] md:text-right">
        Four steps, and both sides can stop at any of them.
      </p>
    </div>

    <ol className="grid grid-cols-1 md:grid-cols-4 gap-px bg-cream/10 border u-rule">
      {STEPS.map((step) => (
        <li key={step.index} className="bg-void p-8 md:p-10 flex flex-col">
          <span className="u-label text-[0.6875rem] text-ember mb-8">{step.index}</span>
          <h3 className="u-display text-[1.6rem] leading-tight mb-4">{step.title}</h3>
          <p className="u-body text-[0.95rem] text-dim">{step.detail}</p>
        </li>
      ))}
    </ol>
  </div>
);

export default Joining;
