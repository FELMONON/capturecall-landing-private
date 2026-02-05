import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PremiumHero } from '@/components/sections/PremiumHero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Benefits } from '@/components/sections/Benefits';
import { Testimonials } from '@/components/sections/Testimonials';
import { PremiumPricing } from '@/components/sections/PremiumPricing';
import { FAQ } from '@/components/sections/FAQ';
import { ContactForm } from '@/components/sections/ContactForm';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden font-sans antialiased">
      <Header />
      <main>
        <PremiumHero />
        <TrustBar />
        <ProblemSection />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <PremiumPricing />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
