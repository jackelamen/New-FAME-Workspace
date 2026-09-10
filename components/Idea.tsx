import React from 'react';
import Backdrop from './Backdrop.tsx';

const Idea: React.FC = () => (
  <div className="relative py-32 md:py-52 overflow-hidden">
    <Backdrop clip="idea" dim={0.7} />

    <div className="relative z-10 max-w-[82rem] mx-auto px-6 lg:px-12">
      <p className="u-label text-lift mb-10">The idea</p>

      <p className="u-display text-[clamp(2.2rem,6vw,5rem)] max-w-[19ch]">
        Not an agency you work for. A collective you belong to.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mt-16 md:mt-24 max-w-[70rem]">
        <p className="u-body text-[1.05rem] text-cream/85">
          You keep your own name, your own clients and your own practice.
          Nothing about the collective sits between you and the work you
          already have.
        </p>
        <p className="u-body text-[1.05rem] text-cream/85">
          What you gain is a body that can take on briefs none of us could win
          alone, and split them between the people best placed to deliver each
          part.
        </p>
        <p className="u-body text-[1.05rem] text-cream/85">
          Members hold a share of what the collective wins. This is ownership,
          not a roster you get listed on and forgotten.
        </p>
      </div>
    </div>
  </div>
);

export default Idea;
