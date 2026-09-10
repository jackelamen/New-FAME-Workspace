import React, { useEffect, useRef, useState } from 'react';
import { CONTACT_EMAIL } from '../constants.tsx';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DISCIPLINES = [
  'Food: chef, bar, hospitality',
  'Artistry: design, styling, spatial',
  'Media: film, photo, edit, writing',
  'Events: production, promotion, technical',
  'More than one of these',
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    intent: DISCIPLINES[0],
    message: '',
  });
  const [sent, setSent] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    firstFieldRef.current?.focus();
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  /* No backend on this site yet, so the form composes a real message in the
     visitor's mail client rather than pretending to submit. Swap this for a
     POST to a form endpoint when one exists. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Collective application: ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Portfolio: ${form.company || 'not given'}`,
      `Discipline: ${form.intent}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    'w-full bg-transparent border-b u-rule py-3.5 u-body text-[1rem] text-cream placeholder-dim focus:outline-none focus:border-ember transition-colors';

  return (
    <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center overflow-y-auto py-10 px-5">
      <div className="absolute inset-0 bg-void/92 backdrop-blur-sm" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Apply to join the FAME collective"
        className="relative w-full max-w-lg bg-pitch border u-rule p-7 md:p-10 rise"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-dim hover:text-cream transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {sent ? (
          <div className="py-10">
            <p className="u-display text-[2rem] mb-5">Your mail client should be open.</p>
            <p className="u-body text-[1rem] text-cream/80 mb-8">
              Send the draft and it reaches us directly. If nothing opened, write to the
              address below.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="u-label text-[0.6875rem] text-cream border-b border-ember pb-1.5 break-all"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        ) : (
          <>
            <p className="u-label text-ember mb-6">Apply</p>
            <p className="u-display text-[clamp(1.9rem,4.5vw,2.5rem)] mb-9 max-w-[16ch]">
              Tell us what you make.
            </p>

            <form onSubmit={handleSubmit} className="space-y-1">
              <input
                ref={firstFieldRef}
                type="text"
                required
                placeholder="Name"
                aria-label="Name"
                className={field}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                required
                placeholder="Email"
                aria-label="Email"
                className={field}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Website, portfolio or Instagram"
                aria-label="Website, portfolio or Instagram"
                className={field}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
              <select
                aria-label="Your discipline"
                className={`${field} text-cream`}
                value={form.intent}
                onChange={(e) => setForm({ ...form, intent: e.target.value })}
              >
                {DISCIPLINES.map((intent) => (
                  <option key={intent} className="bg-pitch text-cream">{intent}</option>
                ))}
              </select>
              <textarea
                required
                rows={4}
                placeholder="Three things you have made, and what you want from the next two years"
                aria-label="Your message"
                className={`${field} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-ember text-void py-4 mt-8 u-label text-[0.6875rem] hover:bg-cream hover:text-void transition-colors duration-300"
              >
                Send application
              </button>
            </form>

            <p className="u-body text-[0.85rem] text-dim mt-6">
              Or write to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-cream hover:text-ember transition-colors break-all">
                {CONTACT_EMAIL}
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
