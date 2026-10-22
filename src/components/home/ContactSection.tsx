import { motion } from 'motion/react';
import {
  MapPin, Phone, Mail, Clock,
  MessageCircle, Send, ArrowRight, CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import EmailLink, { EmailText } from '@/components/ui/EmailLink';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactCards = [
  {
    icon: MapPin,
    title: 'Our Office',
    primary: 'Z-213, Okhla Phase 2',
    secondary: 'Harkesh Nagar, New Delhi – 110020',
    note: 'Near Okhla Metro Station Parking',
    link: 'https://maps.app.goo.gl/hgd9muHnpDghgxar8',
    linkLabel: 'Get Directions',
    accentColor: '#3B82F6',
    isEmail: false,
  },
  {
    icon: Phone,
    title: 'Call Us',
    primary: '+91 8588806333',
    secondary: '+91 8588888669',
    note: '011-69268799 (Office)',
    link: 'tel:8588806333',
    linkLabel: 'Call Now',
    accentColor: '#22C55E',
    isEmail: false,
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'info@vstransport.in',
    secondary: '',
    note: 'We reply within 24 hours',
    link: 'mailto:info@vstransport.in',
    linkLabel: 'Send Email',
    accentColor: '#C9A84C',
    isEmail: true,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    primary: 'Mon – Sat: 9 AM – 5 PM',
    secondary: 'Sunday: Closed',
    note: 'WhatsApp available 24/7',
    link: null,
    linkLabel: null,
    accentColor: '#A855F7',
    isEmail: false,
  },
];

const formBenefits = [
  'Free quote on request',
  'No hidden charges',
  'Professional support team',
  'Flexible scheduling',
];

const services = [
  'Warehouse Service',
  'Chota Hathi Service',
  'Bolero Pickup Service',
  'Fleet Transport Service',
  'Loading & Unloading',
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', pickup: '', drop: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi VS Transport! I'd like a quote.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      form.pickup ? `Pickup: ${form.pickup}` : '',
      form.drop ? `Drop: ${form.drop}` : '',
      form.message ? `Details: ${form.message}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/918588806333?text=${encodeURIComponent(lines)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-[#060D1A] relative overflow-hidden">

      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#C9A84C]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1B3A6B]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 py-24 relative">

        {/* ── SECTION HEADER ── */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-black tracking-[0.3em] uppercase">
              Get In Touch
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-white font-black tracking-wider mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            CONTACT{' '}
            <span className="text-[#C9A84C]">VS TRANSPORT</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 max-w-md mx-auto text-base leading-relaxed">
            Ready to move your goods? Get a free quote in minutes — just fill the form or message us on WhatsApp.
          </motion.p>
        </motion.div>

        {/* ── CONTACT CARDS ROW ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {contactCards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="group relative p-6 rounded-2xl border border-[#1E2A3A] hover:border-opacity-60 bg-[#0A1628]/50 hover:bg-[#0A1628]/80 transition-all duration-300 overflow-hidden"
              style={{ ['--accent' as string]: c.accentColor }}
              whileHover={{ borderColor: `${c.accentColor}40`, y: -4 }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${c.accentColor}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${c.accentColor}15`, border: `1px solid ${c.accentColor}30` }}
              >
                <c.icon size={18} style={{ color: c.accentColor }} />
              </div>

              <h3 className="text-white font-bold text-sm mb-2">{c.title}</h3>
              {c.isEmail ? (
                <>
                  <p className="text-gray-200 text-xs font-semibold mb-0.5"><EmailText user="info" domain="vstransport.in" /></p>
                </>
              ) : c.title === 'Call Us' ? (
                <div className="space-y-1 mb-0.5">
                  <a href="tel:8588806333" className="block text-gray-200 text-xs font-semibold transition-colors" style={{ ['--tw-text-opacity' as string]: '1' }}>+91 8588806333</a>
                  <a href="tel:8588888669" className="block text-gray-300 text-xs transition-colors">+91 8588888669</a>
                  <a href="tel:01169268799" className="block text-gray-400 text-xs transition-colors">011-69268799 (Office)</a>
                </div>
              ) : (
                <>
                  <p className="text-gray-200 text-xs font-semibold mb-0.5">{c.primary}</p>
                  <p className="text-gray-400 text-xs mb-0.5">{c.secondary}</p>
                </>
              )}
              <p className="text-gray-600 text-[10px] mb-3">{c.title === 'Call Us' ? 'WhatsApp support available 24/7' : c.note}</p>

              {c.isEmail ? (
                <EmailLink
                  user="info"
                  domain="vstransport.in"
                  className="inline-flex items-center gap-1 text-xs font-bold transition-colors duration-200"
                  style={{ color: c.accentColor } as React.CSSProperties}
                >
                  {c.linkLabel}
                  <ArrowRight size={11} />
                </EmailLink>
              ) : c.link ? (
                <a
                  href={c.link}
                  target={c.link.startsWith('http') ? '_blank' : undefined}
                  rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1 text-xs font-bold transition-colors duration-200"
                  style={{ color: c.accentColor }}
                >
                  {c.linkLabel}
                  <ArrowRight size={11} />
                </a>
              ) : null}
            </motion.div>
          ))}
        </motion.div>

        {/* ── REGISTERED OFFICE ADDRESS ── */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Warehouse / Operations Office */}
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#1E2A3A] bg-[#0A1628]/50">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#3B82F615', border: '1px solid #3B82F630' }}>
                <MapPin size={16} className="text-blue-400" />
              </div>
              <div>
                <div className="text-[#C9A84C] text-[10px] font-bold tracking-widest uppercase mb-1">Warehouse / Operations</div>
                <div className="text-white text-sm font-semibold leading-snug">Z-213, Okhla Phase 2</div>
                <div className="text-gray-400 text-xs leading-snug">Harkesh Nagar, New Delhi – 110020</div>
                <div className="text-gray-600 text-[10px] mt-1">Near Okhla Metro Station Parking</div>
              </div>
            </div>
            {/* Registered Office */}
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#1E2A3A] bg-[#0A1628]/50">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#C9A84C15', border: '1px solid #C9A84C30' }}>
                <MapPin size={16} className="text-[#C9A84C]" />
              </div>
              <div>
                <div className="text-[#C9A84C] text-[10px] font-bold tracking-widest uppercase mb-1">Registered Office</div>
                <div className="text-white text-sm font-semibold leading-snug">GF, E-164, Roop Nagar</div>
                <div className="text-gray-400 text-xs leading-snug">Hari Nagar, Part-3, South East Delhi</div>
                <div className="text-gray-400 text-xs leading-snug">New Delhi – 110044</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── MAIN CONTENT: FORM + SIDEBAR ── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── LEFT: QUOTE FORM ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#060D1A]" />
              <div className="absolute inset-0 border border-[#1E2A3A] rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3
                      className="text-white font-black tracking-wider text-2xl md:text-3xl mb-1"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      GET A FREE QUOTE
                    </h3>
                    <p className="text-gray-400 text-sm">
                      We'll respond on WhatsApp within minutes.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/25 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-[10px] font-bold tracking-wide">Online Now</span>
                  </div>
                </div>

                <form onSubmit={handleWhatsApp} className="space-y-4">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Rajesh Kumar"
                        className="w-full px-4 py-3 bg-[#060D1A] border border-[#1E2A3A] focus:border-[#C9A84C]/50 rounded-xl text-white placeholder-gray-700 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-[#060D1A] border border-[#1E2A3A] focus:border-[#C9A84C]/50 rounded-xl text-white placeholder-gray-700 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1.5">
                      Service Required *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#060D1A] border border-[#1E2A3A] focus:border-[#C9A84C]/50 rounded-xl text-white text-sm outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1L6 7L11 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Pickup + Drop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1.5">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        value={form.pickup}
                        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                        placeholder="e.g. Okhla, Delhi"
                        className="w-full px-4 py-3 bg-[#060D1A] border border-[#1E2A3A] focus:border-[#C9A84C]/50 rounded-xl text-white placeholder-gray-700 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1.5">
                        Drop Location
                      </label>
                      <input
                        type="text"
                        value={form.drop}
                        onChange={(e) => setForm({ ...form, drop: e.target.value })}
                        placeholder="e.g. Noida Sector 62"
                        className="w-full px-4 py-3 bg-[#060D1A] border border-[#1E2A3A] focus:border-[#C9A84C]/50 rounded-xl text-white placeholder-gray-700 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Type of goods, quantity, preferred date, special requirements..."
                      className="w-full px-4 py-3 bg-[#060D1A] border border-[#1E2A3A] focus:border-[#C9A84C]/50 rounded-xl text-white placeholder-gray-700 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group relative w-full flex items-center justify-center gap-3 py-4 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-base rounded-xl transition-all duration-300 shadow-xl shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/35 hover:-translate-y-0.5 overflow-hidden"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    {submitted ? (
                      <>
                        <CheckCircle2 size={18} />
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Quote Request via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-gray-600 text-xs text-center pt-1">
                    Or call:{' '}
                    <a href="tel:8588888669" className="text-[#C9A84C] hover:underline font-semibold">+91 8588888669</a>
                    {' '}·{' '}
                    <a href="tel:8588806333" className="text-[#C9A84C] hover:underline font-semibold">+91 8588806333</a>
                  </p>
                </form>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: SIDEBAR ── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' as const }}
          >
            {/* Why contact us */}
            <div className="p-6 rounded-2xl border border-[#1E2A3A] bg-[#0A1628]/50">
              <h4
                className="text-white font-black tracking-wider text-lg mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                WHY CONTACT US?
              </h4>
              <ul className="space-y-3">
                {formBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="text-[#C9A84C] shrink-0" />
                    <span className="text-gray-300 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918588806333"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-6 rounded-2xl border border-green-500/25 bg-green-500/8 hover:bg-green-500/15 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
              <div className="w-12 h-12 bg-green-500/15 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={22} className="text-green-400" />
              </div>
              <div>
                <div className="text-white font-bold text-sm mb-0.5">Chat on WhatsApp</div>
                <div className="text-green-400 text-xs font-semibold">+91 8588806333</div>
                <div className="text-gray-500 text-[10px] mt-0.5">Typically replies in minutes</div>
              </div>
              <ArrowRight size={16} className="text-green-400 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Google Review CTA */}
            <a
              href="https://g.page/r/CX1eWnhthnxfEBI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-6 rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/5 hover:bg-[#C9A84C]/10 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
              {/* Google G icon */}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-sm mb-0.5">Leave Us a Review</div>
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#FBBC05">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <div className="text-gray-400 text-[10px]">Your feedback helps us grow</div>
              </div>
              <ArrowRight size={16} className="text-[#C9A84C] shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Manager card */}
            <div className="p-6 rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-br from-[#C9A84C]/8 to-[#0A1628]/60">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9A84C]/30 to-[#C9A84C]/10 rounded-full flex items-center justify-center shrink-0">
                  <span
                    className="text-[#C9A84C] font-black text-xl"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    KK
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Kunal Kishor Singh</div>
                  <div className="text-[#C9A84C] text-xs">Operations Manager</div>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                "We personally ensure every shipment is handled with care. Your satisfaction is our priority."
              </p>
              <a
                href="tel:8588806333"
                className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#C9A84C]/30 hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold rounded-xl transition-all duration-200"
              >
                <Phone size={13} />
                Call Kunal Kishor Singh
              </a>
              <EmailLink
                user="Operations"
                domain="vstransport.in"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-xl transition-all duration-200 mt-2"
                style={{ border: '1px solid hsl(var(--brand-gold) / 0.3)', color: 'hsl(var(--brand-gold))' }}
              >
                <Mail size={13} />
                <EmailText user="Operations" domain="vstransport.in" />
              </EmailLink>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="container mx-auto px-4 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-2xl overflow-hidden border border-[#1E2A3A] shadow-2xl"
        >
          <div className="bg-[#0A1628] px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1E2A3A]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
              <span className="text-gray-400 text-xs font-medium">VS Transport Service — Z-213, Okhla Phase 2, New Delhi</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {/* Open in Google Maps */}
              <a
                href="https://maps.app.goo.gl/hgd9muHnpDghgxar8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 rounded-lg text-blue-400 text-[10px] font-bold transition-all"
              >
                <MapPin size={10} />
                Open in Maps
              </a>
              {/* Leave a Review */}
              <a
                href="https://g.page/r/CX1eWnhthnxfEBI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 hover:bg-yellow-500/20 rounded-lg text-yellow-400 text-[10px] font-bold transition-all"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#FBBC05">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Leave a Review
              </a>
            </div>
          </div>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2!2d77.2588!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1c9b5a5a5a5%3A0x0!2sOkhla%20Phase%202%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VS Transport Service location — Okhla Phase 2, New Delhi"
            />
            {/* Clickable overlay — tapping opens Google Maps */}
            <a
              href="https://maps.app.goo.gl/hgd9muHnpDghgxar8"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label="Open VS Transport Service location in Google Maps"
            />
          </div>

          {/* Action buttons below map */}
          <div className="bg-[#0A1628] px-5 py-4 flex flex-col sm:flex-row gap-3 border-t border-[#1E2A3A]">
            <a
              href="https://maps.app.goo.gl/hgd9muHnpDghgxar8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600/15 border border-blue-500/35 hover:bg-blue-600/25 hover:border-blue-500/60 text-blue-400 text-sm font-bold rounded-xl transition-all duration-200"
            >
              <MapPin size={15} />
              Open in Google Maps
            </a>
            <a
              href="https://g.page/r/CX1eWnhthnxfEBI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-yellow-500/10 border border-yellow-500/35 hover:bg-yellow-500/20 hover:border-yellow-500/60 text-yellow-400 text-sm font-bold rounded-xl transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#FBBC05">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Leave a Google Review
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  );
}
