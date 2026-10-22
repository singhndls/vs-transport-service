/**
 * Google Analytics 4 — consent-gated loader.
 * Reads GA_MEASUREMENT_ID from the backend at runtime so the key
 * is never exposed in the client bundle.
 */
import { getAnalyticsConsent, onConsentChange } from '@/lib/analytics-consent';

let loaded = false;

function loadGA(measurementId: string): void {
  if (loaded || typeof window === 'undefined') return;
  loaded = true;

  // gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // gtag initialisation
  window.dataLayer = window.dataLayer || [];
  function gtag(..._args: unknown[]) {
    window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId, { anonymize_ip: true });
}

export async function initAnalytics(): Promise<void> {
  if (typeof window === 'undefined') return;

  // Fetch the measurement ID from the backend (never exposed in bundle)
  let measurementId: string;
  try {
    const res = await fetch('/api/analytics/config');
    if (!res.ok) return;
    const data = (await res.json()) as { measurementId?: string };
    if (!data.measurementId) return;
    measurementId = data.measurementId;
  } catch {
    return;
  }

  // Load immediately if consent already given
  if (getAnalyticsConsent()) {
    loadGA(measurementId);
  }

  // Also load when consent is granted later
  onConsentChange((consented) => {
    if (consented) loadGA(measurementId);
  });
}

// Augment window for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
