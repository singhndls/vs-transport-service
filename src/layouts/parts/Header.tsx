import { Link, useLocation } from "react-router";
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import EmailLink from '@/components/ui/EmailLink';
const serviceLinks = [{
  href: '/services/chota-hathi',
  label: 'Chota Hathi Service'
}, {
  href: '/services/bolero-pickup',
  label: 'Bolero Pickup Service'
}, {
  href: '/services/warehouse',
  label: 'Warehouse Service'
}, {
  href: '/services/fleet-transport',
  label: 'Fleet Transport'
}, {
  href: '/services/delhi-ncr',
  label: 'Delhi NCR Transport'
}];
export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  const handleAnchor = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({
          behavior: 'smooth'
        });
      }, 50);
    }
  };
  const navItems = [{
    href: '/',
    label: 'Home',
    anchor: false
  }, {
    href: '#services',
    label: 'Services',
    anchor: true
  }, {
    href: '#about',
    label: 'About',
    anchor: true
  }, {
    href: '#trust',
    label: 'Why Us',
    anchor: true
  }, {
    href: '#contact',
    label: 'Contact',
    anchor: true
  }, {
    href: '/blog',
    label: 'Blog',
    anchor: false
  }];
  return <>
      {/* Top strip */}
      <div className="bg-[#C9A84C] text-[#0A1628] text-xs font-semibold py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>📍 Z-213, Okhla Phase 2, Harkesh Nagar, New Delhi – 110020</span>
          <div className="flex gap-6">
            <a href="tel:8588806333" className="hover:opacity-80 transition-opacity flex items-center gap-1">
              <Phone size={11} /> 8588806333
            </a>
            <EmailLink user="info" domain="vstransport.in" className="hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#060D1A]/95 backdrop-blur-md shadow-2xl border-b border-[#C9A84C]/20' : 'bg-[#060D1A]'}`}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/assets/1000667299.png" alt="VS Transport Service" className="h-14 w-auto object-contain shrink-0" />
              <div>
                <div className="font-black text-xl leading-none tracking-widest text-white" style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: '0.12em'
              }}>
                  VS TRANSPORT
                </div>
                <div className="text-[#C9A84C] text-[10px] tracking-[0.3em] font-semibold mt-0.5">
                  SERVICE
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => item.anchor ? <button key={item.href} onClick={() => handleAnchor(item.href)} className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-[#C9A84C] transition-colors tracking-wide">
                    {item.label}
                  </button> : <Link key={item.href} to={item.href} className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${location.pathname === item.href ? 'text-[#C9A84C]' : 'text-gray-300 hover:text-[#C9A84C]'}`}>
                    {item.label}
                  </Link>)}

              {/* Services dropdown */}
              <div ref={servicesRef} className="relative">
                <button onClick={() => setServicesOpen(!servicesOpen)} className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${location.pathname.startsWith('/services') ? 'text-[#C9A84C]' : 'text-gray-300 hover:text-[#C9A84C]'}`}>
                  Services
                  <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && <div className="absolute top-full left-0 mt-2 w-52 bg-[#0A1628] border border-[#1E2A3A] rounded-xl shadow-2xl overflow-hidden z-50">
                    {serviceLinks.map(s => <Link key={s.href} to={s.href} onClick={() => setServicesOpen(false)} className={`block px-4 py-3 text-sm font-medium transition-colors border-b border-[#1E2A3A] last:border-0 ${location.pathname === s.href ? 'text-[#C9A84C] bg-[#C9A84C]/8' : 'text-gray-300 hover:text-[#C9A84C] hover:bg-[#C9A84C]/5'}`}>
                        {s.label}
                      </Link>)}
                  </div>}
              </div>
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:8588806333" className="flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/50 text-[#C9A84C] text-sm font-semibold rounded-lg hover:bg-[#C9A84C]/10 transition-colors">
                <Phone size={14} />
                Call Now
              </a>
              <a href="https://wa.me/918588888669" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#C9A84C] text-[#0A1628] text-sm font-black rounded-lg hover:bg-[#E2C06A] transition-colors shadow-lg shadow-[#C9A84C]/20">
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-white hover:text-[#C9A84C] transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && <div className="lg:hidden border-t border-[#C9A84C]/20 py-4">
              <nav className="flex flex-col gap-1 mb-4">
                {navItems.map(item => item.anchor ? <button key={item.href} onClick={() => handleAnchor(item.href)} className="text-left px-3 py-3 text-sm font-semibold text-gray-300 hover:text-[#C9A84C] hover:bg-white/5 rounded-lg transition-colors">
                      {item.label}
                    </button> : <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-3 text-sm font-semibold text-gray-300 hover:text-[#C9A84C] hover:bg-white/5 rounded-lg transition-colors">
                      {item.label}
                    </Link>)}
                {/* Mobile services submenu */}
                <div className="px-3 pt-1 pb-2">
                  <div className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-2 pl-1">Services</div>
                  {serviceLinks.map(s => <Link key={s.href} to={s.href} onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 py-2 text-sm text-gray-400 hover:text-[#C9A84C] transition-colors border-l border-[#1E2A3A] hover:border-[#C9A84C]/40 mb-1">
                      {s.label}
                    </Link>)}
                </div>
              </nav>
              <div className="flex gap-3 px-3">
                <a href="tel:8588806333" className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#C9A84C]/50 text-[#C9A84C] text-sm font-bold rounded-lg">
                  <Phone size={14} /> Call
                </a>
                <a href="https://wa.me/918588888669" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#C9A84C] text-[#0A1628] text-sm font-black rounded-lg">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>}
        </div>
      </header>
    </>;
}
