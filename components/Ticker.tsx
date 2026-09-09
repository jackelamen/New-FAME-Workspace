import React from 'react';
import { TICKER } from '../constants.tsx';

const Ticker: React.FC = () => (
  <div className="relative py-4 bg-ink text-paper overflow-hidden whitespace-nowrap" aria-hidden="true">
    <div className="marquee">
      {[0, 1, 2, 3].map((pass) => (
        <div key={pass} className="flex items-center">
          {TICKER.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="u-eyebrow text-paper/75 px-8">{item}</span>
              <span className="w-1 h-1 rounded-full bg-turq shrink-0" />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Ticker;
