import React, { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 transition-all duration-300">
      <div 
        className="absolute inset-0 bg-[#fdfcfb]/95 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl bg-white border border-[#1a1a1a]/5 rounded-[2.5rem] p-8 md:p-16 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 text-[#1a1a1a]">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2 text-[#1a1a1a]/20 hover:text-[#1a1a1a] transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#40E0D0] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#40E0D0]/40">
              <svg className="w-12 h-12 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Message Received</h2>
            <p className="text-[#1a1a1a]/40 uppercase text-[10px] tracking-[0.5em] font-bold">Expect a response within 24 hours.</p>
          </div>
        ) : (
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#40E0D0]"></div>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#40E0D0]">Inquiry Portal</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                GET IN <br /><span className="text-outline italic">TOUCH</span>
              </h2>
              <p className="text-[#1a1a1a]/40 text-lg font-light leading-relaxed">
                Connect with our team to explore partnerships, media coverage, or creative collaborations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" required placeholder="NAME" 
                  className="w-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-xl p-5 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a] placeholder-[#1a1a1a]/30 focus:outline-none focus:border-[#40E0D0] transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
                <input 
                  type="email" required placeholder="EMAIL" 
                  className="w-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-xl p-5 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a] placeholder-[#1a1a1a]/30 focus:outline-none focus:border-[#40E0D0] transition-all"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <input 
                type="text" placeholder="COMPANY / ORGANIZATION" 
                className="w-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-xl p-5 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a] placeholder-[#1a1a1a]/30 focus:outline-none focus:border-[#40E0D0] transition-all"
                value={formState.company}
                onChange={(e) => setFormState({...formState, company: e.target.value})}
              />
              <textarea 
                required rows={4} placeholder="HOW CAN WE HELP?" 
                className="w-full bg-[#1a1a1a]/5 border border-[#1a1a1a]/5 rounded-xl p-5 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a] placeholder-[#1a1a1a]/30 focus:outline-none focus:border-[#40E0D0] transition-all resize-none"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
              <button 
                type="submit"
                className="w-full bg-[#1a1a1a] hover:bg-[#40E0D0] text-white hover:text-[#1a1a1a] py-6 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.01] active:scale-95 shadow-xl shadow-[#1a1a1a]/20 flex items-center justify-center gap-3 mt-4"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;