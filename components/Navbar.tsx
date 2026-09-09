import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
  onContactClick: () => void;
}

const LINKS = [
  { name: 'What we do', href: '#services' },
  { name: 'How it works', href: '#process' },
  { name: 'The team', href: '#capabilities' },
  { name: 'Where we came from', href: '#story' },
];

const Wordmark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a href="#top" className={`flex items-baseline gap-2 ${className}`} aria-label="FAME Entertainment Group, back to top">
    <span className="u-display text-[1.35rem] leading-none">FAME</span>
    <span className="u-eyebrow text-muted text-[0.6875rem] leading-none">Entertainment Group</span>
  </a>
);

const Navbar: React.FC<NavbarProps> = ({ scrolled, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,padding,border-color] duration-300 border-b ${
          scrolled || isOpen
            ? 'bg-paper/92 backdrop-blur-md py-4 border-ink/10'
            : 'bg-transparent py-7 border-transparent'
        }`}
      >
        <div className="max-w-[76rem] mx-auto px-6 lg:px-10 flex items-center justify-between gap-8">
          <Wordmark />

          <div className="hidden lg:flex items-center gap-9 text-[0.9375rem] text-muted">
            {LINKS.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-ink transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onContactClick}
              className="hidden sm:inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-[0.9375rem] font-semibold hover:bg-deep transition-colors"
            >
              Start a conversation
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <span className={`w-6 h-[2px] bg-ink transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`w-6 h-[2px] bg-ink transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-[2px] bg-ink transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-paper lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 gap-6">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="u-display text-[2rem] hover:text-deep transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { setIsOpen(false); onContactClick(); }}
            className="mt-6 self-start bg-ink text-paper px-8 py-4 text-base font-semibold"
          >
            Start a conversation
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
