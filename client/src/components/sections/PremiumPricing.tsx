import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, ShieldCheck, Zap, Crown, Building2 } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from 'framer-motion';

export function PremiumPricing() {
  const { t, i18n } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      key: 'starter',
      icon: Zap,
      gradient: 'from-slate-500 to-slate-600',
      features: [
        'Up to 200 calls/month',
        '1 practice location',
        'Dentrix integration',
        'Email support',
        'Basic analytics dashboard',
      ],
    },
    {
      key: 'pro',
      icon: Crown,
      gradient: 'from-blue-600 to-indigo-600',
      popular: true,
      features: [
        'Unlimited calls',
        'Up to 3 locations',
        'All PMS integrations',
        'Priority phone support',
        'Advanced analytics',
        'Custom AI training',
      ],
    },
    {
      key: 'enterprise',
      icon: Building2,
      gradient: 'from-slate-700 to-slate-800',
      features: [
        'Unlimited everything',
        'Unlimited locations',
        'Dedicated success manager',
        'Custom integrations',
        'SLA guarantee',
        'White-label option',
      ],
    },
  ];

  const basePrices: Record<string, number> = {
    starter: 299,
    pro: 499,
  };

  const getPrice = (plan: string) => {
    if (plan === 'enterprise') {
      return t('pricing.enterprise.price');
    }

    const basePrice = basePrices[plan];
    const finalPrice = isYearly ? Math.round(basePrice * 12 * 0.8) : basePrice;

    if (i18n.language === 'fr') {
      return `${finalPrice.toLocaleString('fr-CA')} $`;
    }
    return `$${finalPrice.toLocaleString('en-US')}`;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-800/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {t('pricing.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              {t('pricing.subtitle')}
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-full">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isYearly
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isYearly
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {t('pricing.yearly')}
                <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 rounded-full font-semibold">
                  -20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={plan.popular ? 'lg:-mt-4' : ''}
            >
              <Card
                className={`relative h-full transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-blue-500 shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/10 scale-[1.02]'
                    : 'border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-1.5">
                      <Crown className="w-3.5 h-3.5" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className={`pt-8 pb-6 ${plan.popular ? 'pt-10' : ''}`}>
                  {/* Plan Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {t(`pricing.${plan.key}.name`)}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {getPrice(plan.key)}
                    </span>
                    {plan.key !== 'enterprise' && (
                      <span className="text-slate-500 dark:text-slate-400 font-medium">
                        /{isYearly ? 'year' : 'mo'}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t(`pricing.${plan.key}.desc`)}
                  </p>
                </CardHeader>

                <CardContent className="pb-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular
                            ? 'bg-blue-100 dark:bg-blue-900/30'
                            : 'bg-green-100 dark:bg-green-900/30'
                        }`}>
                          <Check className={`w-3 h-3 ${
                            plan.popular ? 'text-blue-600' : 'text-green-600'
                          }`} />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-300 leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-2 pb-8">
                  <Button
                    className={`w-full h-12 text-base font-semibold rounded-xl transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={scrollToContact}
                  >
                    {plan.key === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <p className="text-green-800 dark:text-green-300 font-medium">
              {t('pricing.guarantee')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
