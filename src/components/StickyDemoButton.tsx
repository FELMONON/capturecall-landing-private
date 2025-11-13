import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';
import { Button } from './ui/button';

export function StickyDemoButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approx 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Version - Right side pill button */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="hidden md:block fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white shadow-2xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Demo
            </Button>
          </motion.div>

          {/* Mobile Version - Full width bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t-2 border-gray-200 shadow-2xl"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white h-14"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Demo
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
