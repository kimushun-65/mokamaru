import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Story from './components/Story';
import Metrics from './components/Metrics';
import Process from './components/Process';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story', label: 'ストーリー' },
    { name: 'Metrics', href: '#metrics', label: '実績・成果' },
    { name: 'Process', href: '#process', label: 'プロセス' },
    { name: 'Skills', href: '#experience', label: 'スキル' },
    { name: 'Contact', href: '#contact', label: 'お問い合わせ' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative font-sans text-dark selection:bg-primary/20 selection:text-primary">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating Navigation */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            onClick={scrollToTop}
            className="font-bold text-xl tracking-tight z-50 flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">MT</span>
            <span>Moka<span className="text-primary">.</span>T</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors tracking-wide cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-dark mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-dark mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-30 flex items-center justify-center transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-bold text-gray-800 hover:text-primary cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <main>
        <Hero />
        <Story />
        <Metrics />
        <Process />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;