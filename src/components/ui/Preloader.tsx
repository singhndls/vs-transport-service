import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Primary dismiss — 1.8s feels premium without frustrating users
    const t = setTimeout(() => setVisible(false), 1800);
    // Hard safety fallback — force-dismiss after 4s no matter what
    const safety = setTimeout(() => setVisible(false), 4000);
    return () => {
      clearTimeout(t);
      clearTimeout(safety);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' as const } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060D1A]"
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
            className="mb-8 text-center"
          >
            <div
              className="text-[#C9A84C] font-black leading-none mb-1"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3.5rem', letterSpacing: '0.1em' }}
            >
              VS TRANSPORT
            </div>
            <div className="text-gray-500 text-xs tracking-[0.3em] uppercase">
              Logistics &amp; Transport
            </div>
          </motion.div>

          {/* Animated truck track */}
          <div className="relative w-64 h-1 bg-[#1E2A3A] rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C9A84C] to-[#E2C06A] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' as const }}
            />
          </div>

          {/* Truck icon sliding across */}
          <div className="relative w-64 h-8 mt-1 overflow-hidden">
            <motion.div
              initial={{ x: -40 }}
              animate={{ x: 256 }}
              transition={{ duration: 1.4, ease: 'easeInOut' as const }}
              className="absolute top-1"
            >
              <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
                <rect x="0" y="4" width="18" height="10" rx="2" fill="#C9A84C" />
                <path d="M18 7h6l3 4v3h-9V7z" fill="#E2C06A" />
                <circle cx="5" cy="15" r="3" fill="#0A1628" stroke="#C9A84C" strokeWidth="1.5" />
                <circle cx="22" cy="15" r="3" fill="#0A1628" stroke="#C9A84C" strokeWidth="1.5" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
