import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/capturecall-logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src={logo} 
              alt="CaptureCall AI Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <span className="text-base md:text-xl font-semibold text-[#1E3A8A]">
              CaptureCall AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm lg:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm lg:text-base"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm lg:text-base"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#1E3A8A] transition-colors text-sm lg:text-base"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white h-10"
              size="sm"
            >
              Book Free Demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1E3A8A]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 bg-white rounded-b-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-[#1E3A8A] text-left px-4 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-[#1E3A8A] text-left px-4 py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-[#1E3A8A] text-left px-4 py-2"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-[#1E3A8A] text-left px-4 py-2"
              >
                Contact
              </button>
              <div className="px-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white"
                >
                  Book Free Demo
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
