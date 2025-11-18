import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Trophy, Star } from 'lucide-react';

export function TrustBar() {
  const { t } = useTranslation();
  
  const items = [
    { icon: Shield, text: 'hipaa' },
    { icon: Lock, text: 'soc2' },
    { icon: Trophy, text: 'award' },
    { icon: Star, text: 'rating' },
  ];

  return (
    <div className="border-y border-slate-100 bg-white dark:bg-slate-900 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 py-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium opacity-80 hover:opacity-100 transition-opacity">
              <item.icon className="w-6 h-6 text-primary" />
              <span className="text-lg">{t(`trust.${item.text}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
