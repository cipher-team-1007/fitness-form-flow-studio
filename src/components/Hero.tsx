import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FadeUpText } from './ui/FadeUpText';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-cream">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Pilates Studio"
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream/80" />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <FadeUpText
            text="Strength, Refined."
            className="text-6xl md:text-8xl font-serif leading-none text-charcoal mb-6 justify-center"
            staggerDelay={0.1}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-sm max-w-sm leading-relaxed text-charcoal/80"
        >
          A quiet space for movement, breath, and intentional power.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal/50">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-charcoal/20" />
      </motion.div>
    </section>
  );
}
