import React from 'react';
import { CONTACT_EMAIL, PILLARS } from '../constants.tsx';
import Wordmark from './Wordmark.tsx';

const Footer: React.FC = () => (
  <footer className="border-t u-rule pt-14 pb-10">
    <div className="max-w-[82rem] mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-14">
        <div>
          <Wordmark />
          <p className="u-body text-[0.95rem] text-dim mt-5 max-w-[32ch]">
            A collective forming in Seoul across {PILLARS.map((p) => p.name.toLowerCase()).join(', ')}.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
          <div>
            <p className="u-label text-[0.625rem] text-dim mb-4">Index</p>
            <ul className="space-y-2.5">
              {[
                { name: 'Why', href: '#why' },
                { name: 'The idea', href: '#idea' },
                { name: 'What you get', href: '#offer' },
                { name: 'Joining', href: '#joining' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="u-body text-[0.95rem] text-cream/80 hover:text-ember transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="u-label text-[0.625rem] text-dim mb-4">Applications</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="u-body text-[0.95rem] text-cream/80 hover:text-ember transition-colors break-all">
              {CONTACT_EMAIL}
            </a>
            <p className="u-body text-[0.95rem] text-dim mt-2.5">Seoul, South Korea</p>
          </div>
        </div>
      </div>

      <div className="border-t u-rule pt-7 flex flex-col sm:flex-row justify-between gap-3">
        <p className="u-label text-[0.625rem] text-dim">
          © {new Date().getFullYear()} FAME Entertainment Group
        </p>
        <p className="u-label text-[0.625rem] text-dim">Food. Artistry. Media. Events.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
