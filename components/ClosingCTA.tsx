import React from 'react';
import { CONTACT_EMAIL } from '../constants.tsx';

interface ClosingCTAProps {
  onContactClick: () => void;
}

const ClosingCTA: React.FC<ClosingCTAProps> = ({ onContactClick }) => (
  <div className="max-w-[76rem] mx-auto px-6 lg:px-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end">
      <div className="lg:col-span-7">
        <p className="u-eyebrow text-deep mb-5">Next step</p>
        <h2 className="u-display text-[clamp(2rem,5vw,3.6rem)]">
          Send us the product
          <br />
          and the market.
        </h2>
        <p className="u-read text-[1.2rem] text-ink/80 mt-6 max-w-[42ch]">
          We will come back with an honest read on whether it can work there, what it
          would cost to find out, and who we would need to call.
        </p>
      </div>

      <div className="lg:col-span-5 lg:border-l lg:border-ink/12 lg:pl-10">
        <button
          onClick={onContactClick}
          className="w-full bg-ink text-paper px-8 py-5 text-base font-semibold hover:bg-deep transition-colors"
        >
          Start a conversation
        </button>
        <p className="u-eyebrow text-muted mt-7 mb-2">Or email us</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="u-display-tight text-[1.05rem] text-ink border-b-2 border-turq pb-1 break-all"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  </div>
);

export default ClosingCTA;
