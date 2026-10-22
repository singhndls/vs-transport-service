import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Package, CheckCircle2, MessageCircle, Phone, ArrowRight, Truck, BarChart3, Shield, Zap } from 'lucide-react';
import { fleet_transport } from 'virtual:content';

const iconMap: Record<string, React.ElementType> = {
  f1: Truck, f2: BarChart3, f3: Shield, f4: Zap,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function FleetTransportPage() {
  return (
    <>
      <Helmet>
        <title>Fleet Transport Service Delhi NCR | VS Transport Service</title>
        <meta name="description" content="Comprehensive fleet transport solutions for businesses in Delhi NCR. Multiple vehicle types, dedicated fleet, route optimization, business contracts. Call +91 8588806333." />
        <link rel="canonical" href="https://vstransport.in/services/fleet-transport" />
        <meta property="og:title" content="Fleet Transport Service Delhi NCR | VS Transport" />
        <meta property="og:description" content="Scale your logistics with VS Transport's fleet service. Multiple vehicles, dedicated options, business contracts for Delhi NCR companies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vstransport.in/services/fleet-transport" />
        <meta property="og:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Okhla, New Delhi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fleet Transport Service Delhi NCR | VS Transport Service" />
        <meta name="twitter:description" content="Scale your logistics with VS Transport's fleet service. Multiple vehicles, dedicated options, business contracts for Delhi NCR companies." />
        <meta name="twitter:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': 'https://vstransport.in/services/fleet-transport#service',
              name: 'Fleet Transport Service Delhi NCR',
              description: 'Full fleet logistics for businesses in Delhi NCR. Multiple vehicle types, dedicated fleet options, route optimization, and monthly contracts.',
              url: 'https://vstransport.in/services/fleet-transport',
              provider: { '@id': 'https://vstransport.in/#organization' },
              areaServed: [
                { '@type': 'City', name: 'Delhi' },
                { '@type': 'City', name: 'Noida' },
                { '@type': 'City', name: 'Gurgaon' },
                { '@type': 'City', name: 'Faridabad' },
                { '@type': 'City', name: 'Ghaziabad' },
              ],
              offers: {
                '@type': 'Offer',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vstransport.in/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vstransport.in/#services' },
                { '@type': 'ListItem', position: 3, name: 'Fleet Transport Service', item: 'https://vstransport.in/services/fleet-transport' },
              ],
            },
          ],
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-[#060D1A] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-purple-500/30 bg-purple-500/8 rounded-full mb-6">
              <Package size={14} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">{fleet_transport.hero.eyebrow}</span>
            </div>
            <h1 className="text-white font-black leading-tight mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              <span>{fleet_transport.hero.headline}</span><br />
              <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>{fleet_transport.hero.headlineAccent}</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl" style={{ fontFamily: "'Lato', sans-serif" }}>
              {fleet_transport.hero.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20fleet%20transport%20service" target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-7 py-3.5 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20 overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <MessageCircle size={18} /> Get Fleet Quote
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:8588806333" className="flex items-center gap-3 px-7 py-3.5 border border-[#C9A84C]/40 text-[#C9A84C] font-bold rounded-xl hover:bg-[#C9A84C]/10 transition-all duration-300">
                <Phone size={18} /> +91 8588806333
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0A1628] py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center text-white font-black mb-12"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            OUR <span className="text-[#C9A84C]">FLEET CAPABILITIES</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet_transport.features.map((f, i) => {
              const Icon = iconMap[f.id] ?? Truck;
              return (
                <motion.div key={f.id} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const } } }}
                  className="p-6 bg-[#060D1A] border border-[#1E2A3A] hover:border-[#C9A84C]/40 rounded-2xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Icon size={22} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#060D1A] py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center text-white font-black mb-10"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            INDUSTRIES WE <span className="text-[#C9A84C]">SERVE</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fleet_transport.industries.map((ind, i) => (
              <motion.div key={ind.id} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const } } }}
                className="flex items-center gap-3 p-4 bg-[#0A1628] border border-[#1E2A3A] rounded-xl">
                <CheckCircle2 size={18} className="text-[#C9A84C] shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] border-t border-[#C9A84C]/15 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-black mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <span>{fleet_transport.cta.headline}</span>{' '}
            <span className="text-[#C9A84C]">{fleet_transport.cta.headlineAccent}</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">{fleet_transport.cta.body}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20fleet%20transport%20service" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20">
              <MessageCircle size={20} /> WhatsApp for Quote
            </a>
            <a href="tel:8588806333" className="flex items-center gap-2 px-8 py-4 border border-[#C9A84C]/40 text-[#C9A84C] font-bold rounded-xl hover:bg-[#C9A84C]/10 transition-all duration-300">
              <Phone size={20} /> Call +91 8588806333
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
