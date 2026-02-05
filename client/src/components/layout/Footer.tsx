import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white">
                CaptureCall <span className="text-blue-400">AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {[
                { label: 'How it Works', id: 'howItWorks' },
                { label: 'Benefits', id: 'benefits' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Book a Demo', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Integrations</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Dentrix</li>
              <li>Eaglesoft</li>
              <li>Open Dental</li>
              <li>Curve Dental</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@capturecall.ai"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  hello@capturecall.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                Calgary, Alberta
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} CaptureCall AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
