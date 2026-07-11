import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from './ui/AnimatedSection';

const testimonials = [
  {
    quote: "The most serene hour of my day. It doesn't feel like a workout; it feels like an architectural restoration of my body.",
    name: "Sarah"
  },
  {
    quote: "Quiet, challenging, and profoundly effective. I've never felt stronger or more grounded.",
    name: "David"
  },
  {
    quote: "A beautiful space that demands presence. The instructors here are true masters of their craft.",
    name: "Mia"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 md:py-48 bg-cream border-y border-charcoal/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative min-h-[250px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <p className="font-serif italic text-2xl md:text-3xl text-charcoal leading-snug mb-8 max-w-2xl text-center mx-auto">
              "{testimonials[currentIndex].quote}"
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60">
              — {testimonials[currentIndex].name}
            </p>
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute bottom-0 flex gap-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="p-2"
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <div className={`w-1 h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-charcoal scale-150' : 'bg-charcoal/20'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
