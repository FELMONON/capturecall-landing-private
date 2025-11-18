import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, CalendarCheck, Languages, BarChart3, Wallet, Smile } from 'lucide-react';

export function Benefits() {
  const { t } = useTranslation();

  const benefits = [
    { icon: Clock, key: "b1" },
    { icon: CalendarCheck, key: "b2" },
    { icon: Languages, key: "b3" },
    { icon: BarChart3, key: "b4" },
    { icon: Wallet, key: "b5" },
    { icon: Smile, key: "b6" },
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t('benefits.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:border-blue-200"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {t(`benefits.${item.key}`)}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t(`benefits.${item.key}desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
