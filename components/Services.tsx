import React from 'react';
import { SERVICES } from '../constants.tsx';
import SectionHead from './SectionHead.tsx';

interface ServicesProps {
  onContactClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onContactClick }) => (
  <div>
    <SectionHead
      eyebrow="What we do"
      title={<>Two jobs. Both of them are moving a brand across a border.</>}
      lede="Most of our work is one of these. If yours is neither, say so anyway and we will tell you honestly whether we are the right people."
    />

    <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink/12 border border-ink/12">
      {SERVICES.map((service) => (
        <article key={service.id} className="bg-paper p-8 md:p-12 flex flex-col">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="u-display-tight text-[1.1rem] text-deep">{service.index}</span>
            <span className="u-eyebrow text-muted">{service.audience}</span>
          </div>

          <h3 className="u-display text-[clamp(1.5rem,2.6vw,2rem)] mb-5">{service.title}</h3>

          <p className="u-read text-[1.1rem] text-ink/80 mb-9 min-h-0 md:min-h-[9.5rem]">{service.summary}</p>

          <ul className="border-t border-ink/12">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-4 py-4 border-b border-ink/12">
                <span className="w-1.5 h-1.5 rounded-full bg-deep mt-[0.6rem] shrink-0" />
                <span className="text-[1rem] leading-relaxed text-ink/85">{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={onContactClick}
            className="self-start mt-auto pt-9 text-[1rem] font-semibold text-ink border-b-2 border-turq pb-1 hover:border-ink transition-colors"
          >
            Talk to us about this
          </button>
        </article>
      ))}
    </div>
  </div>
);

export default Services;
