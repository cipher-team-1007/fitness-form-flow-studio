import { AnimatedSection } from './ui/AnimatedSection';

export function Philosophy() {
  return (
    <AnimatedSection className="py-32 md:py-48 px-6 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-6">Our Philosophy</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-charcoal leading-snug italic">
          "True strength is found in the stillness between movements. It is not about how loud you work, but how deeply you connect."
        </h2>
        <div className="mt-16 text-charcoal/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed space-y-6">
          <p>
            Form & Flow was born from a desire to strip away the noise of modern fitness. 
            We believe that moving your body should feel like a return to yourself—a quiet luxury, not a frantic chore.
          </p>
          <p>
            Our intimately sized classes are designed to cultivate resilient strength, mindful control, and 
            sustainable mobility in an environment that feels like a sanctuary.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
