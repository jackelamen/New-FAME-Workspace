import React from 'react';
import Backdrop from './Backdrop.tsx';
import { CONTACT_EMAIL } from '../constants.tsx';

interface InvitationProps {
  onApply: () => void;
}

const Invitation: React.FC<InvitationProps> = ({ onApply }) => (
  <div className="relative py-36 md:py-56 overflow-hidden">
    <Backdrop clip="invitation" dim={0.76} />

    <div className="relative z-10 max-w-[82rem] mx-auto px-6 lg:px-12">
      <p className="u-label text-cream text-scrim mb-10">The founding cohort</p>

      <p className="u-display text-scrim text-[clamp(2.4rem,7vw,5.5rem)] max-w-[15ch] mb-12">
        We would rather start with twelve of the right people.
      </p>

      <p className="u-body text-[1.1rem] md:text-[1.25rem] text-cream/85 max-w-[48ch] mb-14">
        Founding members shape how this works: the rate bands, the split, who
        gets in next. That is not a perk of joining early. It is the reason to.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12">
        <button
          onClick={onApply}
          className="u-label text-[0.6875rem] bg-ember text-void px-9 py-4 hover:bg-cream transition-colors duration-300"
        >
          Apply to join
        </button>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="u-body text-[0.95rem] text-cream/75 hover:text-cream transition-colors break-all self-center"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  </div>
);

export default Invitation;
