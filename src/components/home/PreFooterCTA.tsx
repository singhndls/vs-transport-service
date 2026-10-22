import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight, Truck, Clock } from 'lucide-react';

export default function PreFooterCTA() {
  return (
    <section className="relative bg-[#060D1A] py-20 md:py-24 overflow-hidden">
      {/* Background: large gold radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#C9A84C]/6 rounded-full blur-[120px]" />
        {/* Diagonal lines texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-bold tracking-widest uppercase">WhatsApp Support Available 24/7</span>
          </div>

          {/* Headline */}
          <h2
            className="text-white font-black leading-tight mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 6vw, 5rem)', letterSpacing: '0.02em' }}
          >
            NEED FAST TRANSPORT
            <br />
            <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>
              SERVICE RIGHT NOW?
            </span>
          </h2>

          <p
            className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Delhi NCR based transport and logistics partner. Chota Hathi, Bolero Pickup, Fleet Transport &amp; Warehouse — professional service for businesses across NCR.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { icon: Truck, value: 'Fleet', label: 'Transport Ready' },
              { icon: Clock, value: '24/7', label: 'WhatsApp Support' },
              { icon: Phone, value: 'GST', label: 'Registered' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#C9A84C]/12 border border-[#C9A84C]/25 rounded-xl flex items-center justify-center">
                  <s.icon size={16} className="text-[#C9A84C]" />
                </div>
                <div className="text-left">
                  <div className="text-white font-black text-sm leading-tight">{s.value}</div>
                  <div className="text-gray-600 text-[10px] uppercase tracking-wide">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8588806333"
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-base rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-[#C9A84C]/25 overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <Phone size={20} className="relative z-10" />
              <span className="relative z-10">Call Now: +91 8588806333</span>
            </a>

            <a
              href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20an%20urgent%20transport%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#C9A84C]/40 hover:border-[#C9A84C] hover:bg-[#C9A84C]/8 text-[#C9A84C] font-black text-base rounded-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              WhatsApp Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust line */}
          <p className="text-gray-600 text-xs mt-8">
            GST Registered · MSME Registered · Safe Goods Handling · Delhi NCR Coverage
          </p>
        </motion.div>
      </div>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
    </section>
  );
}
