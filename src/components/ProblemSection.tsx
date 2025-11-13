import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Phone, DollarSign, AlertCircle } from 'lucide-react';

const problems = [
  {
    icon: Phone,
    title: 'Lose 40-60 calls monthly to voicemail',
    description: 'Your front desk can\'t answer every call, especially during peak hours or lunch breaks.'
  },
  {
    icon: DollarSign,
    title: 'Each missed call = $200-400 in lost revenue',
    description: 'Every unanswered call is a potential patient choosing your competitor instead.'
  },
  {
    icon: AlertCircle,
    title: 'Staff overwhelmed during busy hours',
    description: 'Your team is juggling patients, phones, and admin tasks—something always suffers.'
  }
];

export function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1E3A8A 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 rounded-full px-6 py-2 mb-6">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold">The $50,000+ Problem</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Missed Calls Are Killing Your Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every missed call is a patient choosing your competitor. Here's what's costing you thousands every month:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-red-300 hover:scale-105"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <problem.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl mb-3 text-gray-900 font-bold">{problem.title}</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stat Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 md:p-12 rounded-2xl text-center"
        >
          <p className="text-2xl md:text-3xl">
            Calgary dental practices lose{' '}
            <span className="text-yellow-300">$100K-265K annually</span> from missed calls
          </p>
        </motion.div>
      </div>
    </section>
  );
}