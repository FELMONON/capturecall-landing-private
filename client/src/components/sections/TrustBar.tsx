import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Plug, Star } from 'lucide-react';

export function TrustBar() {
  const { t } = useTranslation();

  const items = [
    { icon: Shield, text: 'hipaa', color: 'text-green-600' },
    { icon: Lock, text: 'soc2', color: 'text-blue-600' },
    { icon: Plug, text: 'integrations', color: 'text-purple-600' },
    { icon: Star, text: 'rating', color: 'text-amber-500', filled: true },
  ];

  return (
    <div className="border-y border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-8 py-6 lg:py-8">
          {/* Label for larger screens */}
          <span className="hidden xl:block text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Trusted By
          </span>

          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50"
            >
              <div className={`p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm ${item.color}`}>
                <item.icon className={`w-5 h-5 ${item.filled ? 'fill-current' : ''}`} />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t(`trust.${item.text}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
