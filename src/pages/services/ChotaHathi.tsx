import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Truck, CheckCircle2, MessageCircle, Phone, ArrowRight, MapPin, Clock, IndianRupee, Shield } from 'lucide-react';

const features = [
  { icon: Clock, title: 'Same-Day Delivery', desc: 'Book before noon and get same-day delivery across Delhi NCR.' },
  { icon: IndianRupee, title: 'Affordable Flat Rates', desc: 'Transparent pricing with no hidden charges. Pay only for what you need.' },
  { icon: Shield, title: 'Trained Drivers', desc: 'All drivers are verified, trained, and experienced in safe goods handling.' },
  { icon: MapPin, title: 'Full NCR Coverage', desc: 'Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and all NCR zones.' },
];

const useCases = [
  'Household shifting (1–2 BHK)',
  'Shop & retail deliveries',
  'E-commerce stock movement',
  'Office relocation',
  'Small factory dispatches',
  'Market goods transport',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function ChotaHathiPage() {
  return (
    <>
      <Helmet>
        <title>Chota Hathi Service Delhi NCR | VS Transport Service</title>
        <meta name="description" content="Affordable Chota Hathi transport service in Delhi NCR. Same-day delivery, trained drivers, transparent pricing. Book now — call +91 8588806333." />
        <link rel="canonical" href="https://vstransport.in/services/chota-hathi" />
        <meta property="og:title" content="Chota Hathi Service Delhi NCR | VS Transport" />
        <meta property="og:description" content="Fast, affordable Chota Hathi transport for household shifting, shop deliveries, and local goods movement across Delhi NCR." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vstransport.in/services/chota-hathi" />
        <meta property="og:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Okhla, New Delhi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chota Hathi Service Delhi NCR | VS Transport Service" />
        <meta name="twitter:description" content="Fast, affordable Chota Hathi transport for household shifting, shop deliveries, and local goods movement across Delhi NCR." />
        <meta name="twitter:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': 'https://vstransport.in/services/chota-hathi#service',
              name: 'Chota Hathi Service Delhi NCR',
              description: 'Affordable mini-truck Chota Hathi transport for household shifting, shop deliveries, and local goods movement across Delhi NCR. Same-day delivery available.',
              url: 'https://vstransport.in/services/chota-hathi',
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
                priceRange: '₹600–₹1,500',
                availability: 'https://schema.org/InStock',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vstransport.in/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vstransport.in/#services' },
                { '@type': 'ListItem', position: 3, name: 'Chota Hathi Service', item: 'https://vstransport.in/services/chota-hathi' },
              ],
            },
          ],
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-[#060D1A] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A84C]/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-6">
              <Truck size={14} className="text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Chota Hathi Service</span>
            </div>
            <h1 className="text-white font-black leading-tight mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              CHOTA HATHI TRANSPORT<br />
              <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>DELHI NCR</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl" style={{ fontFamily: "'Lato', sans-serif" }}>
              Fast, affordable mini-truck transport for household shifting, shop deliveries, and local goods movement. Compact enough for narrow lanes, spacious enough for a full 1–2 BHK.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20Chota%20Hathi%20service"
                target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-7 py-3.5 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20 overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <MessageCircle size={18} /> Book Now
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
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center text-white font-black mb-12"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            WHY CHOOSE OUR <span className="text-[#C9A84C]">CHOTA HATHI</span> SERVICE
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const } } }}
                className="p-6 bg-[#060D1A] border border-[#1E2A3A] hover:border-[#C9A84C]/40 rounded-2xl transition-all duration-300 group"
              >
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

      {/* Use Cases */}
      <section className="bg-[#060D1A] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-center text-white font-black mb-10"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              IDEAL FOR THESE <span className="text-[#C9A84C]">USE CASES</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {useCases.map((uc, i) => (
                <motion.div
                  key={uc}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const } } }}
                  className="flex items-center gap-3 p-4 bg-[#0A1628] border border-[#1E2A3A] rounded-xl"
                >
                  <CheckCircle2 size={18} className="text-[#C9A84C] shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{uc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] border-t border-[#C9A84C]/15 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-black mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            READY TO BOOK YOUR <span className="text-[#C9A84C]">CHOTA HATHI?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">WhatsApp us for an instant quote — we typically respond within minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20Chota%20Hathi%20service" target="_blank" rel="noopener noreferrer"
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
