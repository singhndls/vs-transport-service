import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By using the VS Transport Service website or engaging our transport and logistics services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.`,
  },
  {
    title: '2. Services Provided',
    content: `VS Transport Service provides transport and logistics services including:
• Chota Hathi (mini truck) transport
• Bolero Pickup transport
• Warehouse storage services
• Fleet transport solutions
• Loading and unloading services
Services are subject to vehicle availability and operational capacity at the time of booking.`,
  },
  {
    title: '3. Booking & Confirmation',
    content: `• All bookings must be confirmed in writing (WhatsApp message or email) before the service date
• A booking is only confirmed once you receive a confirmation from our team
• We reserve the right to decline bookings at our discretion
• Rates quoted are valid for 24 hours unless otherwise stated`,
  },
  {
    title: '4. Pricing & Payment',
    content: `• All prices are quoted in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise
• GST invoices are available on request
• Payment terms will be agreed at the time of booking
• Additional charges may apply for waiting time beyond 30 minutes, extra floors (no lift), or route changes after departure`,
  },
  {
    title: '5. Goods & Liability',
    content: `• Customers are responsible for proper packing of goods before transport
• VS Transport Service will handle goods with reasonable care but is not liable for damage resulting from improper packing
• We are not liable for loss or damage to fragile, perishable, or high-value items unless transit insurance has been arranged
• Claims for damaged goods must be reported within 24 hours of delivery`,
  },
  {
    title: '6. Cancellation Policy',
    content: `• Cancellations made more than 2 hours before the scheduled pickup: No charge
• Cancellations made within 2 hours of scheduled pickup: A cancellation fee may apply
• No-shows (customer not available at pickup time): Full booking charge applies
• We reserve the right to cancel bookings due to vehicle breakdown, extreme weather, or force majeure events`,
  },
  {
    title: '7. Prohibited Goods',
    content: `We do not transport:
• Illegal or contraband goods
• Hazardous materials, explosives, or flammable liquids
• Live animals
• Human remains
• Any goods prohibited under Indian law
Customers found transporting prohibited goods will have their service terminated immediately without refund.`,
  },
  {
    title: '8. Service Area',
    content: `Our primary service area is Delhi NCR (Delhi, Noida, Gurgaon, Faridabad, Ghaziabad) and extended zones including Haryana, Rajasthan, Uttarakhand, and Uttar Pradesh. Services outside these areas are subject to prior confirmation.`,
  },
  {
    title: '9. Intellectual Property',
    content: `All content on this website — including text, images, logos, and design — is the property of VS Transport Service and may not be reproduced without written permission.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms and Conditions are governed by the laws of India. Any disputes arising from the use of our services shall be subject to the jurisdiction of courts in New Delhi.`,
  },
  {
    title: '11. Contact',
    content: `For any questions about these Terms, contact us at:
VS Transport Service
Z-213, Okhla Phase 2, Harkesh Nagar, New Delhi – 110020
Email: info[at]vstransport.in | Phone: +91 8588806333`,
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | VS Transport Service</title>
        <meta name="description" content="Terms and Conditions for VS Transport Service. Read our booking, payment, liability, and cancellation policies for transport and logistics services." />
        <link rel="canonical" href="https://vstransport.in/terms" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Terms & Conditions | VS Transport Service" />
        <meta property="og:description" content="Terms and Conditions for VS Transport Service. Read our booking, payment, liability, and cancellation policies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vstransport.in/terms" />
        <meta property="og:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions | VS Transport Service" />
        <meta name="twitter:description" content="Terms and Conditions for VS Transport Service. Read our booking, payment, liability, and cancellation policies." />
        <meta name="twitter:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': 'https://vstransport.in/terms#webpage',
          name: 'Terms & Conditions – VS Transport Service',
          url: 'https://vstransport.in/terms',
          isPartOf: { '@id': 'https://vstransport.in/#website' },
          about: { '@id': 'https://vstransport.in/#organization' },
        })}</script>
      </Helmet>

      <section className="bg-[#060D1A] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-6">
              <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Legal</span>
            </div>
            <h1 className="text-white font-black mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              TERMS & CONDITIONS
            </h1>
            <p className="text-gray-500 text-sm mb-10">Last updated: May 28, 2026</p>

            <p className="text-gray-400 leading-relaxed mb-10" style={{ fontFamily: "'Lato', sans-serif" }}>
              Please read these Terms and Conditions carefully before using VS Transport Service's website or engaging our services. These terms govern your use of our services and constitute a legally binding agreement.
            </p>

            <div className="space-y-8">
              {sections.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="p-6 bg-[#0A1628] border border-[#1E2A3A] rounded-2xl">
                  <h2 className="text-[#C9A84C] font-bold text-base mb-3">{s.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line" style={{ fontFamily: "'Lato', sans-serif" }}>{s.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
