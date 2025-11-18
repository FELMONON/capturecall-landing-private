import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Star, Phone } from 'lucide-react';
import heroImage from '@assets/generated_images/Modern_dental_reception_area_c5efb7b4.png';

export function PremiumHero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-100/20 blur-3xl rounded-bl-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Badge variant="outline" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-1.5 text-sm font-medium rounded-full">
              <Star className="w-3.5 h-3.5 mr-2 fill-blue-700" />
              {t('hero.badge')}
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              {t('hero.headline')}
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {t('hero.subhead')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="text-base px-8 py-6 rounded-full shadow-lg shadow-blue-900/20 hover:scale-105 transition-transform">
                {t('hero.primaryCta')}
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full border-2 hover:bg-slate-50">
                {t('hero.secondaryCta')}
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                Google Partner
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                HIPAA Compliant
              </span>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 aspect-[4/3] border-4 border-white dark:border-slate-800">
              <img 
                src={heroImage} 
                alt="Modern Dental Reception" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 max-w-xs animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">1,234</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{t('hero.stat')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -z-10 top-10 -right-10 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-200" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
