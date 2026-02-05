// Google Analytics 4 + Custom Event Tracking
// Replace GA_MEASUREMENT_ID with your actual GA4 measurement ID

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Initialize GA4
export function initAnalytics() {
  if (typeof window === 'undefined') return;

  // Add gtag script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: true,
  });
}

// Track custom events
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, params);

  // Also log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}`, params);
  }
}

// Pre-defined event trackers
export const analytics = {
  // CTA clicks
  ctaClick: (ctaName: string, location: string) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      cta_location: location,
    });
  },

  // Form events
  formStart: (formName: string) => {
    trackEvent('form_start', { form_name: formName });
  },

  formSubmit: (formName: string, success: boolean) => {
    trackEvent('form_submit', {
      form_name: formName,
      success: success,
    });
  },

  formFieldFocus: (formName: string, fieldName: string) => {
    trackEvent('form_field_focus', {
      form_name: formName,
      field_name: fieldName,
    });
  },

  // A/B test tracking
  abTestView: (testName: string, variant: string) => {
    trackEvent('ab_test_view', {
      test_name: testName,
      variant: variant,
    });
  },

  abTestConversion: (testName: string, variant: string, conversionType: string) => {
    trackEvent('ab_test_conversion', {
      test_name: testName,
      variant: variant,
      conversion_type: conversionType,
    });
  },

  // Section views (scroll tracking)
  sectionView: (sectionName: string) => {
    trackEvent('section_view', { section_name: sectionName });
  },

  // Video plays
  videoPlay: (videoName: string) => {
    trackEvent('video_play', { video_name: videoName });
  },

  // Pricing interactions
  pricingView: (plan: string) => {
    trackEvent('pricing_view', { plan: plan });
  },

  pricingToggle: (billingCycle: 'monthly' | 'yearly') => {
    trackEvent('pricing_toggle', { billing_cycle: billingCycle });
  },
};

export default analytics;
