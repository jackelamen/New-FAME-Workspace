import React from 'react';
import { PILLARS } from '../constants.tsx';

/* The acronym doubles as the membership map: the four letters say who fits. */
const Members: React.FC = () => (
  <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-16 md:mb-24">
      <p className="u-label text-ember">Who we are assembling</p>
      <p className="u-body text-[1.05rem] text-dim max-w-[36ch] md:text-right">
        Four disciplines. The name has always spelled them out.
      </p>
    </div>

    <div className="border-t u-rule">
      {PILLARS.map((pillar) => (
        <article
          key={pillar.name}
          className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-8 items-baseline py-10 md:py-14 border-b u-rule"
        >
          <div className="md:col-span-1">
            <span className="u-display-it text-[2.5rem] text-ember">{pillar.letter}</span>
          </div>
          <div className="md:col-span-3">
            <h3 className="u-display text-[clamp(2rem,4vw,3rem)]">{pillar.name}</h3>
          </div>
          <div className="md:col-span-4">
            <p className="u-body text-[1rem] text-cream/85">{pillar.line}</p>
          </div>
          <div className="md:col-span-4">
            <p className="u-body text-[1rem] text-dim">{pillar.detail}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Members;
