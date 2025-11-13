import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Button } from './ui/button';

interface CTASectionProps {
  variant?: 'after-solution' | 'after-results' | 'after-roi';
}

export function CTASection({ variant = 'after-solution' }: CTASectionProps) {
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

  const content = {
    'after-solution': {
      buttonText: 'Start Your 14-Day Free Trial',
      subtext: 'No credit card required • Setup in 48 hours'
    },
    'after-results': {
      buttonText: 'See How Much You Could Capture',
      subtext: 'Book your free demo call'
    },
    'after-roi': {
      buttonText: "Let's Maximize Your Revenue",
      subtext: 'Schedule your free consultation'
    }
  };

  const { buttonText, subtext } = content[variant];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-12 text-center"
    >
      <Button
        onClick={scrollToContact}
        size="lg"
        className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white px-8 py-6 text-lg"
      >
        {buttonText}
      </Button>
      <p className="text-gray-600 mt-4">{subtext}</p>
    </motion.div>
  );
}
