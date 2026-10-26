import { motion } from 'motion/react';
import { CheckCircle2, Phone, MessageCircle, Award, Target, TrendingUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const highlights = [
  'Safe and secure goods handling',
  'Reliable and professional service',
  'Transparent communication',
  'Timely delivery',
  'Delhi NCR coverage',
  'Dedicated customer support',
];

const milestones = [
  { icon: Award, label: 'GST', sub: 'Registered' },
  { icon: Target, label: 'MSME', sub: 'Registered' },
  { icon: TrendingUp, label: 'Delhi NCR', sub: 'Service Area' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#080F1C] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B3A6B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + milestones */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <imgsrc="/assets/Reliable%20Transport%20Service%20Banner.png"
                alt="VS Transport warehouse team at work"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-0 border-2 border-[#C9A84C]/20 rounded-2xl pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/60 to-transparent" />
            </div>

            {/* Floating card: Manager */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -left-4 md:-left-8 bg-[#0A1628] border border-[#C9A84C]/30 rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C9A84C]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#C9A84C] font-black text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>KK</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Kunal Kishor Singh</div>
                  <div className="text-[#C9A84C] text-xs">Operations Manager</div>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <a
                  href="tel:8588806333"
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold rounded-lg hover:bg-[#C9A84C]/10 transition-colors"
                >
                  <Phone size={11} /> Call
                </a>
                <a
                  href="https://wa.me/918588806333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C9A84C] text-[#060D1A] text-xs font-black rounded-lg hover:bg-[#E2C06A] transition-colors"
                >
                  <MessageCircle size={11} /> WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Milestones row */}
            <div className="grid grid-cols-3 gap-3 mt-12">
              {milestones.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center p-4 border border-[#1E2A3A] bg-[#0A1628]/60 rounded-xl">
                  <Icon size={18} className="text-[#C9A84C] mx-auto mb-2" />
                  <div className="text-white font-black text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{label}</div>
                  <div className="text-gray-500 text-xs">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.25em] uppercase">
                About Us
              </span>
              <div className="h-px w-8 bg-[#C9A84C]" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-white text-4xl md:text-5xl font-black tracking-wider mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ABOUT VS TRANSPORT SERVICE
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-300 text-base leading-relaxed mb-4">
              VS Transport Service is a Delhi NCR based transport and logistics service provider offering reliable transportation and warehouse support for businesses and individuals.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-400 text-base leading-relaxed mb-8">
              We specialize in Chota Hathi Service, Bolero Pickup Service, Fleet Transport, Warehouse Support, Loading &amp; Unloading and Commercial Goods Transportation. Our focus is simple — safe handling, reliable service, transparent communication and timely delivery. Under the leadership of <span className="text-[#C9A84C] font-semibold">Kunal Kishor Singh</span> and <span className="text-[#C9A84C] font-semibold">R. K. Singh</span>, we serve businesses across Delhi NCR with professional transport solutions tailored to their requirements.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((h) => (
                <motion.div key={h} variants={fadeUp} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#C9A84C] shrink-0" />
                  <span className="text-gray-300 text-sm">{h}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="tel:8588888669"
                className="flex items-center gap-2 px-6 py-3.5 border-2 border-[#C9A84C]/50 text-[#C9A84C] font-bold text-sm rounded-xl hover:bg-[#C9A84C]/10 transition-all"
              >
                <Phone size={16} />
                +91 8588888669
              </a>
              <a
                href="https://wa.me/918588888669"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-sm rounded-xl transition-all shadow-lg shadow-[#C9A84C]/20"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
