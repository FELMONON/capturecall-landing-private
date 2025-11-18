import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Frown } from 'lucide-react';

export function ProblemSection() {
  const { t } = useTranslation();

  const problems = [
    {
      icon: DollarSign,
      key: "card1",
      color: "text-red-500",
      bg: "bg-red-50 dark:bg-red-900/20"
    },
    {
      icon: Users,
      key: "card2",
      color: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      icon: Frown,
      key: "card3",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('problem.title')}
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            {t('problem.highlight')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {t(`problem.${item.key}.title`)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(`problem.${item.key}.desc`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
