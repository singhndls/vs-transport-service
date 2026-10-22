import { motion } from 'motion/react';
import { PhoneCall, FileText, CheckCircle2, Truck } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Contact Us',
    desc: 'Share your pickup location, drop location, goods details and preferred date. Call, WhatsApp or fill the quote form.',
    color: '#C9A84C',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Get a Quote',
    desc: 'Our team reviews your requirement and provides a suitable transport quotation. No hidden charges.',
    color: '#C9A84C',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'Confirm Booking',
    desc: 'Once the requirement and freight are confirmed, we schedule the vehicle at your preferred date.',
    color: '#C9A84C',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Pickup & Delivery',
    desc: 'Our vehicle reaches the pickup location and the goods are transported to the destination safely.',
    color: '#C9A84C',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function HowItWorksSection() {
  return (
    <section className="bg-[#060D1A] py-20 md:py-28 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-5">
            <Truck size={14} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Our Process</span>
          </div>
          <h2
            className="text-white font-black leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            HOW IT{' '}
            <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>WORKS</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
            Booking your transport with VS Transport Service is simple, fast, and completely transparent.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Step number + icon */}
              <div className="relative mb-6">
                {/* Outer ring */}
                <div className="w-20 h-20 rounded-full border-2 border-[#C9A84C]/20 bg-[#0A1628] flex items-center justify-center group-hover:border-[#C9A84C]/60 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(201,168,76,0.15)]">
                  <step.icon size={28} className="text-[#C9A84C]" />
                </div>
                {/* Step badge */}
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#C9A84C] flex items-center justify-center"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="text-[#060D1A] text-xs font-black">{i + 1}</span>
                </div>
              </div>

              <h3
                className="text-white font-black text-lg mb-3 group-hover:text-[#C9A84C] transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
              >
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/918588806333?text=Hi%2C%20I%20need%20a%20transport%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C9A84C] hover:bg-[#E2C06A] text-[#060D1A] font-black text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#C9A84C]/20"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Get a Free Quote on WhatsApp
          </a>
          <a
            href="tel:8588806333"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#C9A84C] font-black text-sm rounded-xl transition-all duration-300 hover:bg-[#C9A84C]/8"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <PhoneCall size={15} />
            Call Now: +91 8588806333
          </a>
        </motion.div>
      </div>
    </section>
  );
}
