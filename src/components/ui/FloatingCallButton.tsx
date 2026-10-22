import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

/**
 * Floating "Call Now" button — visible only on mobile (hidden md+).
 * Sits above the WhatsApp button (bottom-24 to avoid overlap).
 */
export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:8588806333"
      aria-label="Call VS Transport Service"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.2, duration: 0.4, ease: 'easeOut' as const }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="md:hidden fixed bottom-24 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#0A1628] border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#C9A84C] font-bold text-sm rounded-full shadow-2xl shadow-[#0A1628]/60 transition-colors duration-200"
    >
      {/* Subtle ring */}
      <span className="absolute inset-0 rounded-full border border-[#C9A84C]/20 animate-ping opacity-40" />
      <Phone size={18} className="relative z-10" />
      <span className="relative z-10">Call Now</span>
    </motion.a>
  );
}
