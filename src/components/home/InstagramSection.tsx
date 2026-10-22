import { motion } from 'motion/react';
import { Instagram, ExternalLink } from 'lucide-react';

/**
 * Instagram feed section.
 * Instagram's API requires OAuth and a connected Business account.
 * Until the user connects their account, we show a premium static
 * placeholder grid that links to their profile — this is the correct
 * pattern for a logistics brand site.
 */
const posts = [
  {
    id: 1,
    img: '/airo-assets/images/pages/home/gallery-1',
    caption: 'Ready for another day of deliveries across Delhi NCR',
    tag: 'Chota Hathi',
  },
  {
    id: 2,
    img: '/airo-assets/images/pages/home/gallery-2',
    caption: 'Our warehouse facility — safe, secure and professionally managed',
    tag: 'Warehouse',
  },
  {
    id: 3,
    img: '/airo-assets/images/pages/home/gallery-3',
    caption: 'Fleet ready to roll. Reliable transport across Delhi NCR.',
    tag: 'Fleet',
  },
  {
    id: 4,
    img: '/airo-assets/images/pages/home/gallery-4',
    caption: 'Professional loading & unloading — handled with care',
    tag: 'Operations',
  },
  {
    id: 5,
    img: '/airo-assets/images/pages/home/gallery-1',
    caption: 'Bolero Pickup — perfect for mid-size commercial deliveries',
    tag: 'Bolero Pickup',
  },
  {
    id: 6,
    img: '/airo-assets/images/pages/home/gallery-2',
    caption: 'Serving businesses across Delhi NCR with reliable transport solutions.',
    tag: 'Delhi NCR',
  },
];

export default function InstagramSection() {
  return (
    <section className="bg-[#060D1A] py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/8 rounded-full mb-4">
              <Instagram size={14} className="text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Instagram</span>
            </div>
            <h2
              className="text-white font-black leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
            >
              FOLLOW OUR{' '}
              <span style={{ WebkitTextStroke: '2px #C9A84C', color: 'transparent' }}>JOURNEY</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1" style={{ fontFamily: "'Lato', sans-serif" }}>
              @vs_transport_service — Real operations, real results.
            </p>
          </div>

          <a
            href="https://www.instagram.com/vs_transport_service"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#C9A84C]/30 hover:border-[#C9A84C]/60 bg-[#C9A84C]/5 hover:bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold rounded-xl transition-all duration-200 shrink-0"
          >
            <Instagram size={14} />
            Follow Us
            <ExternalLink size={11} />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/vs_transport_service"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-[#1E2A3A] hover:border-[#C9A84C]/40 transition-all duration-300"
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/95 via-[#060D1A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 pointer-events-none">
                <p className="text-white text-[10px] leading-snug line-clamp-2 mb-2">{post.caption}</p>
                <div className="flex items-center gap-2">
                  <Instagram size={10} style={{ color: 'hsl(var(--brand-gold))' }} />
                  <span className="text-gray-400 text-[10px]">@vs_transport_service</span>
                </div>
              </div>

              {/* Tag pill */}
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#060D1A]/80 border border-[#C9A84C]/30 rounded-full">
                <span className="text-[#C9A84C] text-[9px] font-bold">{post.tag}</span>
              </div>

              {/* Instagram icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram size={14} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-5 bg-gradient-to-r from-[#0A1628] via-[#0A1628] to-[#060D1A] border border-[#1E2A3A] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-xl flex items-center justify-center shrink-0">
              <Instagram size={18} className="text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">@vs_transport_service</div>
              <div className="text-gray-500 text-xs">Follow for daily updates, tips &amp; behind-the-scenes</div>
            </div>
          </div>
          <a
            href="https://www.instagram.com/vs_transport_service"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white font-black text-xs rounded-xl hover:opacity-90 transition-opacity shrink-0"
          >
            <Instagram size={14} />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
