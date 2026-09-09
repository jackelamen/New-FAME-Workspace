import React from 'react';
import { CONTACT_EMAIL, MARKETS } from '../constants.tsx';

const NAV = [
  { name: 'What we do', href: '#services' },
  { name: 'How it works', href: '#process' },
  { name: 'The team', href: '#capabilities' },
  { name: 'Where we came from', href: '#story' },
];

const Footer: React.FC = () => (
  <footer className="bg-ink text-paper pt-20 pb-10">
    <div className="max-w-[76rem] mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12 pb-16">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2 mb-5">
            <span className="u-display text-[1.35rem] leading-none">FAME</span>
            <span className="u-eyebrow text-paper/55 text-[0.6875rem]">Entertainment Group</span>
          </div>
          <p className="u-read text-[1.05rem] text-paper/70 max-w-[38ch]">
            A Seoul lifestyle trading house with a creative team attached. We move brands
            between Korea, the United States and Southeast Asia.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="u-eyebrow text-paper/60 mb-5">Sections</p>
          <ul className="space-y-3 text-[1rem] text-paper/80">
            {NAV.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-turq transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="u-eyebrow text-paper/60 mb-5">Get in touch</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[1rem] text-paper hover:text-turq transition-colors break-all"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="text-[1rem] text-paper/70 mt-4">Seoul and Gyeonggi, South Korea</p>
          <p className="text-[1rem] text-paper/70 mt-1">{MARKETS.join(' · ')}</p>
        </div>
      </div>

      <div className="pt-8 border-t border-paper/15 flex flex-col sm:flex-row justify-between gap-4 text-[0.9rem] text-paper/60">
        <p>© {new Date().getFullYear()} FAME Entertainment Group</p>
        <p>Bridging culture and commerce since 2016</p>
      </div>
    </div>
  </footer>
);

export default Footer;
