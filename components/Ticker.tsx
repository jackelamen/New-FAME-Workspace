import React from 'react';

const Ticker: React.FC = () => {
  const tickerItems = [
    "LIFESTYLE TRADING HOUSE",
    "CREATIVE COMMERCE",
    "FAME ENTERTAINMENT GROUP",
    "SEOUL • ATLANTA • SINGAPORE • KUALA LUMPUR",
    "BRIDGING CULTURE & COMMERCE",
    "PREMIUM BRAND ACCELERATION",
    "EVENT & MEDIA PORTFOLIO",
  ];
  
  return (
    <div className="relative py-6 bg-[#40E0D0]/10 border-y border-[#1a1a1a]/5 overflow-hidden whitespace-nowrap">
      <div className="animate-scroll">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {tickerItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#1a1a1a]/40 px-10">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0]/50"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;