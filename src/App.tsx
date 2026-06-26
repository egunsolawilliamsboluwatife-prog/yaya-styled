/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ClientLove from './components/ClientLove';
import TheSpace from './components/TheSpace';
import BookYourJourney from './components/BookYourJourney';
import Journal from './components/Journal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative overflow-hidden font-sans bg-cream text-espresso selection:bg-gold selection:text-espresso" id="yaya-styled-root-app">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Single Page Sections Grid */}
      <main>
        
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Ayanna */}
        <About />

        {/* Section 3: Crown Care Journey / Services */}
        <Services />

        {/* Section 4: Transformations & Portfolio with Lightbox comparison */}
        <Portfolio />

        {/* Section 5: Client Love / Testimonials */}
        <ClientLove />

        {/* Section 6: The Space / Suite #106 */}
        <TheSpace />

        {/* Section 7: Book Your Journey / Specials / Lead Magnet */}
        <BookYourJourney />

        {/* Section 8: Journal / SEO Blog */}
        <Journal />

      </main>

      {/* Footer & Instagram mockup */}
      <Footer />

      {/* Floating Sticky WhatsApp Quick Chat */}
      <WhatsAppButton />
    </div>
  );
}
