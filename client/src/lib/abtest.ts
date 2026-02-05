// A/B Testing Utility
// Assigns users to variants and persists assignment in localStorage

import { analytics } from './analytics';

export interface ABTest {
  name: string;
  variants: string[];
}

// Define your A/B tests here
export const AB_TESTS = {
  hero_headline: {
    name: 'hero_headline',
    variants: ['aggressive', 'benefit', 'question'],
  },
} as const;

// Headline variants for the hero section
export const HEADLINE_VARIANTS = {
  // Current: aggressive/pain-focused
  aggressive: {
    headline: "Stop Losing $1,500 Every Time Your Phone Rings Unanswered",
    subhead: "Your front desk is juggling patients, paperwork, and a ringing phone. CaptureCall AI answers every call in 2 rings, books appointments into Dentrix automatically, and gives your team 20+ hours back each week.",
  },
  // Softer: benefit-focused
  benefit: {
    headline: "Answer Every Patient Call. Book More Appointments. Automatically.",
    subhead: "CaptureCall AI picks up in 2 rings, 24/7. It books appointments directly into Dentrix, answers patient questions, and frees your front desk to focus on the patients in front of them.",
  },
  // Question: problem-aware
  question: {
    headline: "What Happens When a Patient Calls and No One Picks Up?",
    subhead: "They call your competitor. CaptureCall AI makes sure that never happens. Every call answered in 2 rings. Every appointment booked automatically. Every patient feels valued.",
  },
} as const;

export type HeadlineVariant = keyof typeof HEADLINE_VARIANTS;

// Get or assign a variant for a test
export function getVariant(test: ABTest): string {
  const storageKey = `ab_test_${test.name}`;

  // Check if user already has an assignment
  const stored = localStorage.getItem(storageKey);
  if (stored && test.variants.includes(stored)) {
    return stored;
  }

  // Randomly assign a variant
  const variant = test.variants[Math.floor(Math.random() * test.variants.length)];
  localStorage.setItem(storageKey, variant);

  return variant;
}

// Get headline variant specifically
export function getHeadlineVariant(): HeadlineVariant {
  const variant = getVariant(AB_TESTS.hero_headline);
  return variant as HeadlineVariant;
}

// Track that a user saw a variant
export function trackVariantView(testName: string, variant: string) {
  analytics.abTestView(testName, variant);
}

// Track conversion for a variant
export function trackVariantConversion(testName: string, variant: string, conversionType: string) {
  analytics.abTestConversion(testName, variant, conversionType);
}

// Hook for React components
export function useABTest(test: ABTest) {
  const variant = getVariant(test);

  // Track view on mount (will be called once due to React strict mode in dev)
  if (typeof window !== 'undefined') {
    const viewKey = `ab_viewed_${test.name}`;
    if (!sessionStorage.getItem(viewKey)) {
      trackVariantView(test.name, variant);
      sessionStorage.setItem(viewKey, 'true');
    }
  }

  return {
    variant,
    trackConversion: (conversionType: string) => {
      trackVariantConversion(test.name, variant, conversionType);
    },
  };
}

// Force a specific variant (useful for testing)
export function forceVariant(testName: string, variant: string) {
  localStorage.setItem(`ab_test_${testName}`, variant);
}

// Clear all A/B test assignments (for debugging)
export function clearAllTests() {
  Object.keys(AB_TESTS).forEach((testName) => {
    localStorage.removeItem(`ab_test_${testName}`);
    sessionStorage.removeItem(`ab_viewed_${testName}`);
  });
}
