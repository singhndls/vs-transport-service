import { motion } from 'motion/react';
import { Star, MapPin, ThumbsUp, Award, BadgeCheck, TrendingUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/* ── Trust badges ── */
const trustBadges = [
  { icon: BadgeCheck, label: 'GST Registered' },
  { icon: Award, label: 'MSME Registered' },
  { icon: ThumbsUp, label: 'Safe Goods Handling' },
  { icon: TrendingUp, label: 'Reliable Service' },
  { icon: MapPin, label: 'On-Time Delivery' },
  { icon: Star, label: 'Customer Support' },
];

/* ── Client reviews ── */
const reviews: never[] = [];

/* ── Area coverage ── */
const areas = [
  'Delhi', 'Noida', 'Greater Noida', 'Gurgaon / Gurugram',
  'Faridabad', 'Ghaziabad', 'Okhla', 'Dwarka',
  'Rohini', 'Saket', 'Lajpat Nagar', 'Karol Bagh',
];

export default function CustomerTrustSection() {
  return (
    <section id="customer-trust" className="bg-[#080F1C] relative overflow-hidden">

      {/* ── TRUST BADGE STRIP ── */}
      <div className="relative border-y border-[#1E2A3A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#060D1A] to-[#0A1628]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="relative container mx-auto px-4 py-8">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {trustBadges.map((b) => (
              <motion.div
                key={b.label}
                variants={fadeUp}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-transparent hover:border-[#C9A84C]/20 hover:bg-[#C9A84C]/5 transition-all duration-300 cursor-default text-center"
              >
                <div className="w-10 h-10 bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20 rounded-xl flex items-center justify-center transition-colors">
                  <b.icon size={18} className="text-[#C9A84C]" />
                </div>
                <span className="text-gray-400 text-[11px] font-semibold leading-tight">{b.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
      </div>

      {/* ── CLIENT REVIEWS ── */}
      <div className="py-24 relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A84C]/4 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">

          {/* Header */}
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
                Customer Trust
              </span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A84C]" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-white font-black tracking-wider mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              TRUSTED BY{' '}
              <span className="text-[#C9A84C]">BUSINESSES</span>{' '}
              ACROSS NCR
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
              Trusted by businesses across Delhi NCR for reliable transport and professional logistics support.
            </motion.p>
          </motion.div>

          {/* No fabricated reviews — genuine reviews shown when available */}
          {reviews.length > 0 && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {reviews.map((r, i) => (
                <div key={i} />
              ))}
            </motion.div>
          )}

          {/* ── COVERAGE AREA ── */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: 'easeOut' as const }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0D1F3C] to-[#0A1628]" />
            <div className="absolute inset-0 border border-[#C9A84C]/15 rounded-2xl" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

            <div className="relative px-8 py-10">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={18} className="text-[#C9A84C]" />
                <h3
                  className="text-white font-black tracking-wider text-xl"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  DELHI NCR SERVICE COVERAGE
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-4">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-[#060D1A] border border-[#1E2A3A] hover:border-[#C9A84C]/35 hover:bg-[#C9A84C]/5 text-gray-300 hover:text-[#C9A84C] text-xs font-semibold rounded-xl transition-all duration-200 cursor-default"
                  >
                    {area}
                  </span>
                ))}
                <span className="px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold rounded-xl">
                  & More
                </span>
              </div>
              <p className="text-gray-600 text-xs">
                Outstation and extended routes may be available on request. Contact us to discuss your specific requirement.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
