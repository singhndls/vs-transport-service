import { motion } from 'motion/react';
import {
  Shield, Clock, Banknote, MapPin, Users, Headphones,
  Quote, ArrowRight
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const reasons = [
  {
    icon: Shield,
    title: 'Safe Goods Handling',
    desc: 'Every shipment is handled with care. We ensure your goods are loaded, transported and unloaded safely.',
    stat: 'Safe',
    statLabel: 'Handling',
  },
  {
    icon: Clock,
    title: 'Customer Support',
    desc: 'Our team is available to assist you with bookings, queries and service-related requirements. WhatsApp support available 24/7. Office hours: Mon–Sat, 9 AM–5 PM.',
    stat: '24/7',
    statLabel: 'WhatsApp',
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    desc: 'Competitive and transparent pricing with no hidden charges. We provide clear quotations before confirmation.',
    stat: 'Clear',
    statLabel: 'Pricing',
  },
  {
    icon: MapPin,
    title: 'Delhi NCR Coverage',
    desc: 'Serving all major areas — Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and surrounding NCR locations.',
    stat: 'NCR',
    statLabel: 'Coverage',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Our team is experienced in safe goods transportation and professional logistics support across Delhi NCR.',
    stat: 'Pro',
    statLabel: 'Team',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: 'Kunal Kishor Singh personally oversees operations to ensure every client receives professional service.',
    stat: '1:1',
    statLabel: 'Dedicated Care',
  },
];

const counterStats = [
  { value: 'GST', label: 'Registered Business' },
  { value: 'MSME', label: 'Registered' },
  { value: 'Delhi NCR', label: 'Service Area' },
  { value: '24/7', label: 'WhatsApp Support' },
];

export default function TrustSection() {
  return (
    <section id="trust" className="relative overflow-hidden bg-[#060D1A]">

      {/* ── COUNTER STRIP ── */}
      <div className="relative border-y border-[#C9A84C]/15 bg-gradient-to-r from-[#0A1628] via-[#0D1F3C] to-[#0A1628]">
        {/* Subtle gold shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
        <div className="container mx-auto px-4 py-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {counterStats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center group">
                <div
                  className="text-[#C9A84C] font-black text-4xl md:text-5xl mb-1 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}
                >
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs tracking-widest uppercase">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
      </div>

      {/* ── WHY CHOOSE US ── */}
      <div className="py-24 relative">
        {/* Background dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1B3A6B]/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          {/* Header */}
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
                Why Choose Us
              </span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A84C]" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-white font-black tracking-wider mb-5"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              THE VS TRANSPORT{' '}
              <span className="text-[#C9A84C]">ADVANTAGE</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
              We've built our reputation on reliability, professionalism, and a genuine commitment to our clients' success across Delhi NCR.
            </motion.p>
          </motion.div>

          {/* Reasons grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                variants={fadeUp}
                className="group relative border border-[#1E2A3A] hover:border-[#C9A84C]/40 bg-[#0A1628]/60 hover:bg-[#0D1F3C]/80 rounded-2xl p-7 transition-all duration-400 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C9A84C]/5"
              >
                {/* Number watermark */}
                <div
                  className="absolute -top-3 -right-2 text-[#C9A84C]/5 font-black text-8xl leading-none pointer-events-none select-none group-hover:text-[#C9A84C]/10 transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Top row: icon + stat */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-13 h-13 w-12 h-12 bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <r.icon size={22} className="text-[#C9A84C]" />
                  </div>
                  <div className="text-right">
                    <div
                      className="text-[#C9A84C] font-black text-xl leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {r.stat}
                    </div>
                    <div className="text-gray-600 text-[10px] tracking-wider uppercase mt-0.5">{r.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-white font-bold text-base mb-2">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{r.desc}</p>

                {/* Bottom arrow */}
                <div className="flex items-center gap-1.5 text-[#C9A84C]/40 group-hover:text-[#C9A84C] transition-colors text-xs font-bold">
                  <span>Learn More</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Bottom gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/0 to-transparent group-hover:via-[#C9A84C]/50 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── WHAT OUR CLIENTS SAY ── */}
      <div className="pb-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-black tracking-[0.3em] uppercase">
                Client Reviews
              </span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A84C]" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-white font-black tracking-wider mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              WHAT OUR CLIENTS SAY
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="max-w-2xl mx-auto p-8 rounded-2xl"
              style={{
                border: '1px solid hsl(var(--brand-gold) / 0.25)',
                background: 'linear-gradient(to bottom, hsl(var(--brand-gold) / 0.08), hsl(var(--brand-navy) / 0.6))',
              }}
            >
              <Quote size={36} className="mx-auto mb-4" style={{ color: 'hsl(var(--brand-gold) / 0.4)' }} fill="currentColor" />
              <p className="text-gray-200 text-base leading-relaxed italic mb-6">
                "We value every customer and are committed to providing safe, reliable and professional transport service."
              </p>
              <p className="text-gray-500 text-sm mb-6">
                — VS Transport Service Team
              </p>
              <a
                href="https://g.page/r/CX1eWnhthnxfEBI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'hsl(var(--brand-gold))',
                  color: 'hsl(var(--brand-dark))',
                  fontFamily: "'Lato', sans-serif",
                  boxShadow: '0 4px 20px hsl(var(--brand-gold) / 0.2)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Leave Us a Google Review
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
