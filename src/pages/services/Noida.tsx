import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { MapPin, MessageCircle, Phone, ArrowRight, Truck, Clock, Shield, IndianRupee, CheckCircle2, Route } from 'lucide-react';
import { Link } from "react-router";
import { noida } from 'virtual:content';
const site = 'https://vstransport.in';
const pageUrl = `${site}/services/noida`;
const featureIconMap: Record<string, React.ElementType> = {
  f1: Truck, f2: Route, f3: Clock, f4: Shield, f5: IndianRupee, f6: MapPin,
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const
    }
  }
};
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [{
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: 'Transport Service in Noida',
    description: 'Reliable transport and logistics service in Noida. Chota Hathi, Bolero Pickup, fleet transport, and same-day delivery across all Noida sectors and Greater Noida.',
    url: pageUrl,
    provider: {
      '@id': `${site}/#organization`
    },
    areaServed: [{
      '@type': 'City',
      name: 'Noida'
    }, {
      '@type': 'City',
      name: 'Greater Noida'
    }, {
      '@type': 'Place',
      name: 'Noida Extension'
    }],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      priceRange: '₹₹'
    }
  }, {
    '@type': 'BreadcrumbList',
    itemListElement: [{
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${site}/`
    }, {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: `${site}/#services`
    }, {
      '@type': 'ListItem',
      position: 3,
      name: 'Transport Service Noida',
      item: pageUrl
    }]
  }]
};
export default function NoidaPage() {
  return <>
      <Helmet>
        <title>Transport Service in Noida | Chota Hathi & Bolero Pickup | VS Transport Service</title>
        <meta name="description" content="VS Transport Service provides Chota Hathi, Bolero Pickup, and fleet transport in Noida. Daily Delhi–Noida runs, same-day delivery, all sectors covered. Call +91 8588806333." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Transport Service in Noida | VS Transport Service" />
        <meta property="og:description" content="Reliable transport in Noida — Chota Hathi, Bolero Pickup, fleet trucks. Daily Delhi–Noida runs, all sectors covered. Call now." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${site}/airo-assets/images/pages/home/hero`} />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Noida, Uttar Pradesh, India" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transport Service in Noida | VS Transport Service" />
        <meta name="twitter:description" content="Reliable transport in Noida. Call +91 8588806333." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-[#060D1A] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
        <div className="container mx-auto px-4 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
              <ArrowRight size={10} />
              <span className="text-gray-500">Services</span>
              <ArrowRight size={10} />
              <span className="text-[#C9A84C]">Transport in Noida</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-6">
              <MapPin size={13} className="text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">{noida.hero.eyebrow}</span>
            </div>

            <h1 className="text-white font-black leading-tight mb-5" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)'
          }}>
              <span>{noida.hero.headline}</span>{' '}
              <span style={{
              WebkitTextStroke: '2px #C9A84C',
              color: 'transparent'
            }}>{noida.hero.headlineAccent}</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl" style={{
            fontFamily: "'Lato', sans-serif"
          }}>
              {noida.hero.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20transport%20service%20in%20Noida" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20" style={{
              fontFamily: "'Lato', sans-serif"
            }}>
                <MessageCircle size={16} />
                Get Free Quote on WhatsApp
              </a>
              <a href="tel:8588806333" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] font-black text-sm rounded-xl transition-all duration-300 hover:bg-[#C9A84C]/8" style={{
              fontFamily: "'Lato', sans-serif"
            }}>
                <Phone size={16} />
                Call: +91 8588806333
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0A1628] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
            <h2 className="text-white font-black" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)'
          }}>
              OUR SERVICES IN <span style={{
              WebkitTextStroke: '1.5px #C9A84C',
              color: 'transparent'
            }}>NOIDA</span>
            </h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {noida.features.map(f => {
              const Icon = featureIconMap[f.id] ?? Truck;
              return (
                <motion.div key={f.id} variants={fadeUp} className="p-6 bg-[#060D1A] border border-[#1E2A3A] hover:border-[#C9A84C]/40 rounded-2xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/15 transition-colors">
                    <Icon size={20} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2" style={{
                fontFamily: "'Lato', sans-serif"
              }}>{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{
                fontFamily: "'Lato', sans-serif"
              }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why + Areas */}
      <section className="bg-[#060D1A] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-white font-black mb-6" style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)'
            }}>
                <span>{noida.whySection.headline}</span>{' '}
                <span style={{
                WebkitTextStroke: '1.5px #C9A84C',
                color: 'transparent'
              }}>{noida.whySection.headlineAccent}</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8" style={{
              fontFamily: "'Lato', sans-serif"
            }}>
                {noida.whySection.body}
              </p>
              <ul className="space-y-3">
                {noida.whyPoints.map(point => <li key={point.id} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm" style={{
                  fontFamily: "'Lato', sans-serif"
                }}>{point.text}</span>
                  </li>)}
              </ul>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="p-8 bg-[#0A1628] border border-[#C9A84C]/20 rounded-2xl">
              <h3 className="text-[#C9A84C] font-black mb-5" style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.4rem',
              letterSpacing: '0.05em'
            }}>
                AREAS WE COVER IN NOIDA
              </h3>
              <div className="flex flex-wrap gap-2">
                {noida.areas.map(area => <span key={area.id} className="px-3 py-1.5 bg-[#060D1A] border border-[#1E2A3A] text-gray-400 text-xs rounded-lg" style={{
                fontFamily: "'Lato', sans-serif"
              }}>{area.name}</span>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-white font-black mb-4" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)'
          }}>
              <span>{noida.cta.headline}</span>{' '}
              <span style={{
              WebkitTextStroke: '1.5px #C9A84C',
              color: 'transparent'
            }}>{noida.cta.headlineAccent}</span>
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto" style={{
            fontFamily: "'Lato', sans-serif"
          }}>
              {noida.cta.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20transport%20in%20Noida" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20" style={{
              fontFamily: "'Lato', sans-serif"
            }}>
                <MessageCircle size={16} />WhatsApp Now
              </a>
              <a href="tel:8588806333" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] font-black text-sm rounded-xl transition-all duration-300 hover:bg-[#C9A84C]/8" style={{
              fontFamily: "'Lato', sans-serif"
            }}>
                <Phone size={16} />Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
}
