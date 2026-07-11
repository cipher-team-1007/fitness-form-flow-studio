import { AnimatedSection } from './ui/AnimatedSection';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F2EFEA]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="w-full md:w-1/2">
          <AnimatedSection>
            <h2 className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-6">Visit Us</h2>
            <p className="font-serif text-3xl md:text-4xl text-charcoal mb-12">Book a Tour</p>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-charcoal focus:outline-none focus:border-charcoal transition-colors rounded-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-charcoal focus:outline-none focus:border-charcoal transition-colors rounded-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-2">Message (Optional)</label>
                <input 
                  type="text" 
                  id="message" 
                  className="w-full bg-transparent border-b border-charcoal/20 pb-2 text-charcoal focus:outline-none focus:border-charcoal transition-colors rounded-none"
                />
              </div>
              <button type="submit" className="text-[10px] tracking-[0.25em] uppercase text-charcoal border border-charcoal/20 px-8 py-4 hover:bg-charcoal hover:text-cream transition-colors duration-300 mt-4">
                Submit Request
              </button>
            </form>
          </AnimatedSection>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <AnimatedSection delay={0.2} className="mb-12 md:mb-0">
            <h3 className="font-serif text-2xl text-charcoal mb-6">Studio Location</h3>
            <div className="text-sm text-charcoal/80 space-y-2 mb-12">
              <p>128 Quiet Luxury Lane</p>
              <p>West Hollywood, CA 90069</p>
              <p className="pt-4">hello@formandflow.com</p>
              <p>+1 (310) 555-0198</p>
            </div>
            
            <div className="w-full aspect-[4/3] bg-charcoal/5 relative overflow-hidden flex items-center justify-center">
              {/* Using a subtle map placeholder or styling an iframe */}
              <div className="absolute inset-0 grayscale opacity-70 mix-blend-multiply">
                 <iframe 
                  src="https://maps.google.com/maps?q=West%20Hollywood,%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
