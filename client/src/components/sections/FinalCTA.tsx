import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

export function FinalCTA() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />

          <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm mb-8 shadow-lg">
              <Phone className="w-8 h-8 text-white" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight max-w-3xl mx-auto leading-tight">
              Your Next Patient Is Calling.
              <br />
              <span className="text-blue-200">Will You Answer?</span>
            </h2>

            {/* Value props */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-blue-100">
              {['No setup fees', '14-day free trial', 'Cancel anytime'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-10 py-7 rounded-full bg-white text-blue-700 hover:bg-blue-50 shadow-2xl shadow-black/20 hover:scale-[1.03] transition-all duration-200 font-bold group"
            >
              {t('hero.primaryCta')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="mt-6 text-sm text-blue-200/80">
              Join 50+ dental practices already using CaptureCall AI
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
