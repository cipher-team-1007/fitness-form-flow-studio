import { AnimatedSection } from './ui/AnimatedSection';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const images = [
  'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2000',
];

export function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={containerRef} className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-24 md:text-center">
          <h2 className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-6">The Space</h2>
          <p className="font-serif text-3xl md:text-4xl text-charcoal">A Quiet Sanctuary</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <motion.div style={{ y: y1 }} className="mt-0 md:mt-12">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={images[0]} alt="Studio space" className="w-full h-full object-cover filter brightness-95" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="mt-12 md:mt-32">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={images[1]} alt="Studio detail" className="w-full h-full object-cover filter brightness-95" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
          <motion.div style={{ y: y3 }} className="mt-12 md:mt-0">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={images[2]} alt="Equipment" className="w-full h-full object-cover filter brightness-95" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
