export function Footer() {
  return (
    <footer className="bg-cream text-charcoal pt-24 pb-12 px-6 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
        <div className="w-full md:w-1/3">
          <a href="#" className="font-serif text-3xl tracking-tight block mb-8">
            FORM & FLOW
          </a>
          <p className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-6">Newsletter</p>
          <form className="flex border-b border-charcoal/20 pb-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent text-sm w-full focus:outline-none placeholder:text-charcoal/30 text-charcoal rounded-none"
            />
            <button type="submit" className="text-[10px] tracking-[0.25em] uppercase hover:text-charcoal/70 transition-colors">
              Join
            </button>
          </form>
        </div>

        <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-12 md:gap-24 justify-end">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-6">Explore</p>
            <ul className="space-y-4 text-sm text-charcoal/70">
              <li><a href="#method" className="hover:text-charcoal transition-colors">Our Method</a></li>
              <li><a href="#instructors" className="hover:text-charcoal transition-colors">Instructors</a></li>
              <li><a href="#schedule" className="hover:text-charcoal transition-colors">Schedule</a></li>
              <li><a href="#contact" className="hover:text-charcoal transition-colors">Location</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-charcoal/60 mb-6">Social</p>
            <ul className="space-y-4 text-sm text-charcoal/70">
              <li><a href="#" className="hover:text-charcoal transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Spotify</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-charcoal/10 text-xs text-charcoal/40">
        <p>&copy; {new Date().getFullYear()} Form & Flow Studio.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-charcoal transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
