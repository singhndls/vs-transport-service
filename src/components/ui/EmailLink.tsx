/**
 * EmailLink / EmailText — Cloudflare-obfuscation-safe email renderer.
 *
 * Root cause: Cloudflare decodes HTML entities (&#64; → @) in SSR HTML before
 * obfuscating them. React also decodes &#64; to @ during SSR rendering. So any
 * `@` — whether written literally or as &#64; — ends up as a plain @ in the
 * served HTML, which Cloudflare then rewrites. When React hydrates, the DOM no
 * longer matches the server string → hydration mismatch → page stuck on loader.
 *
 * Solution: render email text ONLY after client-side hydration via useState.
 * SSR HTML contains ONLY `user [at] domain` — no @ at all, not even as an entity.
 * After hydration, state flips to the real `user@domain` text and `mailto:` href.
 * React hydration succeeds because the SSR placeholder matches the first client pass.
 *
 * Two exports:
 *   <EmailLink user="info" domain="vstransport.in" className="...">
 *     Optional children override the link label (must NOT contain @ or &#64;)
 *   </EmailLink>
 *
 *   <EmailText user="info" domain="vstransport.in" className="..." />
 *   — display-only span, no <a> tag, same mounted pattern
 */

import { useEffect, useState } from 'react';

interface EmailLinkProps {
  user: string;
  domain: string;
  className?: string;
  style?: React.CSSProperties;
  /** Override link label. Must NOT contain @ or &#64; — use EmailText for that. */
  children?: React.ReactNode;
}

interface EmailTextProps {
  user: string;
  domain: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Renders a mailto: anchor. SSR placeholder: `user [at] domain` with href="#".
 * After hydration: real `user@domain` text and `mailto:` href.
 * Pass children to override the link label (e.g. "Send Email" + icon).
 */
export default function EmailLink({ user, domain, className, style, children }: EmailLinkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const href = mounted ? `mailto:${user}@${domain}` : '#';

  return (
    <a href={href} className={className} style={style}>
      {children ?? (mounted ? `${user}@${domain}` : `${user} [at] ${domain}`)}
    </a>
  );
}

/**
 * Renders email address as a plain <span> (no anchor).
 * SSR placeholder: `user [at] domain`. After hydration: `user@domain`.
 */
export function EmailText({ user, domain, className, style }: EmailTextProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span className={className} style={style}>
      {mounted ? `${user}@${domain}` : `${user} [at] ${domain}`}
    </span>
  );
}
