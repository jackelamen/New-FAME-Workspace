import React from 'react';
import { PILLARS, HERO_IMAGE } from '../constants.tsx';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => (
  <header className="relative min-h-[100svh] flex flex-col pt-28 md:pt-32 pb-8 overflow-hidden">
    <div className="max-w-[82rem] mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-center">
        <div className="lg:col-span-7">
          <p className="u-label text-dim mb-8 md:mb-12 fade" style={{ animationDelay: '150ms' }}>
            Seoul · Creative &amp; experiential
          </p>

          {/* The four words are the company name. Reading the coloured initials
              down the column spells FAME, so the accent carries meaning rather
              than decorating. Sized against viewport height as well as width so
              all four lines and the footer bar survive on a laptop screen. */}
          <h1 className="u-display text-[clamp(2.9rem,min(10.5vw,13vh),7.5rem)]">
            {PILLARS.map((pillar, i) => (
              <span
                key={pillar.name}
                className="block rise"
                style={{ animationDelay: `${240 + i * 110}ms` }}
              >
                <span className="text-ember">{pillar.letter}</span>
                {pillar.name.slice(1)}
                <span className="text-ember">.</span>
              </span>
            ))}
          </h1>
        </div>

        {/* Image-forward brand, so the hero is built around a still. Until one
            lands this is an atmospheric panel, not a labelled placeholder. */}
        <div className="hidden lg:block lg:col-span-5 fade" style={{ animationDelay: '700ms' }}>
          <div className="relative aspect-[4/5] max-h-[62vh] ml-auto overflow-hidden bg-raise border u-rule">
            {HERO_IMAGE ? (
              <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_60%_15%,rgba(196,98,45,0.20)_0%,transparent_68%)]" />
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-[82rem] mx-auto px-6 lg:px-12 w-full">
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t u-rule pt-7 fade"
        style={{ animationDelay: '900ms' }}
      >
        <p className="u-body text-[1rem] md:text-[1.1rem] text-cream/85 max-w-[44ch]">
          Four disciplines under one creative direction. We design and produce
          experiences for brands, cultural institutions and venue operators.
        </p>
        <button
          onClick={onContactClick}
          className="u-label text-[0.6875rem] text-cream border-b border-ember pb-2 self-start whitespace-nowrap hover:text-ember transition-colors duration-300"
        >
          Start a project
        </button>
      </div>
    </div>
  </header>
);

export default Hero;
