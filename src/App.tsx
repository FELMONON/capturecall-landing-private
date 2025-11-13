import { Header } from './components/Header';
import { TopContactBar } from './components/TopContactBar';
import { PremiumHero } from './components/PremiumHero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { CTASection } from './components/CTASection';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { ProvenResults } from './components/ProvenResults';
import { ComparisonTable } from './components/ComparisonTable';
import { DemoSection } from './components/DemoSection';
import { PremiumPricing } from './components/PremiumPricing';
import { SocialProof } from './components/SocialProof';
import { PricingAddons } from './components/PricingAddons';
import { ROICalculator } from './components/ROICalculator';
import { MoneyBackGuarantee } from './components/MoneyBackGuarantee';
import { BetaResults } from './components/BetaResults';
import { PricingFAQ } from './components/PricingFAQ';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { StickyDemoButton } from './components/StickyDemoButton';
import { CookieConsent } from './components/CookieConsent';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Set SEO meta tags
    document.title = 'CaptureCall AI | AI Receptionist for Calgary Dental Practices | Starting at $397/month';
    
    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Never miss a patient call. 24/7 AI receptionist for Calgary dental practices. Plans from $397/month. 14-day free trial. Book appointments instantly, handle emergencies, capture every call.');

    // Set or update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'AI receptionist, dental receptionist, Calgary dentist, appointment booking, dental practice, missed calls, automated receptionist, dental AI');

    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <TopContactBar />
      <Header />
      <main className="pt-[90px] md:pt-[110px]">
        <PremiumHero />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <CTASection variant="after-solution" />
        <HowItWorks />
        <Benefits />
        <ProvenResults />
        <CTASection variant="after-results" />
        <ComparisonTable />
        <DemoSection />
        <PremiumPricing />
        <SocialProof />
        <PricingAddons />
        <ROICalculator />
        <CTASection variant="after-roi" />
        <MoneyBackGuarantee />
        <BetaResults />
        <PricingFAQ />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <StickyDemoButton />
      <CookieConsent />
    </div>
  );
}