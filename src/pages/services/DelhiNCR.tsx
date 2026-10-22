import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { MapPin, MessageCircle, Phone, ArrowRight, Truck, Clock, Shield, IndianRupee } from 'lucide-react';
import { delhi_ncr } from 'virtual:content';

const iconMap: Record<string, React.ElementType> = {
  f1: Truck, f2: Clock, f3: Shield, f4: IndianRupee,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function DelhiNCRPage() {
  return (
    <>
      <Helmet>
        <title>Transport Service Delhi NCR | VS Transport Service</title>
        <meta name="description" content="Trusted transport and logistics service across all Delhi NCR zones — Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and beyond. Call +91 8588806333." />
        <link rel="canonical" href="https://vstransport.in/services/delhi-ncr" />
        <meta property="og:title" content="Transport Service Delhi NCR | VS Transport" />
        <meta property="og:description" content="Complete transport coverage across Delhi NCR. All vehicle types, transparent pricing. Serving Delhi NCR businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vstransport.in/services/delhi-ncr" />
        <meta property="og:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR, India" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transport Service Delhi NCR | VS Transport Service" />
        <meta name="twitter:description" content="Complete transport coverage across Delhi NCR. All vehicle types, transparent pricing. Serving Delhi NCR businesses." />
        <meta name="twitter:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': 'https://vstransport.in/services/delhi-ncr#service',
              name: 'Transport Service Delhi NCR',
              description: 'Complete transport and logistics coverage across all Delhi NCR zones — Delhi, Noida, Gurgaon, Faridabad, Ghaziabad. All vehicle types, transparent pricing.',
              url: 'https://vstransport.in/services/delhi-ncr',
              provider: { '@id': 'https://vstransport.in/#organization' },
              areaServed: [
                { '@type': 'City', name: 'Delhi' },
                { '@type': 'City', name: 'Noida' },
                { '@type': 'City', name: 'Greater Noida' },
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
                { '@type': 'ListItem', position: 3, name: 'Delhi NCR Transport', item: 'https://vstransport.in/services/delhi-ncr' },
              ],
            },
          ],
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-[#060D1A] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-6">
              <MapPin size={14} className="text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">{delhi_ncr.hero.eyebrow}</span>
            </div>
            <h1 className="text-white font-black leading-tight mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              <span>{delhi_ncr.hero.headline}</span><br />
              <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>{delhi_ncr.hero.headlineAccent}</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl" style={{ fontFamily: "'Lato', sans-serif" }}>
              {delhi_ncr.hero.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20transport%20service%20in%20Delhi%20NCR" target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-7 py-3.5 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20 overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <MessageCircle size={18} /> Book Transport
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
            WHY DELHI NCR TRUSTS <span className="text-[#C9A84C]">VS TRANSPORT</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {delhi_ncr.features.map((f, i) => {
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

      {/* Coverage zones */}
      <section className="bg-[#060D1A] py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center text-white font-black mb-10"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            OUR <span className="text-[#C9A84C]">COVERAGE ZONES</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {delhi_ncr.zones.map((z, i) => (
              <motion.div key={z.id} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const } } }}
                className="p-5 bg-[#0A1628] border border-[#1E2A3A] hover:border-[#C9A84C]/30 rounded-2xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={15} className="text-[#C9A84C] shrink-0" />
                  <span className="text-[#C9A84C] font-bold text-sm">{z.zone}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed pl-5">{z.areas}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] border-t border-[#C9A84C]/15 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-black mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <span>{delhi_ncr.cta.headline}</span>{' '}
            <span className="text-[#C9A84C]">{delhi_ncr.cta.headlineAccent}</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">{delhi_ncr.cta.body}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20transport%20service%20in%20Delhi%20NCR" target="_blank" rel="noopener noreferrer"
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
