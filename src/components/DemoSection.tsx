import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Headphones, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function DemoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 md:py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Experience CaptureCall AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI receptionist handles real dental practice calls
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Listen to Sample Calls Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow min-h-[300px] flex flex-col"
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🎧</div>
              <h3 className="text-2xl text-gray-900 mb-4">
                Listen to Sample Calls
              </h3>
              <p className="text-gray-600 mb-6">
                Hear how our AI handles new patient bookings, emergencies, and appointment scheduling
              </p>
            </div>
            
            <div className="mt-auto">
              <Button
                onClick={() => window.location.href = 'mailto:demo@capturecall.ca?subject=Request%20Sample%20Call%20Recordings'}
                size="lg"
                className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white w-full mb-3"
              >
                Request Sample Recordings
              </Button>
              <p className="text-sm text-gray-500 text-center">
                We'll send you 3 sample recordings within 1 hour
              </p>
            </div>
          </motion.div>

          {/* Call Our Demo Line Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow min-h-[300px] flex flex-col"
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl text-gray-900 mb-4">
                Call Our Demo Line
              </h3>
              <p className="text-gray-600 mb-6">
                Experience the AI receptionist yourself by calling our live demo number
              </p>
            </div>
            
            <div className="mt-auto">
              <Button
                onClick={() => window.location.href = 'mailto:demo@capturecall.ca?subject=Demo%20Phone%20Number%20Request'}
                size="lg"
                variant="outline"
                className="bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white w-full mb-3"
              >
                Get Demo Number
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Available 24/7 for testing
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
