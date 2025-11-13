import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Clock, Calendar, AlertTriangle, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a call again, even after hours, weekends, and holidays.'
  },
  {
    icon: Calendar,
    title: 'Instant Booking',
    description: 'Schedules appointments in real-time directly into your practice management system.'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Triage',
    description: 'Handles urgent cases with empathy and routes them appropriately.'
  },
  {
    icon: MessageCircle,
    title: 'Natural Conversations',
    description: 'Patients can\'t tell it\'s AI—sounds like a professional, friendly receptionist.'
  }
];

export function SolutionSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Meet Your AI Receptionist
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}