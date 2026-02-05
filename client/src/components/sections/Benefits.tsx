import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, CalendarCheck, Languages, BarChart3, Wallet, Smile, Sparkles } from 'lucide-react';

export function Benefits() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Clock,
      key: "b1",
      gradient: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: CalendarCheck,
      key: "b2",
      gradient: "from-green-500 to-emerald-500",
      bgLight: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Languages,
      key: "b3",
      gradient: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: BarChart3,
      key: "b4",
      gradient: "from-orange-500 to-amber-500",
      bgLight: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: Wallet,
      key: "b5",
      gradient: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      icon: Smile,
      key: "b6",
      gradient: "from-rose-500 to-pink-500",
      bgLight: "bg-rose-50 dark:bg-rose-900/20",
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Built for Dental Practices
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {t('benefits.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="group h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${item.gradient}`} />

                {/* Icon */}
                <div className={`relative w-14 h-14 ${item.bgLight} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <item.icon className="w-7 h-7 text-slate-700 dark:text-slate-300 group-hover:text-white relative z-10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {t(`benefits.${item.key}`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t(`benefits.${item.key}desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
