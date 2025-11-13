import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Button } from './ui/button';

export function FinalCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Capture Every Call?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Join Calgary dental practices that never miss an appointment
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-[#1E3A8A] hover:bg-gray-100 text-lg px-12 py-6 h-auto mb-4"
          >
            Book Your Free Demo
          </Button>

          <p className="text-blue-200">
            15-minute call • See it in action • No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
}