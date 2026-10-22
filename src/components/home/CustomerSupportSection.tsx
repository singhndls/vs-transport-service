import { motion } from 'motion/react';
import { Phone, Mail, Globe, Shield, HeadphonesIcon, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import EmailLink, { EmailText } from '@/components/ui/EmailLink';

const escalationSteps = [
  {
    step: '01',
    icon: HeadphonesIcon,
    title: 'Contact Support Team',
    desc: 'Reach our customer support team for general inquiries, booking issues, or service-related questions. WhatsApp support available 24/7. Office hours: Mon–Sat, 9 AM–5 PM.',
    color: '#C9A84C',
  },
  {
    step: '02',
    icon: AlertCircle,
    title: 'Unresolved? Escalate',
    desc: 'If your concern remains unresolved within 24 hours, escalate directly to our Head of Operations for priority handling.',
    color: '#E2C06A',
  },
  {
    step: '03',
    icon: CheckCircle2,
    title: 'Prompt Resolution Support',
    desc: 'We are committed to addressing every concern promptly and professionally. Your satisfaction is our top priority.',
    color: '#C9A84C',
  },
];

export default function CustomerSupportSection() {
  return (
    <section id="support" className="relative bg-[#0A1628] py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#1B3A6B]/40 rounded-full blur-[80px]" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="container mx-auto px-4 relative">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-5">
            <HeadphonesIcon size={14} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">We're Here For You</span>
          </div>
          <h2
            className="text-white font-black leading-tight mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.03em' }}
          >
            CUSTOMER SUPPORT &{' '}
            <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>ESCALATION</span>
          </h2>
          <p
            className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            At VS Transport Service, customer satisfaction is our top priority. If you have any concerns,
            complaints, service-related issues, or require urgent assistance, our support team is always
            available to help.
          </p>
        </motion.div>

        {/* Escalation steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {escalationSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' as const }}
              className="relative group"
            >
              <div className="h-full p-6 bg-[#060D1A] border border-[#1E2A3A] group-hover:border-[#C9A84C]/30 rounded-2xl transition-all duration-300">
                {/* Step number */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-xl flex items-center justify-center">
                    <item.icon size={20} className="text-[#C9A84C]" />
                  </div>
                  <span
                    className="text-4xl font-black leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#C9A84C', opacity: 0.15 }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3
                  className="text-white font-black text-base mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {item.desc}
                </p>
              </div>

              {/* Arrow connector (desktop) */}
              {i < escalationSteps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                  <div className="w-6 h-6 bg-[#0A1628] border border-[#C9A84C]/30 rounded-full flex items-center justify-center">
                    <ArrowRight size={12} className="text-[#C9A84C]" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Main support + escalation cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* General Support */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="p-7 bg-[#060D1A] border border-[#1E2A3A] hover:border-[#C9A84C]/25 rounded-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-xl flex items-center justify-center">
                <HeadphonesIcon size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <h3
                  className="text-white font-black text-base"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                >
                  GENERAL SUPPORT
                </h3>
                <p className="text-gray-600 text-xs">For bookings, queries & service issues</p>
              </div>
            </div>

            {/* Contact person */}
            <div className="flex items-center gap-3 mb-4 p-3.5 bg-[#0A1628] border border-[#1E2A3A] rounded-xl">
              <div className="w-10 h-10 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-[#C9A84C] font-black text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>KK</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">Kunal Kishor Singh</div>
                <div className="text-[#C9A84C] text-[10px] font-semibold tracking-wide uppercase">Operations Manager</div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:8588806333"
                className="group flex items-center gap-3 p-3.5 bg-[#0A1628] border border-[#1E2A3A] hover:border-[#C9A84C]/30 rounded-xl transition-all duration-200"
              >
                <div className="w-8 h-8 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#C9A84C]" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-widest">Phone</div>
                  <div className="text-white font-bold text-sm">+91 8588806333</div>
                </div>
                <ArrowRight size={14} className="text-gray-600 group-hover:text-[#C9A84C] ml-auto transition-colors" />
              </a>

              <EmailLink
                user="Operations"
                domain="vstransport.in"
                className="group flex items-center gap-3 p-3.5 bg-[#0A1628] border border-[#1E2A3A] hover:border-[#C9A84C]/30 rounded-xl transition-all duration-200"
              >
                <div className="w-8 h-8 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#C9A84C]" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-widest">Email</div>
                  <div className="text-white font-bold text-sm"><EmailText user="Operations" domain="vstransport.in" /></div>
                </div>
                <ArrowRight size={14} className="text-gray-600 group-hover:text-[#C9A84C] ml-auto transition-colors" />
              </EmailLink>

              <a
                href="https://vstransport.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3.5 bg-[#0A1628] border border-[#1E2A3A] hover:border-[#C9A84C]/30 rounded-xl transition-all duration-200"
              >
                <div className="w-8 h-8 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Globe size={14} className="text-[#C9A84C]" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-widest">Website</div>
                  <div className="text-white font-bold text-sm">www.vstransport.in</div>
                </div>
                <ArrowRight size={14} className="text-gray-600 group-hover:text-[#C9A84C] ml-auto transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Escalation Contact — R. K. Singh */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="relative p-7 bg-[#060D1A] border border-[#C9A84C]/25 rounded-2xl overflow-hidden"
          >
            {/* Gold corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A84C]/6 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

            <div className="flex items-center gap-3 mb-5 relative">
              <div className="w-10 h-10 bg-[#C9A84C]/15 border border-[#C9A84C]/35 rounded-xl flex items-center justify-center">
                <Shield size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className="text-white font-black text-base"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                  >
                    ESCALATION CONTACT
                  </h3>
                  <span className="px-2 py-0.5 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-full text-[#C9A84C] text-[9px] font-bold tracking-widest uppercase">
                    Priority
                  </span>
                </div>
                <p className="text-gray-600 text-xs">For unresolved issues requiring management attention</p>
              </div>
            </div>

            {/* Person card */}
            <div className="relative p-5 bg-gradient-to-br from-[#0A1628] to-[#060D1A] border border-[#C9A84C]/20 rounded-xl mb-4">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 border-2 border-[#C9A84C]/40 rounded-2xl flex items-center justify-center shrink-0">
                  <span
                    className="text-[#C9A84C] font-black text-xl"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    RK
                  </span>
                </div>
                <div>
                  <div className="text-[#C9A84C] text-[10px] font-bold tracking-widest uppercase mb-0.5">Head of Operations</div>
                  <div
                    className="text-white font-black text-lg leading-tight"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                  >
                    R. K. SINGH
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">VS Transport Service</div>
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-2.5 relative">
              <EmailLink
                user="info"
                domain="vstransport.in"
                className="group flex items-center gap-3 p-3 bg-[#0A1628] border border-[#1E2A3A] hover:border-[#C9A84C]/40 rounded-xl transition-all duration-200"
              >
                <Mail size={14} className="text-[#C9A84C] shrink-0" />
                <EmailText user="info" domain="vstransport.in" className="text-gray-300 text-sm group-hover:text-white transition-colors" />
              </EmailLink>
              <a
                href="https://vstransport.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 bg-[#0A1628] border border-[#1E2A3A] hover:border-[#C9A84C]/40 rounded-xl transition-all duration-200"
              >
                <Globe size={14} className="text-[#C9A84C] shrink-0" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">vstransport.in</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom commitment strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-5 bg-[#060D1A] border border-[#1E2A3A] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-green-400 shrink-0" />
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
              We are committed to providing{' '}
              <span className="text-white font-semibold">prompt, reliable, and professional support</span>{' '}
              to all our customers.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-bold tracking-wide uppercase">WhatsApp Support 24/7</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  );
}
