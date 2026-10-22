import { motion } from 'motion/react';
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

const faqs = [
  {
    q: 'What transport services do you provide?',
    a: 'We provide Chota Hathi, Bolero Pickup, Fleet Transport, Warehouse, Loading & Unloading and Commercial Goods Transport Services across Delhi NCR and extended routes.',
  },
  {
    q: 'How can I book a vehicle?',
    a: 'You can contact us by phone or WhatsApp. Share your pickup location, drop location, goods details and preferred date, and our team will assist you with vehicle availability and quotation.',
  },
  {
    q: 'How is the freight calculated?',
    a: 'Freight depends on vehicle type, distance, goods/material, loading requirements and route. Please contact our team for a suitable quotation.',
  },
  {
    q: 'Do you provide warehouse services?',
    a: 'Yes. We provide warehouse and storage support from our Okhla Phase 2 location for business inventory, e-commerce stock, B2B goods and regular storage requirements.',
  },
  {
    q: 'Do you provide loading and unloading?',
    a: 'Yes. Loading and unloading support can be arranged based on the requirement and location.',
  },
  {
    q: 'Do you provide same-day delivery?',
    a: 'Same-day delivery may be available depending on vehicle availability, pickup location, route, distance and booking time. Please confirm with our team.',
  },
  {
    q: 'Do you provide outstation transportation?',
    a: 'Yes, extended and outstation routes may be available on request. Availability and freight depend on the route and vehicle requirement.',
  },
  {
    q: 'Do you provide shipment tracking?',
    a: 'Tracking or delivery updates can be provided based on the vehicle and transportation requirement. Please confirm the available tracking/update option at the time of booking.',
  },
  {
    q: 'Do you provide goods insurance?',
    a: 'Insurance requirements depend on the nature and value of the goods. Customers should discuss insurance requirements with our team before booking.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellation terms may vary depending on the vehicle, booking status and stage of dispatch. Please confirm the applicable terms with our team before cancellation.',
  },
  {
    q: 'Do you provide GST invoices?',
    a: 'Yes, we are GST registered (GSTIN: 07BHRPD1956R1ZK) and provide proper tax invoices for all services.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve all major areas across Delhi NCR — Delhi, Noida, Greater Noida, Gurgaon, Faridabad, Ghaziabad and surrounding locations. Extended and outstation routes are available on request.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="bg-[#0A1628] py-20 md:py-28">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-5">
              <HelpCircle size={14} className="text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">FAQ</span>
            </div>
            <h2
              className="text-white font-black leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              COMMON{' '}
              <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>QUESTIONS</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
              Everything you need to know before booking your transport service.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' as const }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  open === i
                    ? 'border-[#C9A84C]/40 bg-[#060D1A]'
                    : 'border-[#1E2A3A] bg-[#060D1A]/60 hover:border-[#C9A84C]/20'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span
                    className={`font-bold text-sm leading-snug transition-colors ${
                      open === i ? 'text-[#C9A84C]' : 'text-white'
                    }`}
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform duration-300 ${
                      open === i ? 'rotate-180 text-[#C9A84C]' : 'text-gray-600'
                    }`}
                  />
                </button>

                {open === i && (
                  <div className="px-6 pb-5">
                    <div className="h-px bg-[#1E2A3A] mb-4" />
                    <p
                      className="text-gray-400 text-sm leading-relaxed"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 p-6 bg-[#060D1A] border border-[#C9A84C]/20 rounded-2xl text-center"
          >
            <p className="text-gray-400 text-sm mb-4">Still have a question? We reply in minutes.</p>
            <a
              href="https://wa.me/918588888669?text=Hi%2C%20I%20have%20a%20question%20about%20your%20transport%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20"
            >
              <MessageCircle size={16} />
              Ask on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
