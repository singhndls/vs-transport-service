import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { MapPin, MessageCircle, Phone, ArrowRight, Truck, Clock, Shield, IndianRupee, CheckCircle2, Users, Package, Wrench } from 'lucide-react';
import { Link } from 'react-router';
import { loading_unloading } from 'virtual:content';

const site = 'https://vstransport.in';
const pageUrl = `${site}/services/loading-unloading`;

const featureIcons = [Users, Package, Wrench, Truck, Clock, Shield, IndianRupee, MapPin];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [{
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: 'Loading and Unloading Service Delhi',
    description: 'Professional loading and unloading service in Delhi NCR. Trained labour, equipment provided, available 7 days a week.',
    url: pageUrl,
    provider: { '@id': `${site}/#organization` },
    areaServed: [
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Faridabad' },
      { '@type': 'City', name: 'Ghaziabad' },
    ],
    offers: { '@type': 'Offer', priceCurrency: 'INR', availability: 'https://schema.org/InStock', priceRange: '₹₹' },
  }, {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site}/#services` },
      { '@type': 'ListItem', position: 3, name: 'Loading & Unloading Service Delhi', item: pageUrl },
    ],
  }],
};

export default function LoadingUnloadingPage() {
  const gold = 'hsl(var(--brand-gold))';
  const goldHover = 'hsl(var(--brand-gold-hover))';
  const dark = 'hsl(var(--brand-dark))';
  const navy = 'hsl(var(--brand-navy))';
  const navyBorder = 'hsl(var(--brand-border))';
  const textOnGold = 'hsl(var(--brand-text-on-gold))';

  return (
    <>
      <Helmet>
        <title>Loading & Unloading Service Delhi NCR | Professional Labour | VS Transport Service</title>
        <meta name="description" content="Professional loading and unloading service in Delhi NCR. Trained labour, equipment provided, available 7 days a week. Combine with Chota Hathi or Bolero Pickup. Call +91 8588806333." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Loading & Unloading Service Delhi NCR | VS Transport Service" />
        <meta property="og:description" content="Professional loading and unloading in Delhi NCR. Trained workers, equipment provided, 7 days a week. Call now for a free quote." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/pages/home/hero`} />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR, India" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Loading & Unloading Service Delhi NCR | VS Transport Service" />
        <meta name="twitter:description" content="Professional loading and unloading in Delhi NCR. Call +91 8588806333." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: dark }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(135deg, hsl(var(--brand-gold) / 0.05), transparent)` }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(${gold} 1px, transparent 1px), linear-gradient(90deg, ${gold} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="container mx-auto px-4 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <ArrowRight size={10} />
              <span className="text-gray-500">Services</span>
              <ArrowRight size={10} />
              <span style={{ color: gold }}>Loading &amp; Unloading Service</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ border: `1px solid hsl(var(--brand-gold) / 0.30)`, background: `hsl(var(--brand-gold) / 0.08)` }}>
              <Users size={13} style={{ color: gold }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: gold }}>{loading_unloading.hero.badge}</span>
            </div>

            <h1 className="text-white font-black leading-tight mb-5" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              <span>{loading_unloading.hero.heading1}</span>{' '}
              <span style={{ WebkitTextStroke: `2px ${gold}`, color: 'transparent' }}>{loading_unloading.hero.heading2}</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl" style={{ fontFamily: "'Lato', sans-serif" }}>
              {loading_unloading.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918588806333?text=Hi%2C%20I%20need%20loading%20unloading%20service%20in%20Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-black text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: gold, color: textOnGold, fontFamily: "'Lato', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.background = goldHover)}
                onMouseLeave={e => (e.currentTarget.style.background = gold)}
              >
                <MessageCircle size={16} />
                <span>{loading_unloading.hero.cta_whatsapp}</span>
              </a>
              <a
                href="tel:8588806333"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-black text-sm rounded-xl transition-all duration-300"
                style={{ border: `1px solid hsl(var(--brand-gold) / 0.40)`, color: gold, fontFamily: "'Lato', sans-serif" }}
              >
                <Phone size={16} />
                <span>{loading_unloading.hero.cta_call}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24" style={{ background: navy }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white font-black" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              <span>{loading_unloading.features_heading1}</span>{' '}
              <span style={{ WebkitTextStroke: `1.5px ${gold}`, color: 'transparent' }}>{loading_unloading.features_heading2}</span>
            </h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {loading_unloading.features.map((f, idx) => {
              const Icon = featureIcons[idx] ?? Shield;
              return (
                <motion.div key={f.id} variants={fadeUp}
                  className="p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
                  style={{ background: dark, border: `1px solid ${navyBorder}` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors"
                    style={{ background: `hsl(var(--brand-gold) / 0.10)`, border: `1px solid hsl(var(--brand-gold) / 0.20)` }}>
                    <Icon size={20} style={{ color: gold }} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24" style={{ background: dark }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white font-black" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              <span>{loading_unloading.usecases_heading1}</span>{' '}
              <span style={{ WebkitTextStroke: `1.5px ${gold}`, color: 'transparent' }}>{loading_unloading.usecases_heading2}</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
              {loading_unloading.usecases_sub}
            </p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {loading_unloading.usecases.map(uc => (
              <motion.div key={uc.id} variants={fadeUp}
                className="p-6 rounded-2xl transition-all duration-300"
                style={{ background: navy, border: `1px solid ${navyBorder}` }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: gold }} />
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>{uc.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>{uc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 md:py-24" style={{ background: navy }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <h2 className="text-white font-black mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                <span>{loading_unloading.why_heading1}</span>{' '}
                <span style={{ WebkitTextStroke: `1.5px ${gold}`, color: 'transparent' }}>{loading_unloading.why_heading2}</span>
              </h2>
              <ul className="space-y-3 text-left">
                {loading_unloading.why_points.map(point => (
                  <li key={point.id} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: gold }} />
                    <span className="text-gray-400 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>{point.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: dark }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 className="text-white font-black mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              <span>{loading_unloading.cta_heading1}</span>{' '}
              <span style={{ WebkitTextStroke: `1.5px ${gold}`, color: 'transparent' }}>{loading_unloading.cta_heading2}</span>
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
              {loading_unloading.cta_desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918588806333?text=Hi%2C%20I%20need%20loading%20unloading%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-black text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: gold, color: textOnGold, fontFamily: "'Lato', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.background = goldHover)}
                onMouseLeave={e => (e.currentTarget.style.background = gold)}
              >
                <MessageCircle size={16} />
                <span>{loading_unloading.cta_whatsapp}</span>
              </a>
              <a
                href="tel:8588806333"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-black text-sm rounded-xl transition-all duration-300"
                style={{ border: `1px solid hsl(var(--brand-gold) / 0.40)`, color: gold, fontFamily: "'Lato', sans-serif" }}
              >
                <Phone size={16} />
                <span>{loading_unloading.cta_call}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
