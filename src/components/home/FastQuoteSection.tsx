import { motion } from 'motion/react';
import { MessageCircle, Phone, Zap, ArrowRight, MapPin, Truck } from 'lucide-react';
import { useState } from 'react';

const services = [
  'Chota Hathi Service',
  'Bolero Pickup Service',
  'Warehouse Service',
  'Fleet Transport',
  'Loading & Unloading',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function FastQuoteSection() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [service, setService] = useState('');

  const buildWhatsAppMsg = () => {
    const parts = ['Hi, I need a transport quote.'];
    if (service) parts.push(`Service: ${service}`);
    if (from) parts.push(`Pickup: ${from}`);
    if (to) parts.push(`Drop: ${to}`);
    return encodeURIComponent(parts.join('\n'));
  };

  return (
    <section id="quote" className="relative bg-[#0A1628] py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A84C]/4 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-5">
            <Zap size={14} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Instant Quote</span>
          </div>
          <h2
            className="text-white font-black leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            GET A FREE{' '}
            <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>TRANSPORT QUOTE</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
            Share your pickup location, drop location, goods details and required vehicle type. Our team will provide a suitable quotation.
          </p>
        </motion.div>

        {/* Quote card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.1, ease: 'easeOut' as const } } }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-10 bg-[#060D1A] border border-[#C9A84C]/20 rounded-3xl shadow-2xl overflow-hidden">
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A84C]/6 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 relative">
              {/* Service selector */}
              <div className="md:col-span-3">
                <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">
                  <Truck size={11} className="inline mr-1.5 text-[#C9A84C]" />
                  Select Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      onClick={() => setService(s)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all duration-200 ${
                        service === s
                          ? 'bg-[#C9A84C] border-[#C9A84C] text-[#060D1A]'
                          : 'border-[#1E2A3A] text-gray-400 hover:border-[#C9A84C]/40 hover:text-[#C9A84C]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pickup */}
              <div>
                <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">
                  <MapPin size={11} className="inline mr-1.5 text-[#C9A84C]" />
                  Pickup Location
                </label>
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="e.g. Okhla Phase 2"
                  className="w-full px-4 py-3 bg-[#0A1628] border border-[#1E2A3A] focus:border-[#C9A84C]/60 text-white placeholder-gray-600 text-sm rounded-xl outline-none transition-colors"
                />
              </div>

              {/* Drop */}
              <div>
                <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">
                  <MapPin size={11} className="inline mr-1.5 text-green-400" />
                  Drop Location
                </label>
                <input
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="e.g. Noida Sector 62"
                  className="w-full px-4 py-3 bg-[#0A1628] border border-[#1E2A3A] focus:border-[#C9A84C]/60 text-white placeholder-gray-600 text-sm rounded-xl outline-none transition-colors"
                />
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-end">
                <label className="block text-transparent text-xs mb-2 select-none">CTA</label>
                <a
                  href={`https://wa.me/918588806333?text=${buildWhatsAppMsg()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2 w-full py-3 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20 overflow-hidden"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <MessageCircle size={16} />
                  Get Quote on WhatsApp
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Or call */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#1E2A3A]">
              <span className="text-gray-600 text-xs">Or call us directly:</span>
              <a href="tel:8588806333" className="flex items-center gap-1.5 text-[#C9A84C] font-bold text-sm hover:underline">
                <Phone size={14} />
                +91 8588806333
              </a>
              <a href="tel:8588888669" className="flex items-center gap-1.5 font-bold text-sm hover:underline" style={{ color: 'hsl(var(--brand-gold))' }}>
                <Phone size={14} />
                +91 8588888669
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
