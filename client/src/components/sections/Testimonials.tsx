import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "CaptureCall AI has been a game-changer for our practice. We went from missing 30% of calls to capturing 100%. Our new patient bookings increased by 40% in the first month.",
    author: "Dr. Sarah Chen",
    role: "Owner, Smile Dental Calgary",
    rating: 5,
    metric: "+40% new patients",
  },
  {
    quote: "My front desk staff used to be overwhelmed. Now they can focus on in-office patients while the AI handles phone calls perfectly. The integration with Dentrix is seamless.",
    author: "Dr. Michael Torres",
    role: "Chinook Family Dentistry",
    rating: 5,
    metric: "20+ hrs saved weekly",
  },
  {
    quote: "I was skeptical about AI, but the calls sound completely natural. Patients have no idea they're talking to an AI. It's paid for itself many times over.",
    author: "Dr. Emily Watson",
    role: "Downtown Dental Group",
    rating: 5,
    metric: "$127K recovered annually",
  },
];

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-green-50 to-transparent dark:from-green-950/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {t('testimonials.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="h-full p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 relative group hover:shadow-xl transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Metric Badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold mb-6">
                  {testimonial.metric}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
        >
          {[
            { value: '50+', label: 'Practices Using CaptureCall' },
            { value: '2M+', label: 'Calls Handled' },
            { value: '98%', label: 'Customer Satisfaction' },
            { value: '$5M+', label: 'Revenue Recovered' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-blue-100">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
