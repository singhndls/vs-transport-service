import { useState } from 'react';
import { Link2, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
  variant?: 'inline' | 'floating';
}

/**
 * Social share buttons for blog posts.
 * Supports Facebook, WhatsApp, Twitter/X, and copy-link.
 * variant="inline"   → horizontal row of buttons
 * variant="floating" → vertical column for desktop sidebar
 */
export default function ShareButtons({ title, url, variant = 'inline' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const platforms = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: 'bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/60',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'bg-[#1877F2]/10 border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2]/20 hover:border-[#1877F2]/60',
    },
    {
      id: 'twitter',
      label: 'X / Twitter',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'bg-[#1DA1F2]/10 border-[#1DA1F2]/30 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/60',
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text
    }
  };

  if (variant === 'floating') {
    return (
      <div className="hidden xl:flex flex-col items-center gap-3 sticky top-28">
        <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground rotate-[-90deg] mb-2 whitespace-nowrap">Share</span>
        {platforms.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${p.label}`}
            className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-200 ${p.color}`}
          >
            {p.icon}
          </a>
        ))}
        <button
          onClick={handleCopy}
          aria-label="Copy link"
          className="w-10 h-10 rounded-xl border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] hover:bg-[#C9A84C]/20 hover:border-[#C9A84C]/60 flex items-center justify-center transition-all duration-200"
        >
          {copied ? <Check size={15} /> : <Link2 size={15} />}
        </button>
      </div>
    );
  }

  // inline variant
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mr-1">Share:</span>
      {platforms.map((p) => (
        <a
          key={p.id}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${p.label}`}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-200 ${p.color}`}
        >
          {p.icon}
          <span className="hidden sm:inline">{p.label}</span>
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] hover:bg-[#C9A84C]/20 hover:border-[#C9A84C]/60 text-sm font-semibold transition-all duration-200"
      >
        {copied ? <Check size={15} /> : <Link2 size={15} />}
        <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Link'}</span>
      </button>
    </div>
  );
}
