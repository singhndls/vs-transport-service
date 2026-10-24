import { motion } from 'motion/react';
import { Warehouse, Truck, Car, Package, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: Warehouse,
    number: '01',
    title: 'Warehouse Service',
    tagline: 'Storage Support at Okhla Phase 2',
    desc: 'Professional warehouse and storage support at Okhla Phase 2, Delhi NCR. Suitable for business inventory, e-commerce stock, B2B goods and short-term or regular storage requirements.',
    features: ['Business inventory storage', 'E-commerce stock support', 'B2B goods storage', 'Easy loading access'],
    accentColor: '#3B82F6',
    accentBg: 'rgba(59,130,246,0.08)',
    accentBorder: 'rgba(59,130,246,0.25)',
    accentHover: 'rgba(59,130,246,0.15)',
  },
  {
    icon: Truck,
    number: '02',
    title: 'Chota Hathi Service',
    tagline: 'Mini Truck Transport',
    desc: 'Reliable Chota Hathi / Mini Truck transport for small and medium-size goods movement across Delhi NCR. Suitable for shop deliveries, commercial goods, local shifting and warehouse movement.',
    features: ['Shop deliveries', 'Commercial goods', 'Local shifting', 'Same-day delivery (subject to availability)'],
    accentColor: '#C9A84C',
    accentBg: 'rgba(201,168,76,0.08)',
    accentBorder: 'rgba(201,168,76,0.35)',
    accentHover: 'rgba(201,168,76,0.15)',
    featured: true,
  },
  {
    icon: Car,
    number: '03',
    title: 'Bolero Pickup Service',
    tagline: 'Commercial Goods Transport',
    desc: 'Reliable Bolero Pickup transportation for commercial goods and medium-load movement across Delhi NCR and nearby locations. Suitable for commercial deliveries, shop and warehouse movement.',
    features: ['Commercial deliveries', 'Shop & warehouse movement', 'Furniture & equipment', 'NCR and nearby routes'],
    accentColor: '#22C55E',
    accentBg: 'rgba(34,197,94,0.08)',
    accentBorder: 'rgba(34,197,94,0.25)',
    accentHover: 'rgba(34,197,94,0.15)',
  },
  {
    icon: Package,
    number: '04',
    title: 'Fleet Transport Service',
    tagline: 'Business Fleet Solutions',
    desc: 'Reliable vehicle and fleet transportation solutions for businesses requiring regular or multiple-vehicle movement. Suitable for regular business dispatches, B2B transportation and distribution support.',
    features: ['Regular business dispatches', 'B2B transportation', 'Distribution support', 'Dedicated vehicle requirements'],
    accentColor: '#A855F7',
    accentBg: 'rgba(168,85,247,0.08)',
    accentBorder: 'rgba(168,85,247,0.25)',
    accentHover: 'rgba(168,85,247,0.15)',
  },
  {
    icon: Car,
    number: '05',
    title: 'Corporate Monthly Taxi Service',
    tagline: 'Fixed Monthly Contracts for Companies',
    desc: 'Reliable corporate taxi service across Delhi NCR for companies, offices and business establishments. Monthly fixed contracts with routes, duty hours and contract terms agreed in advance. Individual on-demand bookings are not offered.',
    features: [
      'Monthly fixed contracts',
      'Corporate office travel',
      'Pre-agreed routes & duty hours',
      'Delhi NCR coverage',
    ],
    accentColor: '#06B6D4',
    accentBg: 'rgba(6,182,212,0.08)',
    accentBorder: 'rgba(6,182,212,0.25)',
    accentHover: 'rgba(6,182,212,0.15)',
  },

];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#080F1C] relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1B3A6B]/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 relative">

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
              What We Offer
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-white font-black tracking-wider mb-5"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            OUR{' '}
            <span className="text-[#C9A84C]">SERVICES</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            Comprehensive logistics solutions designed to move your goods safely, swiftly, and affordably across Delhi NCR.
          </motion.p>
        </motion.div>

        {/* ── SERVICE CARDS ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 cursor-default"
              style={{
                background: `linear-gradient(135deg, #0A1628 0%, #060D1A 100%)`,
                border: `1px solid ${svc.featured ? svc.accentBorder : 'rgba(30,42,58,1)'}`,
                boxShadow: svc.featured ? `0 0 40px ${svc.accentColor}15` : 'none',
              }}
              whileHover={{
                boxShadow: `0 20px 60px ${svc.accentColor}20`,
                borderColor: svc.accentBorder,
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${svc.accentColor}, transparent)`,
                  opacity: svc.featured ? 1 : 0,
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${svc.accentColor}, transparent)`,
                }}
              />

              {/* Corner glow */}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `${svc.accentColor}20` }}
              />

              {/* Featured badge */}
              {svc.featured && (
                <div
                  className="absolute top-5 right-5 px-3 py-1 text-[#060D1A] text-[9px] font-black rounded-full tracking-[0.2em] uppercase"
                  style={{ background: svc.accentColor }}
                >
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: svc.accentBg, border: `1px solid ${svc.accentBorder}` }}
                  >
                    <svc.icon size={26} style={{ color: svc.accentColor }} />
                  </div>
                  <span
                    className="font-black text-5xl leading-none opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", color: svc.accentColor }}
                  >
                    {svc.number}
                  </span>
                </div>

                {/* Tagline */}
                <div className="mb-1.5">
                  <span
                    className="text-[10px] font-black tracking-[0.25em] uppercase"
                    style={{ color: svc.accentColor, opacity: 0.75 }}
                  >
                    {svc.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-white font-black tracking-wide mb-3"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{svc.desc}</p>

                {/* Divider */}
                <div
                  className="h-px mb-6 opacity-30"
                  style={{ background: `linear-gradient(90deg, ${svc.accentColor}, transparent)` }}
                />

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2.5 mb-7">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 size={13} style={{ color: svc.accentColor }} className="shrink-0" />
                      <span className="text-gray-300 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/918588806333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 text-sm font-bold transition-all duration-300"
                  style={{ color: svc.accentColor }}
                >
                  <span className="border-b border-current pb-0.5">Book This Service</span>
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1.5 transition-transform duration-300"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── BOTTOM CTA BANNER ── */}
        <motion.div
          className="mt-14 relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' as const }}
        >
          {/* Banner background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0D1F3C] to-[#0A1628]" />
          <div className="absolute inset-0 border border-[#C9A84C]/20 rounded-2xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p
                className="text-white font-black text-xl md:text-2xl tracking-wide mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                NEED A CUSTOM LOGISTICS SOLUTION?
              </p>
              <p className="text-gray-400 text-sm">
                Tell us your requirements — we'll build a plan that fits your budget.
              </p>
            </div>
            <a
              href="https://wa.me/918588806333"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-sm rounded-xl transition-all duration-300 shadow-xl shadow-[#C9A84C]/25 hover:shadow-[#C9A84C]/40 hover:-translate-y-0.5 whitespace-nowrap overflow-hidden"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <MessageCircle size={17} />
              Get a Free Quote
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
