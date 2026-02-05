import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

export function Header() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = ['howItWorks', 'benefits', 'pricing', 'contact'];

  return (
    <>
      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200/80 dark:border-slate-800 shadow-sm"
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 lg:h-20 flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/25 group-hover:shadow-blue-600/40 transition-shadow">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                CaptureCall <span className="text-blue-600">AI</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <Globe className="w-4 h-4" />
                {i18n.language === 'en' ? 'FR' : 'EN'}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="rounded-full px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all"
              >
                {t('nav.bookDemo')}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-1 mb-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="w-full text-left px-4 py-3 text-slate-700 dark:text-slate-200 font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-slate-500 dark:text-slate-400">Language</span>
                <Button variant="ghost" size="sm" onClick={toggleLanguage}>
                  {i18n.language === 'en' ? 'Francais' : 'English'}
                </Button>
              </div>
              <Button
                className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600"
                onClick={() => scrollToSection('contact')}
              >
                {t('nav.bookDemo')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Mobile CTA - Shows when scrolled */}
      <div className={cn(
        "lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-300",
        isScrolled ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}>
        <Button
          className="w-full h-14 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/25"
          onClick={() => scrollToSection('contact')}
        >
          {t('nav.bookDemo')}
        </Button>
      </div>
    </>
  );
}
