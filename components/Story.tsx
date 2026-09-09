import React, { useState } from 'react';
import { TIMELINE } from '../constants.tsx';
import SectionHead from './SectionHead.tsx';

const Story: React.FC = () => {
  const [active, setActive] = useState(TIMELINE.length - 1);
  const event = TIMELINE[active] ?? TIMELINE[0];

  return (
    <div>
      <SectionHead
        eyebrow="Where we came from"
        title={<>We were a party company. Then every venue in Korea closed.</>}
        lede="The reason we can open doors for a product is that we spent years opening them for a crowd. Same network, different cargo."
      />

      <div
        className="mt-14 flex gap-2 overflow-x-auto no-scrollbar border-b border-ink/12 pb-px"
        role="tablist"
        aria-label="Company history by year"
      >
        {TIMELINE.map((item, index) => (
          <button
            key={item.year}
            role="tab"
            aria-selected={active === index}
            onClick={() => setActive(index)}
            className={`px-5 py-3 text-[0.95rem] font-semibold whitespace-nowrap transition-colors border-b-2 -mb-px ${
              active === index
                ? 'border-deep text-ink'
                : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            {item.year}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 pt-12">
        <div className="lg:col-span-7">
          <p className="u-eyebrow text-deep mb-4">{event.label}</p>
          <h3 className="u-display text-[clamp(1.6rem,3.4vw,2.5rem)] mb-6">{event.title}</h3>
          <p
            className="u-read text-[1.2rem] text-ink/80 max-w-[46ch]"
            dangerouslySetInnerHTML={{ __html: event.description }}
          />
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-ink/12 lg:pl-10">
          <p className="u-eyebrow text-muted mb-5">
            {event.year === 'Now' ? 'Right now' : 'That year'}
          </p>
          <ul className="space-y-3">
            {event.milestones.map((milestone) => (
              <li key={milestone} className="flex gap-4 text-[1rem] text-ink/85">
                <span className="w-1.5 h-1.5 rounded-full bg-deep mt-[0.55rem] shrink-0" />
                {milestone}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Story;
