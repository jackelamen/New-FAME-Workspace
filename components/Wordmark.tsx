import React from 'react';

/* The mark is the word set in the display serif. No lockup, no icon: it has to
   survive as type alone, which is what a serif wordmark is good at. */
const Wordmark: React.FC<{ small?: boolean }> = ({ small = false }) => (
  <a href="#top" className="inline-flex items-baseline gap-2.5" aria-label="FAME Entertainment Group, back to top">
    <span className={`u-display tracking-[0.12em] ${small ? 'text-[1.5rem]' : 'text-[1.75rem]'}`}>
      FAME
    </span>
    <span className="u-label text-[0.625rem] text-dim tracking-[0.2em]">Ent. Group</span>
  </a>
);

export default Wordmark;
