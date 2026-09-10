import React from 'react';
import { PILLARS } from '../constants.tsx';

const Disciplines: React.FC = () => (
  <div>
    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-16 md:mb-24">
      <p className="u-label text-ember">The four</p>
      <p className="u-body text-[1.05rem] text-dim max-w-[38ch] md:text-right">
        Held in house, so one team carries a concept from the idea to the night itself.
      </p>
    </div>

    <div className="border-t u-rule">
      {PILLARS.map((pillar) => (
        <article
          key={pillar.name}
          className="group grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-8 items-baseline py-10 md:py-14 border-b u-rule"
        >
          <div className="md:col-span-1">
            <span className="u-display-it text-[2.5rem] text-ember">{pillar.letter}</span>
          </div>

          <div className="md:col-span-4">
            <h3 className="u-display text-[clamp(2rem,4.5vw,3.25rem)]">{pillar.name}</h3>
          </div>

          <div className="md:col-span-3">
            <p className="u-label text-[0.6875rem] text-dim">{pillar.line}</p>
          </div>

          <div className="md:col-span-4">
            <p className="u-body text-[1rem] text-cream/80">{pillar.detail}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Disciplines;
