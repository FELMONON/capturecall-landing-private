import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, X } from 'lucide-react';
import { Button } from './ui/button';

export function StickyDemoButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approx 500px)
      if (!isDismissed) {
        setIsVisible(window.scrollY > 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

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

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <>
          {/* Desktop Version - Right side pill button */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="hidden md:flex fixed bottom-6 right-6 z-50 gap-2"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white shadow-2xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Demo
            </Button>
            <Button
              onClick={handleDismiss}
              size="icon"
              variant="outline"
              className="bg-white hover:bg-gray-100 shadow-2xl"
              aria-label="Dismiss button"
            >
              <X className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Mobile Version - Full width bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t-2 border-gray-200 shadow-2xl"
          >
            <div className="flex gap-2">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="flex-1 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white h-14"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Demo
              </Button>
              <Button
                onClick={handleDismiss}
                size="icon"
                variant="outline"
                className="bg-white hover:bg-gray-100 h-14 w-14 flex-shrink-0"
                aria-label="Dismiss button"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
