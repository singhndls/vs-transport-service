import { motion } from 'motion/react';
import { Phone, MessageCircle, ChevronDown, Shield, Zap, IndianRupee, ArrowRight } from 'lucide-react';

const stats = [
  { value: 'Delhi NCR', label: 'Service Coverage' },
  { value: 'GST', label: 'Registered Business' },
  { value: 'MSME', label: 'Registered' },
  { value: '24/7', label: 'WhatsApp Support' },
];

const services = [
  'Warehouse Service',
  'Chota Hathi Service',
  'Bolero Pickup Service',
  'Fleet Transport',
  'Loading & Unloading',
];

const badges = [
  { icon: Shield, label: 'Safe & Secure' },
  { icon: Zap, label: 'Fast Delivery' },
  { icon: IndianRupee, label: 'Best Rates' },
];

export default function HeroSection() {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#060D1A]">

      {/* ── BACKGROUND VIDEO + IMAGE FALLBACK ── */}
      <div className="absolute inset-0">
        {/* Poster image loads instantly — video streams in after */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/airo-assets/images/pages/home/hero"
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
          preload="none"
        >
          <source src="/airo-assets/videos/pages/home/hero-video" type="video/mp4" />
          <img
            src="/airo-assets/images/pages/home/hero"
            alt="VS Transport Service trucks on highway"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
        </video>
        {/* Deep left-to-right gradient — content side stays dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A] via-[#060D1A]/90 to-[#060D1A]/30" />
        {/* Top & bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060D1A]/60 via-transparent to-[#060D1A]" />
      </div>

      {/* ── DECORATIVE LAYERS ── */}

      {/* Subtle gold grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Diagonal gold accent bar — top-left */}
      <div
        className="absolute -top-20 -left-20 w-[600px] h-[600px] pointer-events-none opacity-20"
        style={{
          background:
            'conic-gradient(from 135deg at 0% 0%, #C9A84C 0deg, transparent 60deg)',
        }}
      />

      {/* Gold glow orb behind content */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C9A84C]/6 rounded-full blur-[120px] pointer-events-none" />

      {/* Thin animated gold horizontal line */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ top: '38%', height: '1px', background: 'linear-gradient(90deg, #C9A84C 0%, transparent 60%)' }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: 'easeOut' as const }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative flex-1 flex items-center">
        <div className="container mx-auto px-4 py-28 md:py-36">
          <div className="max-w-2xl xl:max-w-3xl">

            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#C9A84C]/35 bg-[#C9A84C]/8 rounded-full mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A84C]" />
              </span>
              <span className="text-[#C9A84C] text-xs font-black tracking-[0.22em] uppercase">
                Delhi NCR Transport &amp; Logistics Partner
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="overflow-hidden mb-2">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1
                  className="text-white leading-[0.9] font-black tracking-wider"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
                >
                  RELIABLE{' '}
                  <span
                    className="relative inline-block"
                    style={{
                      WebkitTextStroke: '2px #C9A84C',
                      color: 'transparent',
                    }}
                  >
                    TRANSPORT
                  </span>
                </h1>
              </motion.div>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1
                  className="text-[#C9A84C] leading-[0.9] font-black tracking-wider"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
                >
                  & LOGISTICS SOLUTIONS
                </h1>
              </motion.div>
            </div>

            {/* Service pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' as const }}
              className="flex flex-wrap gap-2 mb-7"
            >
              {services.map((s, i) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-bold tracking-wide text-gray-300 border border-white/10 bg-white/5 rounded-full backdrop-blur-sm"
                >
                  {i > 0 && <span className="text-[#C9A84C] mr-2">·</span>}
                  {s}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: 'easeOut' as const }}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Fast, Safe &amp; Reliable Chota Hathi, Bolero Pickup, Fleet Transport, Warehouse and Commercial Goods Transport Services across Delhi NCR.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' as const }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3.5 py-2 bg-[#0A1628]/70 border border-[#C9A84C]/20 rounded-xl backdrop-blur-sm"
                >
                  <Icon size={13} className="text-[#C9A84C]" />
                  <span className="text-gray-300 text-xs font-semibold">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: 'easeOut' as const }}
              className="flex flex-wrap gap-4"
            >
              {/* Get a Free Quote — scrolls to contact */}
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative flex items-center gap-3 px-8 py-4 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-base rounded-xl transition-all duration-300 shadow-2xl shadow-[#C9A84C]/25 hover:shadow-[#C9A84C]/45 hover:-translate-y-1 overflow-hidden"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <IndianRupee size={20} />
                Get a Free Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* WhatsApp Us */}
              <a
                href="https://wa.me/918588806333?text=Hi%2C%20I%20want%20to%20book%20a%20transport%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 border-2 border-[#C9A84C]/40 hover:border-[#C9A84C] bg-white/5 hover:bg-[#C9A84C]/10 text-white hover:text-[#C9A84C] font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>

              {/* Call Now */}
              <a
                href="tel:8588888669"
                className="group flex items-center gap-3 px-8 py-4 border-2 border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <Phone size={20} />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75, ease: 'easeOut' as const }}
        className="relative z-10"
      >
        {/* Top gold shimmer line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

        <div className="bg-[#060D1A]/85 backdrop-blur-md">
          <div className="container mx-auto px-4 py-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#C9A84C]/15">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.85 + i * 0.08, ease: 'easeOut' as const }}
                  className="text-center group cursor-default"
                >
                  <div
                    className="text-[#C9A84C] font-black text-3xl md:text-4xl mb-1 group-hover:scale-110 transition-transform duration-300"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.06em' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs tracking-widest uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gold shimmer line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-32 right-8 hidden md:flex flex-col items-center gap-2 text-gray-600 hover:text-[#C9A84C] transition-colors duration-300 group"
        aria-label="Scroll to services"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ writingMode: 'vertical-rl', fontFamily: "'Lato', sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' as const }}
          className="group-hover:text-[#C9A84C]"
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

    </section>
  );
}
