import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you use our website or contact us, we may collect the following information:
• Name and contact details (phone number, email address)
• Pickup and drop location details
• Type of goods and service requirements
• Messages sent via our contact form or WhatsApp
We do not collect payment card information directly — all payments are handled through secure third-party channels.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information you provide to:
• Respond to your transport and logistics enquiries
• Provide quotes and book transport services
• Send service confirmations and updates
• Improve our website and services
• Comply with legal obligations
We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: '3. WhatsApp & Communication',
    content: `When you contact us via WhatsApp, your messages are subject to WhatsApp's own privacy policy. We use WhatsApp solely for business communication related to our transport services. We will not add you to broadcast lists without your consent.`,
  },
  {
    title: '4. Cookies',
    content: `Our website may use basic cookies to improve your browsing experience. These are small text files stored on your device. You can disable cookies in your browser settings, though this may affect some website functionality.`,
  },
  {
    title: '5. Data Security',
    content: `We take reasonable precautions to protect your personal information. However, no method of transmission over the internet is 100% secure. We encourage you to contact us only through our official channels listed on this website.`,
  },
  {
    title: '6. Third-Party Links',
    content: `Our website may contain links to third-party websites (such as Google Maps, WhatsApp, Facebook, Instagram). We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.`,
  },
  {
    title: '7. Your Rights',
    content: `You have the right to:
• Request access to the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data (subject to legal obligations)
To exercise these rights, contact us at info[at]vstransport.in or call +91 8588806333.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '9. Contact Us',
    content: `For any privacy-related questions or concerns, please contact:
VS Transport Service
Z-213, Okhla Phase 2, Harkesh Nagar, New Delhi – 110020
Email: info[at]vstransport.in
Phone: +91 8588806333`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | VS Transport Service</title>
        <meta name="description" content="Privacy Policy for VS Transport Service. Learn how we collect, use, and protect your personal information when you use our transport and logistics services." />
        <link rel="canonical" href="https://vstransport.in/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Privacy Policy | VS Transport Service" />
        <meta property="og:description" content="Privacy Policy for VS Transport Service. Learn how we collect, use, and protect your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vstransport.in/privacy-policy" />
        <meta property="og:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | VS Transport Service" />
        <meta name="twitter:description" content="Privacy Policy for VS Transport Service. Learn how we collect, use, and protect your personal information." />
        <meta name="twitter:image" content="https://vstransport.in/airo-assets/images/pages/home/hero" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': 'https://vstransport.in/privacy-policy#webpage',
          name: 'Privacy Policy – VS Transport Service',
          url: 'https://vstransport.in/privacy-policy',
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
              PRIVACY POLICY
            </h1>
            <p className="text-gray-500 text-sm mb-10">Last updated: May 28, 2026</p>

            <p className="text-gray-400 leading-relaxed mb-10" style={{ fontFamily: "'Lato', sans-serif" }}>
              VS Transport Service ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our transport and logistics services.
            </p>

            <div className="space-y-8">
              {sections.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
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
