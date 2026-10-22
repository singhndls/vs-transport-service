import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Car, CheckCircle2, MessageCircle, Phone, ArrowRight, MapPin, Clock, Package, Shield } from 'lucide-react';
import { bolero_pickup } from 'virtual:content';

const iconMap = [MapPin, Clock, Package, Shield];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function BoleroPickupPage() {
  return (
    <>
      <Helmet>
        <title>Bolero Pickup Service Delhi NCR | VS Transport Service</title>
        <meta name="description" content="Reliable Bolero pickup transport service across Delhi NCR. Timely delivery, safe goods handling, flexible scheduling. Call +91 8588806333 for a quote." />
        <link rel="canonical" href="https://vstransport.in/services/bolero-pickup" />
        <meta property="og:title" content="Bolero Pickup Service Delhi NCR | VS Transport" />
        <meta property="og:description" content="Pickup vehicle transportation for commercial goods, business deliveries and local or NCR transportation requirements across Delhi NCR." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vstransport.in/services/bolero-pickup" />
        <meta property="og:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Okhla, New Delhi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bolero Pickup Service Delhi NCR | VS Transport Service" />
        <meta name="twitter:description" content="Pickup vehicle transportation for commercial goods, business deliveries and local or NCR transportation requirements across Delhi NCR." />
        <meta name="twitter:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': 'https://vstransport.in/services/bolero-pickup#service',
              name: 'Bolero Pickup Service Delhi NCR',
              description: 'Pickup vehicle transportation for commercial goods, business deliveries and local or NCR transportation requirements across Delhi NCR.',
              url: 'https://vstransport.in/services/bolero-pickup',
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
                priceRange: '₹900–₹2,500',
                availability: 'https://schema.org/InStock',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vstransport.in/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vstransport.in/#services' },
                { '@type': 'ListItem', position: 3, name: 'Bolero Pickup Service', item: 'https://vstransport.in/services/bolero-pickup' },
              ],
            },
          ],
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'hsl(var(--brand-dark))' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/30 rounded-full mb-6" style={{ background: 'hsl(var(--brand-green) / 0.08)' }}>
              <Car size={14} className="text-green-400" />
              <span className="text-green-400 text-xs font-bold tracking-widest uppercase">{bolero_pickup.hero.badge}</span>
            </div>
            <h1 className="text-white font-black leading-tight mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              <span>{bolero_pickup.hero.heading1}</span><br />
              <span style={{ WebkitTextStroke: '2px hsl(var(--brand-gold))', color: 'transparent' }}>{bolero_pickup.hero.heading2}</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl" style={{ fontFamily: "'Lato', sans-serif" }}>
              {bolero_pickup.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20Bolero%20Pickup%20service" target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-7 py-3.5 font-black rounded-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                style={{ background: 'hsl(var(--brand-gold))', color: 'hsl(var(--brand-dark))', boxShadow: '0 10px 25px hsl(var(--brand-gold) / 0.2)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'hsl(var(--brand-gold-hover))')}
                onMouseLeave={e => (e.currentTarget.style.background = 'hsl(var(--brand-gold))')}>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <MessageCircle size={18} />
                <span>{bolero_pickup.hero.ctaWhatsApp}</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:8588806333"
                className="flex items-center gap-3 px-7 py-3.5 font-bold rounded-xl transition-all duration-300"
                style={{ border: '1px solid hsl(var(--brand-gold) / 0.4)', color: 'hsl(var(--brand-gold))' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'hsl(var(--brand-gold) / 0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                <Phone size={18} />
                <span>{bolero_pickup.hero.ctaPhone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ background: 'hsl(var(--brand-navy))' }}>
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center text-white font-black mb-12"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <span>{bolero_pickup.features.heading} </span>
            <span style={{ color: 'hsl(var(--brand-gold))' }}>{bolero_pickup.features.headingHighlight}</span>
            <span> {bolero_pickup.features.headingSuffix}</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bolero_pickup.features.items.map((f, i) => {
              const Icon = iconMap[i] ?? Shield;
              return (
                <motion.div key={f.id} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const } } }}
                  className="p-6 rounded-2xl transition-all duration-300 group"
                  style={{ background: 'hsl(var(--brand-dark))', border: '1px solid hsl(var(--brand-border))' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                    style={{ background: 'hsl(var(--brand-gold) / 0.1)', border: '1px solid hsl(var(--brand-gold) / 0.2)' }}>
                    <Icon size={22} style={{ color: 'hsl(var(--brand-gold))' }} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20" style={{ background: 'hsl(var(--brand-dark))' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-center text-white font-black mb-10"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              <span>{bolero_pickup.useCases.heading} </span>
              <span style={{ color: 'hsl(var(--brand-gold))' }}>{bolero_pickup.useCases.headingHighlight}</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {bolero_pickup.useCases.items.map((uc, i) => (
                <motion.div key={uc.id} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const } } }}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: 'hsl(var(--brand-navy))', border: '1px solid hsl(var(--brand-border))' }}>
                  <CheckCircle2 size={18} className="shrink-0" style={{ color: 'hsl(var(--brand-gold))' }} />
                  <span className="text-gray-300 text-sm font-medium">{uc.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'hsl(var(--brand-navy))', borderTop: '1px solid hsl(var(--brand-gold) / 0.15)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-black mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            <span>{bolero_pickup.cta.heading} </span>
            <span style={{ color: 'hsl(var(--brand-gold))' }}>{bolero_pickup.cta.headingHighlight}</span>
            <span> {bolero_pickup.cta.headingSuffix}</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">{bolero_pickup.cta.subtext}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20Bolero%20Pickup%20service" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 font-black rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'hsl(var(--brand-gold))', color: 'hsl(var(--brand-dark))', boxShadow: '0 10px 25px hsl(var(--brand-gold) / 0.2)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'hsl(var(--brand-gold-hover))')}
              onMouseLeave={e => (e.currentTarget.style.background = 'hsl(var(--brand-gold))')}>
              <MessageCircle size={20} />
              <span>{bolero_pickup.cta.ctaWhatsApp}</span>
            </a>
            <a href="tel:8588806333"
              className="flex items-center gap-2 px-8 py-4 font-bold rounded-xl transition-all duration-300"
              style={{ border: '1px solid hsl(var(--brand-gold) / 0.4)', color: 'hsl(var(--brand-gold))' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'hsl(var(--brand-gold) / 0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <Phone size={20} />
              <span>{bolero_pickup.cta.ctaPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
