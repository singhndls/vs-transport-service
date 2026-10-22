import { motion } from 'motion/react';
import { Truck, Car, Warehouse, Package, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from "react-router";
const vehicles = [{
  icon: Truck,
  name: 'Chota Hathi / Mini Truck',
  subtitle: 'Mini Truck',
  capacity: 'Contact for details',
  dimensions: 'Small & medium loads',
  ideal: 'For small and medium local goods movement.',
  features: ['Shop deliveries', 'Local shifting', 'Warehouse movement'],
  accentColor: '#C9A84C',
  accentBg: 'rgba(201,168,76,0.08)',
  accentBorder: 'rgba(201,168,76,0.30)',
  href: '/services/chota-hathi',
  badge: 'Most Popular'
}, {
  icon: Car,
  name: 'Bolero Pickup',
  subtitle: 'Pickup Truck',
  capacity: 'Contact for details',
  dimensions: 'Medium loads',
  ideal: 'For medium commercial goods and local/NCR transportation.',
  features: ['Commercial deliveries', 'Shop & warehouse movement', 'NCR routes'],
  accentColor: '#22C55E',
  accentBg: 'rgba(34,197,94,0.08)',
  accentBorder: 'rgba(34,197,94,0.25)',
  href: '/services/bolero-pickup',
  badge: null
}, {
  icon: Package,
  name: 'Medium Truck',
  subtitle: 'Commercial Truck',
  capacity: 'Contact for details',
  dimensions: 'Larger loads',
  ideal: 'For larger commercial and bulk goods movement.',
  features: ['Factory dispatch', 'Bulk goods', 'Business contracts'],
  accentColor: '#A855F7',
  accentBg: 'rgba(168,85,247,0.08)',
  accentBorder: 'rgba(168,85,247,0.25)',
  href: '/services/fleet-transport',
  badge: null
}, {
  icon: Truck,
  name: 'Large Truck',
  subtitle: 'Heavy Transport',
  capacity: 'Contact for details',
  dimensions: 'Heavy loads',
  ideal: 'For heavy and long-distance transportation requirements.',
  features: ['Industrial goods', 'Long-distance routes', 'Dedicated fleet'],
  accentColor: '#3B82F6',
  accentBg: 'rgba(59,130,246,0.08)',
  accentBorder: 'rgba(59,130,246,0.25)',
  href: '/services/fleet-transport',
  badge: null
}, {
  icon: Warehouse,
  name: 'Warehouse',
  subtitle: 'Storage Facility',
  capacity: 'Contact for details',
  dimensions: 'Okhla Phase 2, Delhi',
  ideal: 'Business inventory, e-commerce stock and B2B goods storage.',
  features: ['Business inventory', 'E-commerce stock', 'Integrated transport'],
  accentColor: '#F97316',
  accentBg: 'rgba(249,115,22,0.08)',
  accentBorder: 'rgba(249,115,22,0.25)',
  href: '/services/warehouse',
  badge: null
}];
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut' as const
    }
  }
};
export default function FleetShowcaseSection() {
  return <section id="fleet" className="bg-[#060D1A] py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={fadeUp} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-5">
            <Truck size={14} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Our Fleet</span>
          </div>
          <h2 className="text-white font-black leading-tight" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 4rem)'
        }}>
            VEHICLES FOR{' '}
            <span style={{
            WebkitTextStroke: '2px #C9A84C',
            color: 'transparent'
          }}>EVERY LOAD</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm" style={{
          fontFamily: "'Lato', sans-serif"
        }}>
            For exact vehicle availability, capacity and pricing, please contact our team directly.
          </p>
        </motion.div>

        {/* Vehicle cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v, i) => <motion.div key={v.name} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.55,
          delay: i * 0.08,
          ease: 'easeOut' as const
        }} className="group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1" style={{
          background: v.accentBg,
          borderColor: v.accentBorder
        }}>
              {/* Popular badge */}
              {v.badge && <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-[#C9A84C] text-[#060D1A] text-[10px] font-black rounded-full tracking-wide uppercase">
                    {v.badge}
                  </span>
                </div>}

              {/* Icon + name */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{
              background: `${v.accentColor}18`,
              border: `1px solid ${v.accentColor}40`
            }}>
                  <v.icon size={22} style={{
                color: v.accentColor
              }} />
                </div>
                <div>
                  <div className="text-white font-black text-base leading-tight">{v.name}</div>
                  <div className="text-xs font-semibold mt-0.5" style={{
                color: v.accentColor
              }}>{v.subtitle}</div>
                </div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 bg-[#060D1A]/60 rounded-xl">
                  <div className="text-gray-600 text-[10px] uppercase tracking-wide mb-1">Capacity</div>
                  <div className="text-white text-xs font-bold">{v.capacity}</div>
                </div>
                <div className="p-3 bg-[#060D1A]/60 rounded-xl">
                  <div className="text-gray-600 text-[10px] uppercase tracking-wide mb-1">Size / Location</div>
                  <div className="text-white text-xs font-bold">{v.dimensions}</div>
                </div>
              </div>

              {/* Ideal for */}
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{v.ideal}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-6 flex-1">
                {v.features.map(f => <li key={f} className="flex items-center gap-2 text-gray-400 text-xs">
                    <CheckCircle2 size={13} style={{
                color: v.accentColor
              }} className="shrink-0" />
                    {f}
                  </li>)}
              </ul>

              {/* CTA */}
              <div className="flex gap-2 mt-auto">
                <a href={`https://wa.me/918588806333?text=Hi%2C%20I%20need%20${encodeURIComponent(v.name)}%20service`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5" style={{
              background: v.accentColor,
              color: '#060D1A'
            }}>
                  <MessageCircle size={13} /> Book Now
                </a>
                <Link to={v.href} className="flex items-center justify-center gap-1 px-3 py-2.5 border text-xs font-bold rounded-xl transition-all duration-200 hover:bg-white/5" style={{
              borderColor: `${v.accentColor}40`,
              color: v.accentColor
            }}>
                  Details <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
