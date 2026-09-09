import React from 'react';
import { PROCESS } from '../constants.tsx';
import SectionHead from './SectionHead.tsx';

const Process: React.FC = () => (
  <div>
    <SectionHead
      eyebrow="How it works"
      title={<>Four stages, and you can stop after any of them.</>}
      lede="We would rather tell you in week two that a market is wrong for you than take a retainer for a year to find out."
      invert
    />

    <ol className="mt-16 md:mt-20 border-t border-paper/20">
      {PROCESS.map((step) => (
        <li
          key={step.index}
          className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-8 py-9 border-b border-paper/20"
        >
          <div className="md:col-span-1">
            <span className="u-display-tight text-[1.1rem] text-turq">{step.index}</span>
          </div>
          <div className="md:col-span-4">
            <h3 className="u-display text-[1.4rem] text-paper">{step.title}</h3>
          </div>
          <div className="md:col-span-5">
            <p className="u-read text-[1.05rem] text-paper/75">{step.detail}</p>
          </div>
          <div className="md:col-span-2">
            <p className="u-eyebrow text-paper/60 mb-2">You get</p>
            <p className="text-[0.95rem] leading-snug text-paper/85">{step.output}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default Process;
