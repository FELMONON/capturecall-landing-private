import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const pricingFaqs = [
  {
    question: 'What happens if I exceed my call limit?',
    answer: 'On Starter/Professional plans, overage is $1.50 per additional call. We\'ll notify you at 80% and 100% of your limit. Or upgrade anytime to unlimited.'
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely. Upgrade or downgrade anytime. Changes take effect at your next billing cycle.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'Zero setup fees. We handle all configuration, training, and integration at no extra cost.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Credit card, debit card, or ACH bank transfer. All plans billed monthly. Annual billing available (save 15%).'
  },
  {
    question: 'Do you offer annual pricing?',
    answer: 'Yes! Pay annually and save 15%:\n• Starter: $4,027/year (save $737)\n• Professional: $7,067/year (save $1,297)\n• Enterprise: $12,147/year (save $2,217)'
  }
];

export function PricingFAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Pricing Questions?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg shadow-md px-6"
              >
                <AccordionTrigger className="text-left text-gray-900 hover:text-[#1E3A8A]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
