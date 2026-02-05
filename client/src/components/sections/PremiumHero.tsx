import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Star, Phone, Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImage from '@assets/generated_images/Modern_dental_reception_area_c5efb7b4.png';

export function PremiumHero() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-blue-100/40 to-transparent blur-3xl" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-50/50 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl lg:max-w-2xl"
          >
            {/* Trust Badge */}
            <Badge
              variant="outline"
              className="mb-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium rounded-full shadow-sm"
            >
              <Star className="w-4 h-4 mr-2 fill-amber-400 text-amber-400" />
              {t('hero.badge')}
            </Badge>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              {t('hero.headline')}
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {t('hero.subhead')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-base px-8 py-6 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] transition-all duration-200 group"
              >
                {t('hero.primaryCta')}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-full border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 transition-all duration-200 group"
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
                {t('hero.secondaryCta')}
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span className="font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span className="font-medium">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-medium">No Setup Fees</span>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:pl-8"
          >
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 dark:shadow-black/30 aspect-[4/3] border border-slate-200/50 dark:border-slate-700/50">
              <img
                src={heroImage}
                alt="Modern Dental Reception"
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />

              {/* Live Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs"
              >
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-5 rounded-xl shadow-xl border border-white/20 dark:border-slate-700/50">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {t('hero.statNumber')}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        {t('hero.stat')}
                      </p>
                    </div>
                  </div>
                  {/* Live indicator */}
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Live across all practices</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-green-100 dark:bg-green-900/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
