import React, { useState } from 'react';
import Wordmark from './Wordmark.tsx';

interface NavbarProps {
  scrolled: boolean;
  onApply: () => void;
}

const LINKS = [
  { name: 'Why', href: '#why' },
  { name: 'The idea', href: '#idea' },
  { name: 'What you get', href: '#offer' },
  { name: 'Joining', href: '#joining' },
];

const Navbar: React.FC<NavbarProps> = ({ scrolled, onApply }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || isOpen ? 'bg-void/90 backdrop-blur-md py-5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[82rem] mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
          <Wordmark small={scrolled} />

          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="u-label text-[0.6875rem] text-dim hover:text-cream transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onApply}
              className="u-label text-[0.6875rem] bg-ember text-void px-5 py-2.5 hover:bg-cream transition-colors duration-300"
            >
              Apply
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className={`w-6 h-px bg-cream transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`w-6 h-px bg-cream transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-void lg:hidden transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 gap-8">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="u-display text-[2.75rem] hover:text-ember transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { setIsOpen(false); onApply(); }}
            className="u-display text-[2.75rem] text-ember text-left"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
