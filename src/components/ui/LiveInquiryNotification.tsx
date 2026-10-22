import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, useCallback } from 'react';
import { Truck, X } from 'lucide-react';

const notifications = [
  { name: 'Rahul S.', location: 'Noida Sector 62', service: 'Chota Hathi', time: '2 min ago' },
  { name: 'Priya M.', location: 'Gurgaon Cyber City', service: 'Bolero Pickup', time: '5 min ago' },
  { name: 'Amit K.', location: 'Okhla Phase 2', service: 'Warehouse Storage', time: '8 min ago' },
  { name: 'Sunita R.', location: 'Faridabad Sector 14', service: 'Fleet Transport', time: '12 min ago' },
  { name: 'Deepak V.', location: 'Dwarka Sector 10', service: 'Chota Hathi', time: '15 min ago' },
  { name: 'Neha T.', location: 'Indirapuram, Ghaziabad', service: 'Bolero Pickup', time: '18 min ago' },
  { name: 'Vikram P.', location: 'Connaught Place', service: 'Fleet Transport', time: '22 min ago' },
];

export default function LiveInquiryNotification() {
  const [current, setCurrent] = useState<number | null>(null);
  const [dismissed, setDismissed] = useState(false);

  const showNext = useCallback(() => {
    if (dismissed) return;
    setCurrent((prev) => {
      const next = prev === null ? 0 : (prev + 1) % notifications.length;
      return next;
    });
    // Auto-hide after 4.5s
    setTimeout(() => setCurrent(null), 4500);
  }, [dismissed]);

  useEffect(() => {
    // First popup after 5s
    const first = setTimeout(showNext, 5000);
    // Then every 18s
    const interval = setInterval(showNext, 18000);
    return () => { clearTimeout(first); clearInterval(interval); };
  }, [showNext]);

  const notif = current !== null ? notifications[current] : null;

  return (
    <AnimatePresence>
      {notif && !dismissed && (
        <motion.div
          key={current}
          initial={{ opacity: 0, x: -80, y: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
          className="fixed bottom-6 left-4 z-50 max-w-xs w-full"
        >
          <div className="relative flex items-start gap-3 p-4 bg-[#0A1628] border border-[#C9A84C]/30 rounded-2xl shadow-2xl shadow-[#060D1A]/80 overflow-hidden">
            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#C9A84C]/60 via-[#C9A84C]/20 to-transparent" />

            {/* Icon */}
            <div className="w-10 h-10 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
              <Truck size={18} className="text-[#C9A84C]" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-green-400 text-[10px] font-bold tracking-wide uppercase">Live Booking</span>
              </div>
              <p className="text-white text-xs font-bold leading-snug">
                {notif.name} from {notif.location}
              </p>
              <p className="text-gray-400 text-[11px] mt-0.5">
                Booked <span className="text-[#C9A84C] font-semibold">{notif.service}</span>
              </p>
              <p className="text-gray-600 text-[10px] mt-1">{notif.time}</p>
            </div>

            {/* Dismiss */}
            <button
              onClick={() => { setCurrent(null); setDismissed(true); }}
              className="text-gray-600 hover:text-gray-400 transition-colors shrink-0 mt-0.5"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
