import { Phone, Mail, MapPin, Globe, Clock } from 'lucide-react';
import logo from '../assets/capturecall-logo.png';

export function Footer() {
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
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="CaptureCall AI Logo" 
                className="w-12 h-12 rounded-full"
              />
              <span className="text-xl">CaptureCall AI</span>
            </div>
            <p className="text-gray-400 mb-2">Never Miss Another Patient Call</p>
            <p className="text-gray-400 text-sm mb-4">
              Helping Calgary dental practices capture every appointment since 2024
            </p>
            <div className="flex items-center space-x-2 text-green-400 text-sm">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>AI Status: Online 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="mailto:demo@capturecall.ca"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Book Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">General Inquiries:</p>
                  <a 
                    href="mailto:felmon@capturecall.ca" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    felmon@capturecall.ca
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Support:</p>
                  <a 
                    href="mailto:support@capturecall.ca" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    support@capturecall.ca
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Demo Requests:</p>
                  <a 
                    href="mailto:demo@capturecall.ca" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    demo@capturecall.ca
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="tel:+14038520469" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (403) 852-0469
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Calgary, Alberta, Canada</span>
              </li>
              <li className="flex items-start space-x-2">
                <Globe className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://capturecall.ca" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  capturecall.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg mb-4">Hours</h3>
            <div className="flex items-start space-x-2 mb-4">
              <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-300">Monday-Friday:</p>
                <p className="text-gray-400 text-sm">9 AM - 6 PM MST</p>
                <p className="text-gray-300 mt-2">Saturday-Sunday:</p>
                <p className="text-gray-400 text-sm">Closed</p>
                <p className="text-blue-300 text-sm mt-3">
                  (AI Receptionist available 24/7 for demos!)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            © 2024 CaptureCall AI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              HIPAA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
