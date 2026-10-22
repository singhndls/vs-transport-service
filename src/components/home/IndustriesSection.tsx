import { motion } from 'motion/react';
import { Factory, Pill, ShoppingCart, Package, Store, Cog, Building2, Truck, Warehouse } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing',
    desc: 'Raw material inbound and finished goods outbound for factories across Delhi NCR.',
  },
  {
    icon: Pill,
    name: 'Pharmaceutical & Healthcare Logistics',
    desc: 'Transport support for healthcare supplies, medical devices and commercial goods, subject to applicable handling requirements.',
  },
  {
    icon: ShoppingCart,
    name: 'FMCG',
    desc: 'High-frequency, time-sensitive deliveries for fast-moving consumer goods distributors.',
  },
  {
    icon: Package,
    name: 'E-commerce',
    desc: 'Bulk stock movement between warehouses, fulfilment centres, and last-mile hubs.',
  },
  {
    icon: Store,
    name: 'Retail',
    desc: 'Store replenishment, shop-to-shop transfers, and seasonal stock redistribution.',
  },
  {
    icon: Cog,
    name: 'Industrial Goods',
    desc: 'Heavy machinery parts, tools, and industrial equipment transport with care.',
  },
  {
    icon: Building2,
    name: 'Corporate Offices',
    desc: 'Office relocation, furniture shifting, and IT equipment transport for businesses.',
  },
  {
    icon: Truck,
    name: 'Logistics & 3PL',
    desc: 'Fleet support and overflow capacity for logistics companies and 3PL operators.',
  },
  {
    icon: Warehouse,
    name: 'Warehousing',
    desc: 'Storage and warehouse movement support for businesses requiring regular inventory management.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function IndustriesSection() {
  return (
    <section className="bg-[#0A1628] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A84C]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-5">
            <Factory size={14} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Industries We Serve</span>
          </div>
          <h2
            className="text-white font-black leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            TRUSTED ACROSS{' '}
            <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>EVERY SECTOR</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
            We provide reliable transport and logistics solutions for businesses of all sizes across Delhi NCR.
          </p>
        </motion.div>

        {/* Industry cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              className="group p-6 bg-[#060D1A] border border-[#1E2A3A] hover:border-[#C9A84C]/40 rounded-2xl transition-all duration-300 hover:shadow-[0_4px_24px_rgba(201,168,76,0.08)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/15 transition-colors duration-300">
                <industry.icon size={22} className="text-[#C9A84C]" />
              </div>
              <h3
                className="text-white font-black text-base mb-2 group-hover:text-[#C9A84C] transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em', fontSize: '1.1rem' }}
              >
                {industry.name}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-gray-600 text-xs mt-10"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Don't see your industry? We serve all business types.{' '}
          <a
            href="https://wa.me/918588806333?text=Hi%2C%20I%20need%20transport%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A84C] hover:underline"
          >
            Contact us to discuss your requirements.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
