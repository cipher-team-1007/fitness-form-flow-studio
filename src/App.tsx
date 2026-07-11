/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Method } from './components/Method';
import { Instructors } from './components/Instructors';
import { Schedule } from './components/Schedule';
import { Memberships } from './components/Memberships';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      // Toggle class on the html root element when scrolled past the hero threshold (e.g., 80px)
      document.documentElement.classList.toggle('is-scrolled', window.scrollY > 80);
    };

    handleScroll(); // Check initially
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-sage selection:text-cream overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Method />
        <Instructors />
        <Schedule />
        <Memberships />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
