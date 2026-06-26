/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, MessageSquare } from 'lucide-react';
import { brandDetails } from '../data/brandData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#about' },
    { name: 'Crown Care Services', href: '#services' },
    { name: 'Transformations', href: '#portfolio' },
    { name: 'The Sanctuary Suite', href: '#space' },
    { name: 'Journal & SEO', href: '#journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-espresso/95 backdrop-blur-md shadow-lg border-b border-taupe/20 py-3'
          : 'bg-transparent py-5'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand area */}
          <a href="#home" className="flex flex-col group" id="brand-logo-link">
            <span className={`font-serif text-2xl tracking-wide font-semibold transition-colors duration-300 ${scrolled ? 'text-cream' : 'text-espresso md:text-cream'}`}>
              YAYA STYLED
            </span>
            <span className="font-sans text-[10px] tracking-widest text-gold uppercase font-medium mt-0.5 group-hover:text-beige transition-colors">
              Crown Care • Ayanna Polite
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-8 items-center" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium tracking-wide relative py-2 group transition-colors duration-300 ${
                  scrolled ? 'text-cream/90 hover:text-gold' : 'text-espresso md:text-cream/90 hover:text-gold'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center space-x-4" id="desktop-ctas">
            <a
              href={brandDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                scrolled
                  ? 'border-gold text-gold hover:bg-gold hover:text-espresso'
                  : 'border-espresso text-espresso hover:bg-espresso hover:text-cream md:border-gold md:text-gold md:hover:bg-gold md:hover:text-espresso'
              }`}
              id="header-whatsapp-cta"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Consult on WhatsApp
            </a>
            <a
              href={brandDetails.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold hover:bg-gold/90 text-espresso px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
              id="header-book-cta"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu button */}
          <div className="flex lg:hidden" id="mobile-menu-trigger-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled ? 'text-cream hover:text-gold' : 'text-espresso md:text-cream hover:text-gold'
              }`}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-espresso border-b border-taupe/20"
            id="mobile-nav-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-cream hover:bg-taupe/20 hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-taupe/20 flex flex-col space-y-3 px-3">
                <a
                  href={brandDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md border border-gold text-gold text-sm font-semibold uppercase tracking-wider hover:bg-gold/10 transition-all"
                  id="mobile-whatsapp-cta"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Consult
                </a>
                <a
                  href={brandDetails.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gold text-espresso px-4 py-3 rounded-md text-sm font-semibold uppercase tracking-wider hover:bg-gold/90 transition-all"
                  id="mobile-book-cta"
                >
                  <Calendar className="w-4 h-4" />
                  Book Crown Care
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
