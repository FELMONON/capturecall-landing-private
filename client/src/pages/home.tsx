import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PremiumHero } from '@/components/sections/PremiumHero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Benefits } from '@/components/sections/Benefits';
import { PremiumPricing } from '@/components/sections/PremiumPricing';
import { ContactForm } from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden font-sans">
      <Header />
      <main>
        <PremiumHero />
        <TrustBar />
        <ProblemSection />
        <HowItWorks />
        <Benefits />
        <PremiumPricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
