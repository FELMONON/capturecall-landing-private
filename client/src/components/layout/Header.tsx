import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Globe } from 'lucide-react';
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

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
            <Phone className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            CaptureCall <span className="text-primary">AI</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['howItWorks', 'benefits', 'pricing', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors dark:text-slate-300"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2 text-slate-600">
            <Globe className="w-4 h-4" />
            {i18n.language.toUpperCase()}
          </Button>
          <Button onClick={() => scrollToSection('contact')} className="rounded-full shadow-lg shadow-blue-900/20">
            {t('nav.bookDemo')}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {['howItWorks', 'benefits', 'pricing', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-left py-2 text-slate-600 font-medium"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
          <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Language</span>
            <Button variant="ghost" size="sm" onClick={toggleLanguage}>
              {i18n.language === 'en' ? 'Français' : 'English'}
            </Button>
          </div>
          <Button className="w-full" onClick={() => scrollToSection('contact')}>
            {t('nav.bookDemo')}
          </Button>
        </div>
      )}
    </header>
  );
}
