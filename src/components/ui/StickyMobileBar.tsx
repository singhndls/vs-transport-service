import { motion } from 'motion/react';
import { Phone, MessageCircle, Zap } from 'lucide-react';
import { useState } from 'react';
import RequestCallbackWidget from './RequestCallbackWidget';

/**
 * Sticky bottom inquiry bar — mobile only (hidden md+).
 * Shows: Call Now | WhatsApp | Get Quote
 * Sits above the system navigation bar with safe-area padding.
 */
export default function StickyMobileBar() {
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <>
      <RequestCallbackWidget open={callbackOpen} onClose={() => setCallbackOpen(false)} />

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5, ease: 'easeOut' as const }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-[100] pb-safe"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {/* Gradient fade above bar */}
        <div className="h-6 bg-gradient-to-t from-[#060D1A]/80 to-transparent pointer-events-none" />

        <div className="bg-[#060D1A]/95 backdrop-blur-md border-t border-[#C9A84C]/20 px-3 py-2.5 flex items-center gap-2">
          {/* Call Now */}
          <a
            href="tel:8588806333"
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl bg-[#0A1628] border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 active:scale-95 transition-all"
          >
            <Phone size={16} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-bold tracking-wide">CALL</span>
          </a>

          {/* WhatsApp — primary, larger */}
          <a
            href="https://wa.me/918588888669?text=Hi%2C%20I%20need%20transport%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.6] flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 active:scale-95 transition-all shadow-lg shadow-green-500/30"
          >
            <MessageCircle size={16} className="text-white" />
            <span className="text-white text-xs font-black tracking-wide">WHATSAPP</span>
          </a>

          {/* Get Quote */}
          <button
            onClick={() => setCallbackOpen(true)}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/30 hover:bg-[#C9A84C]/25 active:scale-95 transition-all"
          >
            <Zap size={16} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-bold tracking-wide">QUOTE</span>
          </button>
        </div>
      </motion.div>
    </>
  );
}
