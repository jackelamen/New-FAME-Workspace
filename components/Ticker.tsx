import React from 'react';

const Ticker: React.FC = () => {
  const tickerItems = [
    "LIFESTYLE TRADING HOUSE",
    "CREATIVE COMMERCE",
    "FAME ENTERTAINMENT GROUP",
    "SEOUL • TOKYO • LOS ANGELES",
    "BRIDGING CULTURE & COMMERCE",
    "PREMIUM BRAND ACCELERATION",
    "EVENT & MEDIA PORTFOLIO",
  ];
  
  return (
    <div className="relative py-6 bg-[#40E0D0]/5 border-y border-white/5 overflow-hidden whitespace-nowrap">
      <div className="animate-scroll">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {tickerItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/40 px-10">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#40E0D0]/30"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;