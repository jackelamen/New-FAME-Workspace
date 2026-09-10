import React from 'react';
import { CONTACT_EMAIL } from '../constants.tsx';

interface ContactProps {
  onContactClick: () => void;
}

const Contact: React.FC<ContactProps> = ({ onContactClick }) => (
  <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-end">
      <div className="lg:col-span-7">
        <p className="u-label text-ember mb-8">Enquiries</p>
        <p className="u-display text-[clamp(2.4rem,6.5vw,5rem)] max-w-[14ch]">
          Tell us what the night should feel like.
        </p>
      </div>

      <div className="lg:col-span-4 lg:col-start-9">
        <p className="u-body text-[1.05rem] text-cream/80 mb-10 max-w-[36ch]">
          Brief, budget range and dates if you have them. We reply to everything.
        </p>

        <button
          onClick={onContactClick}
          className="u-label text-[0.6875rem] text-cream border-b border-ember pb-2 hover:text-ember transition-colors duration-300"
        >
          Start a project
        </button>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="block u-body text-[0.95rem] text-dim hover:text-cream transition-colors mt-8 break-all"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
