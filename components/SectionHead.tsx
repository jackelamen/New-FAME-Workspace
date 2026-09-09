import React from 'react';

interface SectionHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  invert?: boolean;
}

/* One header treatment for every section, deliberately smaller than the hero
   so the page has a single first stop instead of six competing ones. */
const SectionHead: React.FC<SectionHeadProps> = ({ eyebrow, title, lede, invert = false }) => (
  <div className="max-w-[52rem]">
    <p className={`u-eyebrow mb-5 ${invert ? 'text-turq' : 'text-deep'}`}>{eyebrow}</p>
    <h2 className={`u-display text-[clamp(1.9rem,4.2vw,3.1rem)] ${invert ? 'text-paper' : 'text-ink'}`}>
      {title}
    </h2>
    {lede && (
      <p className={`u-read text-[1.15rem] md:text-[1.25rem] mt-6 max-w-[46ch] ${invert ? 'text-paper/80' : 'text-ink/80'}`}>
        {lede}
      </p>
    )}
  </div>
);

export default SectionHead;
