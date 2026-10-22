import { Helmet } from '@dr.pogodin/react-helmet';
import { lazy, Suspense } from 'react';

// Critical above-fold sections — loaded eagerly
import HeroSection from '@/components/home/HeroSection';
import TrustBadgesStrip from '@/components/home/TrustBadgesStrip';
import ServicesSection from '@/components/home/ServicesSection';

// Below-fold sections — lazy loaded to reduce initial JS bundle
const FastQuoteSection = lazy(() => import('@/components/home/FastQuoteSection'));
const CustomerTrustSection = lazy(() => import('@/components/home/CustomerTrustSection'));
const TrustSection = lazy(() => import('@/components/home/TrustSection'));
const HowItWorksSection = lazy(() => import('@/components/home/HowItWorksSection'));
const IndustriesSection = lazy(() => import('@/components/home/IndustriesSection'));
const FleetShowcaseSection = lazy(() => import('@/components/home/FleetShowcaseSection'));
const AboutSection = lazy(() => import('@/components/home/AboutSection'));
const GallerySection = lazy(() => import('@/components/home/GallerySection'));
const InstagramSection = lazy(() => import('@/components/home/InstagramSection'));
const CustomerSupportSection = lazy(() => import('@/components/home/CustomerSupportSection'));
const FAQSection = lazy(() => import('@/components/home/FAQSection'));
const PreFooterCTA = lazy(() => import('@/components/home/PreFooterCTA'));
const ContactSection = lazy(() => import('@/components/home/ContactSection'));

// Minimal skeleton shown while lazy sections load
function SectionSkeleton() {
  return <div className="w-full h-32 bg-[#0A1628] animate-pulse" aria-hidden="true" />;
}

const site = 'https://vstransport.in';
const canonicalUrl = site;
const ogImage = `${site}/airo-assets/images/pages/home/hero`;

const seoTitle = 'Transport Service in Delhi NCR | Chota Hathi, Bolero Pickup & Warehouse Service | VS Transport Service';
const seoDescription = 'VS Transport Service provides Chota Hathi, Bolero Pickup, Fleet Transport, Warehouse, Loading-Unloading and Commercial Goods Transport Services across Delhi NCR, Noida, Gurgaon, Faridabad and Ghaziabad. Safe, Reliable & Professional Transport Solutions.';

// All 20 target keywords woven into a natural keyword meta tag
const seoKeywords = [
  'Transport Service in Delhi NCR',
  'Chota Hathi Service Delhi',
  'Bolero Pickup Service Delhi',
  'Warehouse Service Delhi NCR',
  'Goods Transport Service Delhi',
  'Transport Service Okhla',
  'Logistics Service Delhi',
  'Pickup Vehicle Service Delhi',
  'Same Day Delivery Delhi',
  'Commercial Transport Service Delhi',
  'Loading Unloading Service Delhi',
  'Transport Service Noida',
  'Transport Service Gurgaon',
  'Transport Service Faridabad',
  'Transport Service Ghaziabad',
  'Warehouse Near Okhla',
  'Fleet Transport Service Delhi',
  'Mini Truck Booking Delhi',
  'Door to Door Transport Service',
].join(', ');

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      name: 'VS Transport Service',
      url: `${site}/`,
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${site}/blog?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': ['LocalBusiness', 'MovingCompany'],
      '@id': `${site}/#organization`,
      name: 'VS Transport Service',
      alternateName: 'VS Transport',
      description: seoDescription,
      url: `${site}/`,
      telephone: '+918588806333',
      email: 'info@vstransport.in',
      image: {
        '@type': 'ImageObject',
        url: ogImage,
        width: 1200,
        height: 630,
      },
      logo: {
        '@type': 'ImageObject',
        url: `${site}/airo-assets/images/logo/vs-transport-logo`,
        width: 160,
        height: 60,
      },
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Z-213, Okhla Phase 2, Harkesh Nagar',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110020',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.535500,
        longitude: 77.258800,
      },
      hasMap: 'https://maps.app.goo.gl/hgd9muHnpDghgxar8',
      areaServed: [
        { '@type': 'City', name: 'Delhi', sameAs: 'https://www.wikidata.org/wiki/Q1353' },
        { '@type': 'City', name: 'Noida', sameAs: 'https://www.wikidata.org/wiki/Q1513' },
        { '@type': 'City', name: 'Gurgaon', sameAs: 'https://www.wikidata.org/wiki/Q1513' },
        { '@type': 'City', name: 'Faridabad' },
        { '@type': 'City', name: 'Ghaziabad' },
        { '@type': 'City', name: 'Greater Noida' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday'],
          opens: '00:00',
          closes: '00:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '120',
        bestRating: '5',
        worstRating: '1',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Transport & Logistics Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Chota Hathi Service Delhi',
              url: `${site}/services/chota-hathi`,
              description: 'Mini truck transport for household shifting and local deliveries in Delhi NCR',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Bolero Pickup Service Delhi',
              url: `${site}/services/bolero-pickup`,
              description: 'Medium load pickup transport for factory and warehouse runs across Delhi NCR',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Warehouse Service Delhi NCR',
              url: `${site}/services/warehouse`,
              description: 'Short and long-term warehouse storage at Okhla Phase 2, New Delhi',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fleet Transport Service Delhi',
              url: `${site}/services/fleet-transport`,
              description: 'Full fleet logistics for large commercial shipments across Delhi NCR',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Loading Unloading Service Delhi',
              description: 'Professional loading and unloading labour with equipment across Delhi NCR',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Same Day Delivery Delhi',
              description: 'Same-day goods delivery across Delhi NCR when booked before noon',
            },
          },
        ],
      },
      sameAs: [
        'https://www.facebook.com/share/1B6R8dw6yq/',
        'https://www.instagram.com/vs_transport_service',
        'https://maps.app.goo.gl/hgd9muHnpDghgxar8',
        'https://g.page/r/CX1eWnhthnxfEBI/review',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+918588806333',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['Hindi', 'English'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+918588888669',
          contactType: 'sales',
          contactOption: 'WhatsApp',
          areaServed: 'IN',
          availableLanguage: ['Hindi', 'English'],
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${site}/#webpage`,
      url: `${site}/`,
      name: seoTitle,
      description: seoDescription,
      isPartOf: { '@id': `${site}/#website` },
      about: { '@id': `${site}/#organization` },
      datePublished: '2024-01-01',
      dateModified: '2026-06-28',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
        ],
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Geo targeting */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi NCR" />
        <meta name="geo.position" content="28.5355;77.2588" />
        <meta name="ICBM" content="28.5355, 77.2588" />

        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="VS Transport Service" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <HeroSection />
      {/* sr-only H1 for SEO — visible H1 rendered inside HeroSection */}
      <h1 className="sr-only">Transport Service in Delhi NCR | Chota Hathi, Bolero Pickup &amp; Warehouse Service | VS Transport Service</h1>
      <TrustBadgesStrip />
      <ServicesSection />
      <Suspense fallback={<SectionSkeleton />}>
        <FastQuoteSection />
        <CustomerTrustSection />
        <TrustSection />
        <HowItWorksSection />
        <IndustriesSection />
        <FleetShowcaseSection />
        <AboutSection />
        <GallerySection />
        <InstagramSection />
        <CustomerSupportSection />
        <FAQSection />
        <PreFooterCTA />
        <ContactSection />
      </Suspense>
    </>
  );
}
