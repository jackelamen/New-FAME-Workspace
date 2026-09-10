import React from 'react';

/* The argument opens with the reader's problem, not with us. Nobody joins a
   collective because the collective is nice; they join because working alone
   has a ceiling they have already hit. */
const Tension: React.FC = () => (
  <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
      <div className="lg:col-span-3">
        <p className="u-label text-ember">Why this exists</p>
      </div>

      <div className="lg:col-span-9">
        <p className="u-display text-[clamp(2rem,5vw,4rem)] max-w-[22ch] mb-14 md:mb-20">
          Seoul is full of people doing excellent work in isolation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[64rem]">
          <p className="u-body text-[1.05rem] md:text-[1.15rem] text-cream/85">
            You are good at one thing. The brief wants four. So the job goes to
            an agency that is worse than you at all of them, and you get called
            in at the bottom of the chain, on their margin, on their terms.
          </p>
          <p className="u-body text-[1.05rem] md:text-[1.15rem] text-dim">
            Meanwhile the four people who could have done it properly are each
            sitting alone in a different part of the city, quoting against each
            other, and guessing at their own rates.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Tension;
