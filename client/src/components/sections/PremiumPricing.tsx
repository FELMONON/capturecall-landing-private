import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, ShieldCheck } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function PremiumPricing() {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);

  const plans = ['starter', 'pro', 'enterprise'];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t('pricing.title')}
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
              {t('pricing.monthly')}
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`text-sm font-medium ${isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
              {t('pricing.yearly')}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <Card 
              key={plan} 
              className={`relative border-2 transition-all duration-300 ${
                plan === 'pro' 
                  ? 'border-primary shadow-2xl scale-105 z-10' 
                  : 'border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {plan === 'pro' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 dark:text-white">
                  {t(`pricing.${plan}.name`)}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {t(`pricing.${plan}.price`)}
                  </span>
                  {plan !== 'enterprise' && (
                    <span className="text-slate-500 ml-2">
                      /{isYearly ? 'year' : 'mo'}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  {t(`pricing.${plan}.desc`)}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        Feature {i} included
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full"
                  variant={plan === 'pro' ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
            <p className="text-slate-500 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                {t('pricing.guarantee')}
            </p>
        </div>
      </div>
    </section>
  );
}
