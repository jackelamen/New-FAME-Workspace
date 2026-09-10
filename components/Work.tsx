import React from 'react';
import { WORK } from '../constants.tsx';

/* Two states by design.

   Once real projects with cleared imagery exist, this is an image-led
   "Selected work" grid, which is what an image-forward brand wants.

   Until then it renders as a typographic index of the formats we produce.
   That is a claim we can actually stand behind, where three empty panels
   under a "selected work" heading would read as either unfinished or as
   past projects we have not shown. */
const Work: React.FC = () => {
  const hasImagery = WORK.some((item) => item.image);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-14 md:mb-20">
        <p className="u-label text-ember">{hasImagery ? 'Selected work' : 'What we produce'}</p>
        <p className="u-body text-[1.05rem] text-dim max-w-[36ch] md:text-right">
          For premium brands, hospitality concepts and public cultural events.
        </p>
      </div>

      {hasImagery ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {WORK.filter((item) => item.image).map((item) => (
            <figure key={item.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-raise border u-rule">
                <img
                  src={item.image as string}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.35] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1200ms] ease-out"
                />
              </div>
              <figcaption className="pt-5">
                <p className="u-label text-[0.625rem] text-ember mb-2.5">{item.category}</p>
                <h3 className="u-display text-[1.75rem] mb-3">{item.title}</h3>
                <p className="u-body text-[0.9rem] text-dim">{item.pillars.join(' · ')}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="border-t u-rule">
          {WORK.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-y-3 gap-x-8 items-baseline py-9 md:py-12 border-b u-rule"
            >
              <div className="md:col-span-3">
                <p className="u-label text-[0.625rem] text-ember">{item.category}</p>
              </div>
              <div className="md:col-span-5">
                <h3 className="u-display text-[clamp(1.75rem,3.2vw,2.5rem)]">{item.title}</h3>
              </div>
              <div className="md:col-span-4">
                <p className="u-body text-[0.95rem] text-dim">{item.pillars.join(' · ')}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Work;
