import { AnimatedSection } from './ui/AnimatedSection';

const scheduleData = [
  { time: '07:00 AM', class: 'Signature Reformer', instructor: 'Elena', duration: '50 Min' },
  { time: '08:30 AM', class: 'Functional Strength', instructor: 'Julian', duration: '55 Min' },
  { time: '12:00 PM', class: 'Recovery & Mobility', instructor: 'Elena', duration: '45 Min' },
  { time: '05:30 PM', class: 'Signature Reformer', instructor: 'Elena', duration: '50 Min' },
  { time: '06:45 PM', class: 'Functional Strength', instructor: 'Julian', duration: '55 Min' },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-cream border-t border-charcoal/5">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="mb-20 text-center">
          <h2 className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-6">Timetable</h2>
          <p className="font-serif text-3xl md:text-4xl text-charcoal">Upcoming Sessions</p>
        </AnimatedSection>

        <div className="flex flex-col">
          {scheduleData.map((session, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.1}
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-charcoal/10 last:border-0"
            >
              <div className="w-full md:w-1/4 mb-2 md:mb-0">
                <span className="text-sm font-medium tracking-wide text-charcoal">{session.time}</span>
              </div>
              <div className="w-full md:w-2/4 mb-2 md:mb-0">
                <span className="font-serif text-xl text-charcoal group-hover:opacity-70 transition-opacity duration-300">
                  {session.class}
                </span>
              </div>
              <div className="w-full md:w-1/4 flex items-center justify-between md:justify-end gap-8 text-sm text-charcoal/60">
                <span>{session.instructor}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-serif italic text-charcoal/50">{session.duration}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="mt-16 text-center">
          <a href="#book" className="inline-block border border-charcoal/20 px-8 py-4 text-[10px] tracking-[0.25em] uppercase text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-300">
            View Full Schedule
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
