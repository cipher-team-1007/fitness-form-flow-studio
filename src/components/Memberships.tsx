import { AnimatedSection } from './ui/AnimatedSection';

const tiers = [
  {
    name: 'The Essential',
    price: '$180',
    frequency: 'Monthly',
    features: ['4 Sessions per month', 'Complimentary mat service', '10% off retail'],
  },
  {
    name: 'The Dedicated',
    price: '$320',
    frequency: 'Monthly',
    features: ['8 Sessions per month', 'Complimentary mat service', 'Advance booking window', '1 guest pass per quarter'],
  },
  {
    name: 'The Unlimited',
    price: '$450',
    frequency: 'Monthly',
    features: ['Unlimited Sessions', 'Priority waitlist', 'Advance booking window', '1 guest pass per month', 'Private locker access'],
  }
];

export function Memberships() {
  return (
    <section className="py-24 md:py-32 bg-[#F2EFEA]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-24 md:text-center">
          <h2 className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-6">Membership</h2>
          <p className="font-serif text-3xl md:text-4xl text-charcoal">Commit to Your Practice</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {tiers.map((tier, index) => (
            <AnimatedSection 
              key={tier.name} 
              delay={index * 0.2}
              className="relative flex flex-col pt-8 border-t border-charcoal/10"
            >
              <h3 className="font-serif text-2xl text-charcoal mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-light text-charcoal">{tier.price}</span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60">/ {tier.frequency}</span>
              </div>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="text-sm text-charcoal/80 flex items-start">
                    <span className="mr-3 mt-1 block w-1 h-1 rounded-full bg-charcoal/20 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#book" className="text-[10px] tracking-[0.25em] uppercase text-charcoal border-b border-charcoal/10 pb-1 w-fit hover:border-charcoal/50 transition-colors">
                Select Tier
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
