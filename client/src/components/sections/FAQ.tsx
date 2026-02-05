import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Will patients know they're talking to an AI?",
    a: "Most don't. Our AI uses natural conversational patterns trained specifically on dental practice interactions. In a survey of 500+ patients, 92% rated the experience as 'helpful' or 'very helpful' — and only 14% guessed it was AI.",
  },
  {
    q: "How does it integrate with my practice management system?",
    a: "We connect directly to Dentrix, Eaglesoft, and Open Dental via secure API. Appointments are booked in real-time with no double-booking. Setup takes about 15 minutes with our guided onboarding.",
  },
  {
    q: "What happens if a patient has a dental emergency?",
    a: "The AI recognizes emergency keywords and immediately routes the call to your on-call number or answering service. You set the rules — we follow them precisely.",
  },
  {
    q: "Can I customize what the AI says?",
    a: "Absolutely. During onboarding, we learn your office hours, services, insurance policies, and booking rules. You can update these anytime through your dashboard — changes go live instantly.",
  },
  {
    q: "Is my patient data secure?",
    a: "Yes. We're fully HIPAA compliant and SOC 2 certified. All calls are encrypted end-to-end. We never store credit card information. Your data is yours — we don't sell or share it.",
  },
  {
    q: "What if I want to cancel?",
    a: "Cancel anytime from your dashboard. No contracts, no penalties. If you cancel within 30 days, you get a full refund — no questions asked.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`border rounded-xl transition-all duration-200 ${
        isOpen
          ? 'border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30 shadow-sm'
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className={`text-base font-semibold pr-4 transition-colors ${
          isOpen ? 'text-blue-700 dark:text-blue-300' : 'text-slate-900 dark:text-white'
        }`}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Common Questions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Got Questions? We've Got Answers.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Everything you need to know before getting started.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-3"
          >
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
