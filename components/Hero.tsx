import React from 'react';
import Backdrop from './Backdrop.tsx';

interface HeroProps {
  onApply: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApply }) => (
  <header className="relative min-h-[100svh] flex flex-col justify-end pt-32 pb-10 overflow-hidden">
    <Backdrop clip="hero" dim={0.74} />

    <div className="relative z-10 max-w-[82rem] mx-auto px-6 lg:px-12 w-full">
      <p className="u-label text-cream text-scrim mb-8 fade" style={{ animationDelay: '200ms' }}>
        Forming now · Seoul
      </p>

      <h1 className="u-display text-scrim text-[clamp(2.6rem,min(7vw,12vh),5.75rem)] max-w-[18ch] rise" style={{ animationDelay: '320ms' }}>
        A collective for the people who actually make
        <span className="text-cream/95"> the night happen.</span>
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12 items-end mt-14 md:mt-20 border-t u-rule pt-8 fade"
        style={{ animationDelay: '620ms' }}
      >
        <p className="md:col-span-6 u-body text-[1.05rem] md:text-[1.2rem] text-cream/90 max-w-[48ch]">
          FAME is being built as a collective of artists and entrepreneurs across
          food, artistry, media and events. Based in Seoul. Not limited to it.
          We are choosing the founding members now.
        </p>

        <div className="md:col-span-4 md:col-start-9 flex flex-col items-start gap-5">
          <button
            onClick={onApply}
            className="u-label text-[0.6875rem] bg-ember text-void px-8 py-4 hover:bg-cream transition-colors duration-300"
          >
            Apply to join
          </button>
          <a
            href="#why"
            className="u-label text-[0.6875rem] text-cream/75 hover:text-cream transition-colors duration-300"
          >
            Read the case first
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
