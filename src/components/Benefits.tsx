import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Sparkles, ArrowRight, Clock, Calendar, Heart, Shield, Database, Settings } from 'lucide-react';

const benefits = [
  {
    title: '24/7 Availability',
    description: 'Ensure your practice is always available to patients, no matter the time.',
    gradient: 'from-[#1E3A8A] to-[#2563EB]',
    icon: Clock
  },
  {
    title: 'Increased Appointments',
    description: 'Boost your patient flow with our expert answering service.',
    gradient: 'from-blue-600 to-blue-700',
    icon: Calendar
  },
  {
    title: 'Enhanced Patient Experience',
    description: 'Provide a seamless and professional experience for every patient.',
    gradient: 'from-purple-600 to-purple-700',
    icon: Heart
  },
  {
    title: 'Expert Staff',
    description: 'Our team is trained to handle all your patient inquiries with care.',
    gradient: 'from-green-600 to-green-700',
    icon: Sparkles
  },
  {
    title: 'Data Security',
    description: 'Protect patient information with our secure and compliant systems.',
    gradient: 'from-red-600 to-red-700',
    icon: Shield
  },
  {
    title: 'Customizable Solutions',
    description: 'Tailor our services to fit the unique needs of your practice.',
    gradient: 'from-gray-600 to-gray-700',
    icon: Settings
  }
];

export function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Transform Your Practice</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Why Leading Calgary Practices Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just an answering service—a complete patient experience upgrade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl mb-4 text-gray-900 font-bold">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              
              {/* Hover effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-blue-600 font-semibold inline-flex items-center">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}