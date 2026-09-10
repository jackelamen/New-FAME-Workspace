import React from 'react';
import { CLIENTS, HERITAGE } from '../constants.tsx';

const Studio: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16">
    <div className="lg:col-span-5">
      <p className="u-label text-ember mb-8">The studio</p>
      <p className="u-display text-[clamp(1.9rem,3.6vw,2.75rem)] max-w-[18ch] mb-10">
        Seoul, since 2016.
      </p>

      <ul className="border-t u-rule">
        {HERITAGE.map((entry) => (
          <li key={entry.year} className="flex gap-8 py-4 border-b u-rule">
            <span className="u-label text-[0.6875rem] text-ember w-16 shrink-0 pt-0.5">
              {entry.year}
            </span>
            <span className="u-body text-[0.95rem] text-cream/80">{entry.note}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="lg:col-span-6 lg:col-start-7">
      <p className="u-label text-dim mb-8">Who we work with</p>
      <dl className="border-t u-rule">
        {CLIENTS.map((client) => (
          <div key={client.label} className="py-8 border-b u-rule">
            <dt className="u-display text-[1.9rem] mb-3">{client.label}</dt>
            <dd className="u-body text-[1rem] text-cream/80 max-w-[46ch]">{client.detail}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);

export default Studio;
