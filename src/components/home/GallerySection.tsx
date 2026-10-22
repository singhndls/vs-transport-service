import { motion } from 'motion/react';
import { Images } from 'lucide-react';

const galleryItems = [
  {
    src: '/airo-assets/images/pages/home/gallery-1',
    alt: 'VS Transport pickup truck ready for delivery',
    label: 'Pickup Transport',
  },
  {
    src: '/airo-assets/images/pages/home/gallery-2',
    alt: 'VS Transport warehouse storage facility',
    label: 'Warehouse Storage',
  },
  {
    src: '/airo-assets/images/pages/home/gallery-3',
    alt: 'VS Transport fleet trucks on highway',
    label: 'Fleet Transport',
  },
  {
    src: '/airo-assets/images/pages/home/gallery-4',
    alt: 'VS Transport loading and unloading operations',
    label: 'Loading & Unloading',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#060D1A] py-20 md:py-28 overflow-hidden">
      {/* Section header */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-5">
            <Images size={14} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Our Work</span>
          </div>
          <h2
            className="text-white font-black leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            REAL OPERATIONS,{' '}
            <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>REAL RESULTS</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
            A glimpse into our daily operations — trucks, warehouses, and the team that keeps Delhi NCR moving.
          </p>
        </motion.div>
      </div>

      {/* Gallery grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const }}
              className="group relative overflow-hidden rounded-2xl border border-[#1E2A3A] hover:border-[#C9A84C]/40 transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/90 via-[#060D1A]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#C9A84C] rounded-full" />
                  <span
                    className="text-white font-bold text-sm tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
