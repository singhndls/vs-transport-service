import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from "react-router";
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';
import Preloader from '@/components/ui/Preloader';
import LiveInquiryNotification from '@/components/ui/LiveInquiryNotification';
import StickyMobileBar from '@/components/ui/StickyMobileBar';
interface RootLayoutProps {
  children: ReactElement;
}
export default function RootLayout({
  children
}: RootLayoutProps) {
  const [showLabel, setShowLabel] = useState(true);
  useEffect(() => {
    const hide = setTimeout(() => setShowLabel(false), 4000);
    const interval = setInterval(() => {
      setShowLabel(true);
      setTimeout(() => setShowLabel(false), 3000);
    }, 12000);
    return () => {
      clearTimeout(hide);
      clearInterval(interval);
    };
  }, []);
  return <Website>
      <Helmet>
        <title>VS Transport Service – Logistics & Transport Delhi NCR</title>
        <meta name="description" content="VS Transport Service – trusted logistics partner in Delhi NCR. Warehouse, Chota Hathi, Bolero Pickup, Fleet Transport. GST registered. Call +91 8588806333." />
      </Helmet>
      <Preloader />
      <ScrollRestoration />
      <Header />
      {children}
      <Footer />

      {/* Live inquiry notifications */}
      <LiveInquiryNotification />

      {/* Sticky mobile bottom bar (Call / WhatsApp / Quote) */}
      <StickyMobileBar />

      {/* Animated floating WhatsApp button — desktop only */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-2">
        <AnimatePresence>
          {showLabel && <motion.div initial={{
          opacity: 0,
          x: 20,
          scale: 0.9
        }} animate={{
          opacity: 1,
          x: 0,
          scale: 1
        }} exit={{
          opacity: 0,
          x: 20,
          scale: 0.9
        }} transition={{
          duration: 0.3
        }} className="bg-white text-gray-900 text-xs font-bold px-3 py-2 rounded-xl shadow-xl whitespace-nowrap">
              Chat With Us Instantly 💬
            </motion.div>}
        </AnimatePresence>

        <motion.a href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20transport%20service" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" whileHover={{
        scale: 1.1
      }} whileTap={{
        scale: 0.95
      }} className="relative flex items-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold text-sm rounded-full shadow-2xl shadow-green-500/40 transition-colors duration-200">
          <span className="absolute inset-0 rounded-full">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
          </span>
          <MessageCircle size={20} className="relative z-10" />
          <span className="relative z-10">WhatsApp</span>
        </motion.a>
      </div>
    </Website>;
}
