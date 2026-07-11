import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-charcoal/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-24 flex items-center justify-between">
        <div className="hidden md:flex gap-8 text-[10px] tracking-[0.25em] uppercase text-charcoal/60">
          <a href="#method" className="hover:text-charcoal transition-colors">Our Method</a>
          <a href="#instructors" className="hover:text-charcoal transition-colors">Instructors</a>
        </div>
        
        <a href="#" className="font-serif text-2xl tracking-tighter font-medium text-charcoal flex-shrink-0">
          FORM & FLOW
        </a>

        <div className="hidden md:flex gap-8 text-[10px] tracking-[0.25em] uppercase text-charcoal/60 items-center">
          <a href="#schedule" className="hover:text-charcoal transition-colors">Schedule</a>
          <a href="#contact" className="hover:text-charcoal transition-colors">Location</a>
          <a href="#book" className="text-charcoal hover:text-charcoal/70 transition-colors border-b border-charcoal pb-0.5">
            Book a Session
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-charcoal text-[10px] tracking-[0.25em] uppercase">
          Menu
        </button>
      </div>
    </motion.header>
  );
}
