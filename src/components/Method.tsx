import { AnimatedSection } from './ui/AnimatedSection';
import { motion } from 'motion/react';

const methods = [
  {
    id: '01',
    title: 'Signature Reformer',
    description: 'A contemporary approach to Classical Pilates. Emphasizing fluid transitions, deep core engagement, and precision to lengthen and tone the entire body.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2070',
  },
  {
    id: '02',
    title: 'Functional Strength',
    description: 'Slow, heavy, and intentional. Small-group strength training focused on compound movements, proper biomechanics, and building a resilient foundation.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070',
  },
  {
    id: '03',
    title: 'Recovery & Mobility',
    description: 'Down-regulate your nervous system. A soothing blend of guided stretching, myofascial release, and breathwork to restore tissue health.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000',
  }
];

export function Method() {
  return (
    <section id="method" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-24 md:text-center">
          <h2 className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-6">The Method</h2>
          <p className="font-serif text-3xl md:text-4xl text-charcoal">Movement with Intention</p>
        </AnimatedSection>

        <div className="space-y-32">
          {methods.map((method, index) => (
            <AnimatedSection 
              key={method.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={method.image}
                  alt={method.title}
                  className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal/40 mb-4">{method.id}</span>
                <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-6">{method.title}</h3>
                <p className="text-charcoal/70 leading-relaxed max-w-md">
                  {method.description}
                </p>
                <div className="mt-12">
                  <a href="#book" className="text-[10px] tracking-[0.25em] uppercase text-charcoal border-b border-charcoal/10 pb-1 hover:border-charcoal/50 transition-colors">
                    Explore Class
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
