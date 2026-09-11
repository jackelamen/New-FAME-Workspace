import React from 'react';

/* The construction grid.

   Fixed behind everything, twelve columns of hairline, drawn top-down on load.
   It is the reason the layout can hang things asymmetrically and still read as
   deliberate: there is a visible structure to hang them off. Architectural
   drawing borrowed honestly rather than as decoration, since the subject is a
   collective being built.

   Sits above the footage rather than behind it so the same structure reads
   across dark sections and video alike. Plain opacity rather than a blend
   mode: overlay against a near-black ground renders as nothing. */
const Grid: React.FC = () => (
  <div className="pointer-events-none fixed inset-0 z-[45]" aria-hidden="true">
    <div className="mx-auto h-full max-w-[110rem] px-[var(--gut)]">
      <div className="grid h-full grid-cols-4 md:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-full border-l u-rule opacity-[0.45] r-draw-y is-in ${
              i >= 4 ? 'hidden md:block' : ''
            }`}
            style={{ transitionDelay: `${300 + i * 55}ms` }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Grid;
