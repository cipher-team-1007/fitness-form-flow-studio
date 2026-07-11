import { AnimatedSection } from './ui/AnimatedSection';
import { motion } from 'motion/react';

const instructors = [
  {
    name: 'Elena Rostova',
    role: 'Lead Pilates Instructor',
    bio: 'With over a decade of classical training, Elena brings a meticulous eye for alignment and a soothing presence to every session.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1500',
  },
  {
    name: 'Julian Hayes',
    role: 'Head of Strength',
    bio: 'Julian believes in building resilient bodies through quiet, focused power. His programming is deliberate, challenging, and safe.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1500',
  }
];

export function Instructors() {
  return (
    <section id="instructors" className="py-24 md:py-32 bg-[#F2EFEA]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-20">
          <h2 className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-6">Our Guides</h2>
          <p className="font-serif text-3xl md:text-4xl text-charcoal">The Studio Team</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {instructors.map((instructor, index) => (
            <AnimatedSection key={instructor.name} delay={index * 0.2}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-[3/4] mb-8">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-2">{instructor.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal/60 mb-6">{instructor.role}</p>
                <p className="text-charcoal/70 leading-relaxed text-sm md:text-base max-w-sm">
                  {instructor.bio}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
