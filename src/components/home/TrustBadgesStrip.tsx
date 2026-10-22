import { motion } from 'motion/react';
import { Shield, FileCheck, Star, Award, Lock, Headphones } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'SSL Secured', sub: 'Encrypted & Safe' },
  { icon: FileCheck, label: 'GST Registered', sub: 'GSTIN: 07BHRPD1956R1ZK' },
  { icon: Award, label: 'MSME Registered', sub: 'UDYAM-DL-08-0064982' },
  { icon: Lock, label: 'Safe Handling', sub: 'Professional Team' },
  { icon: Star, label: 'Reliable Service', sub: 'Delhi NCR Coverage' },
  { icon: Headphones, label: 'WhatsApp Support', sub: 'Available 24/7' },
];

export default function TrustBadgesStrip() {
  return (
    <section className="bg-[#060D1A] border-y border-[#C9A84C]/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const }}
              className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl border border-[#1E2A3A] hover:border-[#C9A84C]/30 bg-[#0A1628]/40 hover:bg-[#0A1628]/80 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                <b.icon size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <div className="text-white font-bold text-xs leading-tight">{b.label}</div>
                <div className="text-gray-600 text-[10px] mt-0.5">{b.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
