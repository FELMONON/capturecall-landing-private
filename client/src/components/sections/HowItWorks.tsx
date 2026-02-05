import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Settings, BrainCircuit, Rocket, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { icon: Settings, key: "step1", color: "from-blue-500 to-blue-600" },
    { icon: BrainCircuit, key: "step2", color: "from-purple-500 to-purple-600" },
    { icon: Rocket, key: "step3", color: "from-green-500 to-emerald-600" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="howItWorks" className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Total Setup Time: 30 Minutes
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {t('howItWorks.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(16.67%-1rem)] right-[calc(16.67%-1rem)] h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 dark:from-blue-800 dark:via-purple-800 dark:to-green-800 rounded-full" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold flex items-center justify-center shadow-lg`}>
                      {idx + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mt-2 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Time Badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    {t(`howItWorks.${step.key}.time`)}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {t(`howItWorks.${step.key}.title`)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(`howItWorks.${step.key}.desc`)}
                  </p>
                </div>

                {/* Arrow between cards - Mobile */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-slate-300 dark:text-slate-600 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-base px-8 py-6 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200"
          >
            Get Started in 30 Minutes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
