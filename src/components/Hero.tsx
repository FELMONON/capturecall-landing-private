import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar } from 'lucide-react';
import { Phone } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Never Miss Another Patient Call
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8">
              AI receptionist for Calgary dental practices. Capture every call, book more appointments, grow your practice—24/7.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white/90 text-sm sm:text-base">
                Trusted by Calgary Dental Practices
              </span>
            </div>
            
            {/* Rating */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <span className="text-white/90 text-sm sm:text-base">Rated 4.9/5 by practices in our pilot program</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-[#1E3A8A] hover:bg-white/90 h-14 px-8 text-base sm:text-lg w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Demo
              </Button>
              <Button
                onClick={() => scrollToSection('how-it-works')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-white/20 hover:bg-white/30 h-14 px-8 text-base sm:text-lg w-full sm:w-auto"
              >
                See How It Works
              </Button>
            </div>
            
            {/* Micro-stats */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 text-white/90 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>2-day setup</span>
              </div>
              <span className="hidden sm:inline text-white/40">•</span>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>14-day free trial</span>
              </div>
              <span className="hidden sm:inline text-white/40">•</span>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>No credit card required</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-full h-full flex items-center justify-center">
                <Phone className="w-32 h-32 text-white/80" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}