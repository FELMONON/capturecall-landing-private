import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Shield } from 'lucide-react';

export function MoneyBackGuarantee() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 md:p-16 border-4 border-green-500 shadow-xl relative overflow-hidden">
            {/* Background seal */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-green-500 opacity-10 rounded-full" />
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-green-500 opacity-10 rounded-full" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                  🛡️ 60-Day Money-Back Guarantee
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  If you don't capture at least 10x the cost in new appointments within 60 days, 
                  we'll refund every penny. <span className="font-semibold">No questions asked.</span>
                </p>
                <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Why we offer this guarantee:</span> We're confident you'll capture at least 15-20 new appointments in your first 60 days. That's $4,500-$6,000 in revenue against a $697 investment. The math just works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}