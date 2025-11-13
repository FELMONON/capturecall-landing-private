import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Phone, Calendar, DollarSign, Clock } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

const results = [
  {
    icon: Phone,
    stat: '85%',
    description: 'Average call capture rate - calls that would\'ve been missed'
  },
  {
    icon: Calendar,
    stat: '18-25',
    description: 'New appointments booked per month on average'
  },
  {
    icon: DollarSign,
    stat: '$14K-$22K',
    description: 'Average monthly revenue increase from captured calls'
  },
  {
    icon: Clock,
    stat: '< 2 min',
    description: 'Average wait time for patients calling your practice'
  }
];

export function ProvenResults() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="font-semibold">Proven Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold">
            Real Results from Our Calgary Pilot Program
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Join 40+ Calgary dental practices already capturing every opportunity
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {result.stat}
                </div>
                <p className="text-blue-200 text-sm md:text-base">
                  {result.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-gray-500 text-sm"
        >
          Results based on testing with Calgary dental practices over 90-day period
        </motion.p>
      </div>
    </section>
  );
}