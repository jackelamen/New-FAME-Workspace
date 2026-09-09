import React, { useEffect, useRef, useState } from 'react';
import { CONTACT_EMAIL } from '../constants.tsx';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INTENTS = [
  'Taking a Korean brand abroad',
  'Bringing a brand into Korea',
  'Creative, media or events',
  'Something else',
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    intent: INTENTS[0],
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
    const subject = `${form.intent} — ${form.company || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || '—'}`,
      `Enquiry: ${form.intent}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    'w-full bg-chalk border border-ink/20 px-4 py-3.5 text-[1rem] text-ink placeholder-muted focus:outline-none focus:border-deep transition-colors';

  return (
    <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center overflow-y-auto py-10 px-4">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact FAME Entertainment Group"
        className="relative w-full max-w-xl bg-paper border border-ink/15 p-7 md:p-10 rise"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-muted hover:text-ink transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {sent ? (
          <div className="py-10">
            <h2 className="u-display text-[1.9rem] mb-4">Your mail client should be open.</h2>
            <p className="u-read text-[1.1rem] text-ink/80 mb-6">
              Send the draft and it lands with us directly. If nothing opened, write to us at
              the address below and we will pick it up the same way.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="u-display-tight text-[1.1rem] text-deep border-b-2 border-turq pb-1"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        ) : (
          <>
            <p className="u-eyebrow text-deep mb-4">Start a conversation</p>
            <h2 className="u-display text-[clamp(1.7rem,4vw,2.3rem)] mb-4">
              Tell us what you are trying to move, and where.
            </h2>
            <p className="u-read text-[1.05rem] text-ink/75 mb-8">
              A few lines is enough. We reply to everything, usually within a working day,
              including when the answer is that we are not the right fit.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <input
                  ref={firstFieldRef}
                  type="text"
                  required
                  placeholder="Your name"
                  aria-label="Your name"
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
              </div>

              <input
                type="text"
                placeholder="Company or brand"
                aria-label="Company or brand"
                className={field}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />

              <select
                aria-label="What this is about"
                className={field}
                value={form.intent}
                onChange={(e) => setForm({ ...form, intent: e.target.value })}
              >
                {INTENTS.map((intent) => (
                  <option key={intent}>{intent}</option>
                ))}
              </select>

              <textarea
                required
                rows={4}
                placeholder="What is the product, and which market are you aiming at?"
                aria-label="Your message"
                className={`${field} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-ink text-paper py-4 text-base font-semibold hover:bg-deep transition-colors"
              >
                Send it
              </button>
            </form>

            <p className="text-[0.9rem] text-muted mt-5">
              Or write directly to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline decoration-turq decoration-2 underline-offset-4">
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
