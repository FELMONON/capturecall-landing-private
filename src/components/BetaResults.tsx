import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Button } from './ui/button';
import { TrendingUp } from 'lucide-react';

export function BetaResults() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollToROI = () => {
    const element = document.getElementById('roi-calculator');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-8">
            Results from Beta Testing
          </h2>

          <div className="bg-[#F0F9FF] rounded-2xl p-8 md:p-12 border-2 border-blue-300 shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
              During our 90-day pilot program with Calgary dental practices, 
              the Professional plan consistently delivered results in the first month:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  Average of <span className="font-semibold text-[#1E3A8A]">23 new appointments</span> booked
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#1E3A8A]">$6,900 average</span> monthly revenue increase
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  Investment paid back within <span className="font-semibold text-[#1E3A8A]">7-10 days</span>
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#1E3A8A]">4.9/5 satisfaction</span> rating from practice managers
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 mb-6 border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 italic">
                💬 "The ROI is immediate and measurable. Our only regret is not implementing this sooner."
              </p>
              <p className="text-sm text-gray-600 mt-3">
                — Anonymous Practice Manager, Calgary (name withheld per NDA)
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={scrollToROI}
                size="lg"
                className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                See Your Potential ROI
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
