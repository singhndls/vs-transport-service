import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle, ArrowRight, Star } from 'lucide-react';
import EmailLink from '@/components/ui/EmailLink';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const services = [{
    label: 'Warehouse Service',
    href: '/services/warehouse'
  }, {
    label: 'Chota Hathi Service',
    href: '/services/chota-hathi'
  }, {
    label: 'Bolero Pickup Service',
    href: '/services/bolero-pickup'
  }, {
    label: 'Fleet Transport Service',
    href: '/services/fleet-transport'
  }, {
    label: 'Loading & Unloading Service',
    href: '/services/loading-unloading'
  }, {
    label: 'Local & Commercial Goods Transport',
    href: '/services/delhi-ncr'
  }];
  const quickLinks = [{
    label: 'Home',
    href: '/'
  }, {
    label: 'Blog',
    href: '/blog'
  }, {
    label: 'Privacy Policy',
    href: '/privacy-policy'
  }, {
    label: 'Terms & Conditions',
    href: '/terms'
  }];
  return <footer className="bg-[#060D1A] text-white border-t border-[#C9A84C]/20">
      {/* Trust bar */}
      <div className="bg-[#0A1628] border-b border-[#1E2A3A]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['GST Registered', 'MSME Registered', 'Safe Transport', 'On-Time Delivery', 'WhatsApp Support 24/7'].map(item => <div key={item} className="flex items-center gap-1.5">
                <span className="text-[#C9A84C] font-bold text-sm">✔</span>
                <span className="text-gray-300 text-xs font-medium whitespace-nowrap">{item}</span>
              </div>)}
          </div>
        </div>
      </div>

      {/* Gold divider line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/assets/1000667299.png" alt="VS Transport Service" className="h-14 w-auto object-contain shrink-0" />
              <div>
                <div className="font-black text-lg leading-none text-white tracking-widest" style={{
                fontFamily: "'Bebas Neue', sans-serif"
              }}>
                  VS TRANSPORT
                </div>
                <div className="text-[#C9A84C] text-[9px] tracking-[0.3em] font-semibold mt-0.5">
                  SERVICE
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Delhi NCR based transport and logistics service provider. Safe, reliable and professional transport solutions.
            </p>
            <p className="text-xs font-semibold tracking-widest mb-6" style={{ color: 'hsl(var(--brand-gold))' }}>SAFE • RELIABLE • ON TIME</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1B6R8dw6yq/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#C9A84C]/30 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 rounded-lg flex items-center justify-center transition-all" aria-label="Facebook">
                <Facebook size={15} className="text-[#C9A84C]" />
              </a>
              <a href="https://www.instagram.com/vs_transport_service" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#C9A84C]/30 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 rounded-lg flex items-center justify-center transition-all" aria-label="Instagram">
                <Instagram size={15} className="text-[#C9A84C]" />
              </a>
              <a href="https://wa.me/918588888669" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#C9A84C]/30 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 rounded-lg flex items-center justify-center transition-all" aria-label="WhatsApp">
                <MessageCircle size={15} className="text-[#C9A84C]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#C9A84C] font-black text-sm tracking-widest uppercase mb-5" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1rem',
            letterSpacing: '0.15em'
          }}>
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map(s => <li key={s.label}>
                  <Link to={s.href} className="flex items-center gap-2 text-gray-400 hover:text-[#C9A84C] transition-colors text-sm group">
                    <ArrowRight size={12} className="text-[#C9A84C]/50 group-hover:text-[#C9A84C] transition-colors" />
                    {s.label}
                  </Link>
                </li>)}
            </ul>
            <h3 className="text-[#C9A84C] font-black text-sm tracking-widest uppercase mt-7 mb-4" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1rem',
            letterSpacing: '0.15em'
          }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(l => <li key={l.label}>
                  <Link to={l.href} className="flex items-center gap-2 text-gray-400 hover:text-[#C9A84C] transition-colors text-sm group">
                    <ArrowRight size={12} className="text-[#C9A84C]/50 group-hover:text-[#C9A84C] transition-colors" />
                    {l.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C9A84C] font-black text-sm tracking-widest uppercase mb-5" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1rem',
            letterSpacing: '0.15em'
          }}>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Z-213, Okhla Phase 2, Harkesh Nagar,<br />New Delhi – 110020<br />
                  <span className="text-gray-500 text-xs">Near Okhla Metro Station Parking</span>
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={15} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <div className="text-sm space-y-1">
                  <a href="tel:8588888669" className="block text-gray-400 hover:text-[#C9A84C] transition-colors">+91 8588888669</a>
                  <a href="tel:8588806333" className="block text-gray-400 hover:text-[#C9A84C] transition-colors">+91 8588806333</a>
                  <a href="tel:01169268799" className="block text-gray-400 hover:text-[#C9A84C] transition-colors">011-69268799 (Office)</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="text-[#C9A84C] shrink-0" />
                <EmailLink user="info" domain="vstransport.in" className="text-gray-400 hover:text-[#C9A84C] transition-colors text-sm" />
              </li>
            </ul>
          </div>

          {/* Hours + CTA */}
          <div>
            <h3 className="text-[#C9A84C] font-black text-sm tracking-widest uppercase mb-5" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1rem',
            letterSpacing: '0.15em'
          }}>
              Business Hours
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li className="flex items-center gap-2">
                <Clock size={13} className="text-[#C9A84C] shrink-0" />
                <span>Mon – Sat: 9:00 AM – 5:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={13} className="text-gray-600 shrink-0" />
                <span className="text-gray-600">Sunday: Closed</span>
              </li>
            </ul>

            {/* Google Review button */}
            <a href="https://g.page/r/CX1eWnhthnxfEBI/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-3 px-4 py-2.5 border border-yellow-500/40 hover:border-yellow-500/70 bg-yellow-500/5 hover:bg-yellow-500/10 text-yellow-400 text-xs font-bold rounded-xl transition-all duration-200 w-full justify-center">
              <Star size={12} className="fill-yellow-400" />
              Rate Us on Google
            </a>

            {/* Google Business Profile */}
            <a href="https://maps.app.goo.gl/hgd9muHnpDghgxar8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-4 px-4 py-2.5 border border-[#C9A84C]/30 hover:border-[#C9A84C]/60 bg-[#C9A84C]/5 hover:bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold rounded-xl transition-all duration-200 w-full justify-center">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              View on Google Maps
            </a>
            <div className="mt-4 p-4 border border-[#C9A84C]/20 rounded-xl bg-[#C9A84C]/5">
              <p className="text-xs text-gray-400 mb-3">Need immediate assistance?</p>
              <a href="https://wa.me/918588888669" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#C9A84C] text-[#0A1628] text-sm font-black rounded-lg hover:bg-[#E2C06A] transition-colors">
                <MessageCircle size={14} />
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Registration details bar */}
      <div className="border-t border-[#1E2A3A]">
        <div className="container mx-auto px-4 py-3 flex flex-wrap justify-center gap-x-6 gap-y-1 text-[11px] text-gray-600">
          <span><span className="text-gray-500 font-semibold">GSTIN:</span> 07BHRPD1956R1ZK</span>
          <span className="hidden sm:inline text-[#1E2A3A]">|</span>
          <span><span className="text-gray-500 font-semibold">MSME Reg. No.:</span> UDYAM-DL-08-0064982</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C9A84C]/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>© {currentYear} VS Transport Service – All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#C9A84C] transition-colors">Terms & Conditions</Link>
            <span>Serving Delhi NCR with Pride</span>
          </div>
        </div>
      </div>
    </footer>;
}
