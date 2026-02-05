import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, PhoneOff, AlertTriangle } from 'lucide-react';

export function ProblemSection() {
  const { t } = useTranslation();

  const problems = [
    {
      icon: DollarSign,
      key: "card1",
      iconColor: "text-red-600",
      iconBg: "bg-red-100 dark:bg-red-900/30",
      statColor: "text-red-600",
    },
    {
      icon: Users,
      key: "card2",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
      statColor: "text-amber-600",
    },
    {
      icon: PhoneOff,
      key: "card3",
      iconColor: "text-rose-600",
      iconBg: "bg-rose-100 dark:bg-rose-900/30",
      statColor: "text-rose-600",
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/50 dark:bg-red-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/50 dark:bg-amber-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Critical Issue for Dental Practices
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {t('problem.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('problem.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 overflow-hidden group">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>

                  {/* Stat */}
                  <p className={`text-4xl lg:text-5xl font-bold ${item.statColor} mb-3 tracking-tight`}>
                    {t(`problem.${item.key}.stat`)}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {t(`problem.${item.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(`problem.${item.key}.desc`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-900/20 dark:to-amber-900/20 border border-red-200/50 dark:border-red-800/50">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <p className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200">
              {t('problem.highlight')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
