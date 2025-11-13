import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Calendar, Shield, Phone, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/b61f2b4b534e8a6041c55f252c7d87244b82dc7b.png';

export function PremiumHero() {
  const [callsSaved, setCallsSaved] = useState(12847);
  const [practicesViewing, setPracticesViewing] = useState(3);

  useEffect(() => {
    // Animate calls saved counter
    const interval = setInterval(() => {
      setCallsSaved(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    // Simulate practices viewing
    const viewingInterval = setInterval(() => {
      setPracticesViewing(Math.floor(Math.random() * 5) + 2);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(viewingInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => scrollToSection('contact');

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Minimalist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 md:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-white text-xs md:text-sm font-medium">
              {practicesViewing} Calgary practices viewing now
            </span>
          </motion.div>

          {/* Headline - Simplified */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 leading-tight"
          >
            Never Miss Another Patient Call
          </motion.h1>

          {/* Subheadline - Cleaner */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            24/7 AI receptionist for Calgary dental practices. Capture calls, book appointments, and grow your practice automatically.
          </motion.p>

          {/* Simple Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10 text-white/90 text-xs md:text-sm"
          >
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-base md:text-lg">⭐</span>
                ))}
              </div>
              <span>4.9/5</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center space-x-1">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>14-Day Free Trial</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-green-400" />
              <span>HIPAA Compliant</span>
            </div>
          </motion.div>

          {/* CTA Buttons - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10 md:mb-12"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-white text-[#1E3A8A] hover:bg-gray-100 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Demo
            </Button>
            <Button
              onClick={() => scrollToSection('how-it-works')}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white/30 text-white bg-transparent hover:bg-white/10 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Clean Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-1">
                {callsSaved.toLocaleString()}
              </div>
              <div className="text-blue-200 text-xs md:text-sm">Calls Captured</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-1">85%</div>
              <div className="text-blue-200 text-xs md:text-sm">Capture Rate</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-1">2.4K+</div>
              <div className="text-blue-200 text-xs md:text-sm">Appointments</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}