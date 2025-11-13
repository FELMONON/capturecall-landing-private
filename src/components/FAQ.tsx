import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'How does the AI receptionist work?',
    answer: 'Our AI receptionist answers calls 24/7, understands natural conversation, books appointments directly into your calendar, handles emergency triage, collects new patient information, and can even verify insurance details. It sounds natural, responds instantly, and never misses a call.'
  },
  {
    question: 'Can it integrate with my existing practice management software?',
    answer: 'Yes! We integrate with all major dental practice management systems including Dentrix, Eaglesoft, Open Dental, Curve, and many more. Our team handles the entire integration process during setup.'
  },
  {
    question: 'What if my practice management software isn\'t listed?',
    answer: 'We integrate with over 50 practice management systems including all major platforms. If yours isn\'t listed, we can build a custom integration at no extra cost during your setup period. Our team has successfully integrated with every system we\'ve encountered.'
  },
  {
    question: 'What happens to calls when my office is open?',
    answer: 'You have full control! The AI can handle all calls, act as overflow when your team is busy, or only answer after-hours. Most practices use it for overflow and after-hours to ensure no call goes unanswered.'
  },
  {
    question: 'How does the AI handle emergencies?',
    answer: 'Our AI is trained to recognize dental emergencies (severe pain, knocked-out teeth, facial swelling, etc.) and follows your custom emergency protocol - whether that\'s routing to an on-call dentist, booking priority appointments, or providing immediate guidance.'
  },
  {
    question: 'How does the AI handle complex scheduling requests?',
    answer: 'Our AI understands multi-dentist schedules, patient preferences (morning/afternoon, specific dentist), and special requirements. It checks real-time availability and books appointments instantly. If there\'s any ambiguity, it collects the information and your team confirms the optimal time.'
  },
  {
    question: 'Can we customize what the AI says?',
    answer: 'Absolutely. During setup, we customize greetings, hold messages, emergency protocols, and responses to match your practice\'s brand and tone. You can update this anytime through your dashboard or by contacting support.'
  },
  {
    question: 'How long does setup take?',
    answer: 'Most practices are live within 2-3 business days. This includes calendar integration, customizing your AI\'s responses to match your practice, and training on your specific protocols.'
  },
  {
    question: 'What if the AI doesn\'t understand a caller?',
    answer: 'If the AI encounters something it can\'t handle, it smoothly transfers to your front desk or takes a detailed message with callback information. You\'ll receive a transcript of the conversation to provide context.'
  },
  {
    question: 'Can I try it before committing?',
    answer: 'Absolutely! Every plan includes a 14-day free trial with full functionality. No credit card required to start. Plus, we offer a 60-day money-back guarantee if you\'re not capturing at least 10x the cost in new appointments.'
  },
  {
    question: 'Will patients know they\'re talking to an AI?',
    answer: 'Our AI sounds remarkably natural and handles conversations smoothly. However, we recommend being transparent - most patients appreciate the 24/7 availability and instant responses. Many don\'t realize it\'s AI until they\'re told.'
  },
  {
    question: 'Is it HIPAA compliant?',
    answer: 'Yes, we\'re fully HIPAA compliant. All calls are encrypted, recordings are stored securely, and we have signed Business Associate Agreements (BAA) available for all customers.'
  }
];

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg border border-gray-200 px-4 md:px-6"
              >
                <AccordionTrigger className="text-left text-sm md:text-base text-gray-900 hover:text-[#1E3A8A] py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}