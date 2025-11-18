import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Settings, BrainCircuit, PhoneCall } from 'lucide-react';
import bgImage from '@assets/generated_images/Abstract_blue_tech_background_ff4574a8.png';

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { icon: Settings, key: "step1" },
    { icon: BrainCircuit, key: "step2" },
    { icon: PhoneCall, key: "step3" },
  ];

  return (
    <section id="howItWorks" className="py-24 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <img src={bgImage} alt="tech bg" className="w-full h-full object-cover" />
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('howItWorks.title')}
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-20 h-20 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-white dark:border-slate-900 shadow-sm">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute top-6 right-6 text-6xl font-bold text-slate-100 dark:text-slate-800 -z-10">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {t(`howItWorks.${step.key}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t(`howItWorks.${step.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
