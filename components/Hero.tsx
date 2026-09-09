import React from 'react';
import { MARKETS } from '../constants.tsx';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <div className="relative flex items-center pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Single quiet ground tone. No ambient glow stack. */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_78%_8%,rgba(64,224,208,0.16)_0%,transparent_58%)]" />

      <div className="max-w-[76rem] mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-14 items-end">
          <div className="lg:col-span-8">
            <p className="u-eyebrow text-deep mb-6 rise" style={{ animationDelay: '60ms' }}>
              Seoul · Lifestyle trading house · Since 2016
            </p>

            {/* Wrapped by measure, not by hard breaks, so the rag survives a
                font fallback or a narrow viewport. */}
            <h1
              className="u-display text-[clamp(2.1rem,5vw,4.15rem)] max-w-[17ch] rise"
              style={{ animationDelay: '140ms' }}
            >
              We put Korean brands on shelves that have{' '}
              <span className="text-deep">never heard of them.</span>
            </h1>

            <p
              className="u-read text-[1.15rem] md:text-[1.3rem] text-ink/85 max-w-[44ch] mt-7 rise"
              style={{ animationDelay: '240ms' }}
            >
              And we bring overseas companies into Korea the same way. Distribution,
              retail placement, and the creative work that makes a product actually
              sell once it gets there.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9 rise" style={{ animationDelay: '340ms' }}>
              <button
                onClick={onContactClick}
                className="bg-ink text-paper px-8 py-4 text-base font-semibold hover:bg-deep transition-colors"
              >
                Tell us about your brand
              </button>
              <a
                href="#services"
                className="border border-ink/25 px-8 py-4 text-base font-semibold text-center hover:border-ink hover:bg-ink hover:text-paper transition-colors"
              >
                See what that involves
              </a>
            </div>
          </div>

          {/* Secondary stop: where the work happens, stated plainly. */}
          <div className="lg:col-span-4 lg:border-l lg:border-ink/12 lg:pl-10 rise" style={{ animationDelay: '440ms' }}>
            <p className="u-eyebrow text-muted mb-5">On the ground in</p>
            <ul className="space-y-2.5">
              {MARKETS.map((market) => (
                <li key={market} className="u-display-tight text-[1.35rem] leading-none text-ink/90">
                  {market}
                </li>
              ))}
            </ul>
            <p className="u-read text-base text-muted mt-6 max-w-[30ch]">
              Ten years of running events, campaigns and retail in Korea, pointed
              at moving your product across a border.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
