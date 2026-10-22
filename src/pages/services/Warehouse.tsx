import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Warehouse, CheckCircle2, MessageCircle, Phone, ArrowRight, Shield, Package, BarChart3, Zap } from 'lucide-react';

const features = [
  { icon: Shield, title: '24/7 Security', desc: 'Round-the-clock CCTV surveillance, security guards, and access control.' },
  { icon: Package, title: 'Inventory Management', desc: 'Digital stock tracking with real-time visibility and accurate reconciliation.' },
  { icon: BarChart3, title: 'Flexible Terms', desc: 'Short-term and long-term storage contracts. Scale up or down as needed.' },
  { icon: Zap, title: 'Integrated Transport', desc: 'Store and dispatch with our own fleet — one partner for everything.' },
];

const benefits = [
  'GST-registered invoicing',
  'Clean, dry storage facility',
  'Forklift & loading dock access',
  'Barcode/QR inventory tracking',
  'Dedicated account manager',
  'Flexible in/out scheduling',
  'Fire suppression systems',
  'Insurance advisory available',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function WarehousePage() {
  return (
    <>
      <Helmet>
        <title>Warehouse Storage Service Okhla Delhi | VS Transport Service</title>
        <meta name="description" content="Secure warehouse storage in Okhla Phase 2, New Delhi. 24/7 security, inventory management, GST invoicing. Serving Delhi NCR businesses. Call +91 8588806333." />
        <link rel="canonical" href="https://vstransport.in/services/warehouse" />
        <meta property="og:title" content="Warehouse Service Okhla Delhi | VS Transport" />
        <meta property="og:description" content="Secure, managed warehouse storage in Okhla, New Delhi. Integrated transport, GST invoicing, flexible terms for Delhi NCR businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vstransport.in/services/warehouse" />
        <meta property="og:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Okhla Phase 2, New Delhi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Warehouse Storage Service Okhla Delhi | VS Transport Service" />
        <meta name="twitter:description" content="Secure, managed warehouse storage in Okhla, New Delhi. Integrated transport, GST invoicing, flexible terms for Delhi NCR businesses." />
        <meta name="twitter:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': 'https://vstransport.in/services/warehouse#service',
              name: 'Warehouse Storage Service Okhla Delhi',
              description: 'Secure warehouse storage at Okhla Phase 2, New Delhi. 24/7 security, inventory management, GST invoicing, and integrated transport for Delhi NCR businesses.',
              url: 'https://vstransport.in/services/warehouse',
              provider: { '@id': 'https://vstransport.in/#organization' },
              areaServed: [
                { '@type': 'City', name: 'Delhi' },
                { '@type': 'City', name: 'Noida' },
                { '@type': 'City', name: 'Gurgaon' },
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
                { '@type': 'ListItem', position: 3, name: 'Warehouse Service', item: 'https://vstransport.in/services/warehouse' },
              ],
            },
          ],
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-[#060D1A] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/30 bg-blue-500/8 rounded-full mb-6">
              <Warehouse size={14} className="text-blue-400" />
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Warehouse Service</span>
            </div>
            <h1 className="text-white font-black leading-tight mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              SECURE WAREHOUSE<br />
              <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>OKHLA, DELHI</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl" style={{ fontFamily: "'Lato', sans-serif" }}>
              Strategically located in Okhla Phase 2 — Delhi's premier industrial zone. Secure storage with 24/7 surveillance, digital inventory management, and integrated transport for seamless logistics.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20warehouse%20storage%20service" target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-7 py-3.5 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20 overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <MessageCircle size={18} /> Get Quote
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
            WHAT MAKES OUR <span className="text-[#C9A84C]">WAREHOUSE</span> DIFFERENT
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const } } }}
                className="p-6 bg-[#060D1A] border border-[#1E2A3A] hover:border-[#C9A84C]/40 rounded-2xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <f.icon size={22} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits checklist */}
      <section className="bg-[#060D1A] py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center text-white font-black mb-10"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            EVERYTHING <span className="text-[#C9A84C]">INCLUDED</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div key={b} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const } } }}
                className="flex items-center gap-3 p-4 bg-[#0A1628] border border-[#1E2A3A] rounded-xl">
                <CheckCircle2 size={18} className="text-[#C9A84C] shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] border-t border-[#C9A84C]/15 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-black mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            NEED WAREHOUSE SPACE IN <span className="text-[#C9A84C]">DELHI?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Contact us for a free site visit and storage consultation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20warehouse%20storage%20service" target="_blank" rel="noopener noreferrer"
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
