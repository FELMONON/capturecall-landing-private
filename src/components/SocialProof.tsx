import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function SocialProof() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-8 text-center"
    >
      <p className="text-gray-700 mb-2">
        Over 40 Calgary dental practices evaluated CaptureCall AI in 2024
      </p>
      <p className="text-gray-600 text-sm">
        Join the practices that are already capturing every call
      </p>
    </motion.div>
  );
}
