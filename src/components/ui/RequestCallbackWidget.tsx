import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Phone, X, CheckCircle2, Loader2 } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function RequestCallbackWidget({ open, onClose }: Props) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setError('');
    setLoading(true);

    // Build WhatsApp message and open it — no backend needed
    const msg = encodeURIComponent(
      `Hi VS Transport, I'd like a callback.\nName: ${name || 'Not provided'}\nPhone: ${phone}${time ? `\nPreferred time: ${time}` : ''}`
    );
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/918588888669?text=${msg}`, '_blank');
    }, 800);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setPhone('');
      setName('');
      setTime('');
      setError('');
    }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.35, ease: 'easeOut' as const }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-md bg-[#060D1A] border border-[#C9A84C]/30 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto">
              {/* Gold top line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9A84C]/8 rounded-full blur-[60px] pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-xl flex items-center justify-center">
                      <Phone size={15} className="text-[#C9A84C]" />
                    </div>
                    <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Request Callback</span>
                  </div>
                  <h2
                    className="text-white font-black text-xl leading-tight"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                  >
                    WE'LL CALL YOU BACK
                  </h2>
                  <p className="text-gray-500 text-xs mt-1">Usually within 5–10 minutes during business hours.</p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-600 hover:text-gray-300 transition-colors mt-1 shrink-0"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 pb-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-white font-black text-lg mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      REQUEST SENT!
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">Your WhatsApp has been opened with your details.</p>
                    <p className="text-gray-500 text-xs">Our team will call you back shortly.</p>
                    <button
                      onClick={handleClose}
                      className="mt-6 px-6 py-2.5 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-sm rounded-xl transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-1.5">
                        Your Name (optional)
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-[#0A1628] border border-[#1E2A3A] focus:border-[#C9A84C]/60 text-white placeholder-gray-600 text-sm rounded-xl outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-1.5">
                        Mobile Number <span className="text-[#C9A84C]">*</span>
                      </label>
                      <div className="flex gap-2">
                        <div className="flex items-center px-3 bg-[#0A1628] border border-[#1E2A3A] rounded-xl text-gray-400 text-sm shrink-0">
                          +91
                        </div>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                          placeholder="98765 43210"
                          required
                          className="flex-1 px-4 py-3 bg-[#0A1628] border border-[#1E2A3A] focus:border-[#C9A84C]/60 text-white placeholder-gray-600 text-sm rounded-xl outline-none transition-colors"
                        />
                      </div>
                      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
                    </div>

                    {/* Preferred time */}
                    <div>
                      <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-1.5">
                        Preferred Callback Time (optional)
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-4 py-3 bg-[#0A1628] border border-[#1E2A3A] focus:border-[#C9A84C]/60 text-sm rounded-xl outline-none transition-colors appearance-none"
                        style={{ color: time ? 'white' : '#4B5563' }}
                      >
                        <option value="" disabled>Select a time slot</option>
                        <option value="9 AM – 11 AM">9 AM – 11 AM</option>
                        <option value="11 AM – 1 PM">11 AM – 1 PM</option>
                        <option value="1 PM – 3 PM">1 PM – 3 PM</option>
                        <option value="3 PM – 5 PM">3 PM – 5 PM</option>
                        <option value="5 PM – 7 PM">5 PM – 7 PM</option>
                        <option value="ASAP">ASAP — Call me now</option>
                      </select>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full flex items-center justify-center gap-2 py-3.5 bg-[#C9A84C] hover:bg-[#E2C06A] disabled:opacity-70 text-[#060D1A] font-black text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20 overflow-hidden"
                    >
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      {loading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Phone size={16} />
                      )}
                      {loading ? 'Sending...' : 'Request My Callback'}
                    </button>

                    <p className="text-gray-600 text-[10px] text-center">
                      By submitting, you agree to be contacted by VS Transport Service.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
