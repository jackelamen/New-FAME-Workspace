import React from 'react';
import { OFFER, ASKS } from '../constants.tsx';

const Offer: React.FC = () => (
  <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
    <p className="u-label text-ember mb-10">What you get</p>
    <p className="u-display text-[clamp(2rem,5vw,3.75rem)] max-w-[20ch] mb-16 md:mb-24">
      Five things that are hard to get on your own.
    </p>

    <div className="border-t u-rule">
      {OFFER.map((item) => (
        <article
          key={item.index}
          className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-8 py-9 md:py-12 border-b u-rule"
        >
          <div className="md:col-span-1">
            <span className="u-label text-[0.6875rem] text-ember">{item.index}</span>
          </div>
          <div className="md:col-span-4">
            <h3 className="u-display text-[1.9rem] leading-tight">{item.title}</h3>
          </div>
          <div className="md:col-span-7">
            <p className="u-body text-[1.05rem] text-cream/85 max-w-[62ch]">{item.detail}</p>
          </div>
        </article>
      ))}
    </div>

    {/* The reciprocity half. Without it the page reads as a subscription pitch
        and the people worth recruiting will notice. */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 mt-24 md:mt-32">
      <div className="lg:col-span-4">
        <p className="u-label text-ember mb-6">And what we ask</p>
        <p className="u-body text-[1.05rem] text-dim max-w-[32ch]">
          A collective is only worth joining if everyone in it is carrying
          something.
        </p>
      </div>
      <ul className="lg:col-span-8 border-t u-rule">
        {ASKS.map((ask) => (
          <li key={ask} className="py-6 border-b u-rule u-body text-[1.15rem] md:text-[1.3rem] text-cream/90">
            {ask}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Offer;
