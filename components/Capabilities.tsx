import React from 'react';
import { CAPABILITIES, MARKETS } from '../constants.tsx';
import SectionHead from './SectionHead.tsx';

const Capabilities: React.FC = () => (
  <div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
      <div className="lg:col-span-7">
        <SectionHead
          eyebrow="The team"
          title={<>The trading side and the creative side are the same people.</>}
          lede="That is the unusual part. The team pitching your product to a buyer in Atlanta is the team that shot the campaign, ran the launch party and wrote the Korean copy. Nothing gets handed to an agency and lost."
        />

        <p className="u-read text-[1.05rem] text-muted mt-8 max-w-[46ch]">
          Headquartered in Seoul, with people in {MARKETS.slice(1, -1).join(', ')} and{' '}
          {MARKETS[MARKETS.length - 1]}.
        </p>
      </div>

      <div className="lg:col-span-5">
        <dl className="border-t border-ink/12">
          {CAPABILITIES.map((cap) => (
            <div key={cap.id} className="py-6 border-b border-ink/12">
              <dt className="flex items-baseline justify-between gap-6 mb-2">
                <span className="u-display text-[1.35rem]">{cap.title}</span>
                <span className="u-eyebrow text-muted text-right">{cap.line}</span>
              </dt>
              <dd className="u-read text-[1.02rem] text-ink/75 max-w-[44ch]">{cap.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default Capabilities;
