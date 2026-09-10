import React from 'react';

/* The strategic centre of the page: the pitch is the overlap, not the list. */
const Overlap: React.FC = () => (
  <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
      <div className="lg:col-span-2">
        <p className="u-label text-ember">Where the work lives</p>
      </div>

      <div className="lg:col-span-10">
        <p className="u-display text-[clamp(2.1rem,5.2vw,4.25rem)] max-w-[20ch]">
          The strongest work happens in the overlap.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-14 md:mt-20 max-w-[62rem]">
          <p className="u-body text-[1.05rem] md:text-[1.15rem] text-cream/85">
            A dining concept, art-directed, filmed as it happens, produced as a
            live event. One brief, one team, four disciplines feeding a single
            night.
          </p>
          <p className="u-body text-[1.05rem] md:text-[1.15rem] text-dim">
            The alternative is four vendors, four timelines and four versions of
            the idea. We were built to remove that.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Overlap;
