/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { brandDetails } from '../data/brandData';
import heroBg from '../assets/images/luxe_locs_hero_1782434305439.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso text-cream pt-20"
    >
      {/* Premium Ambient Background Image - Styled locs close-up */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Beautiful meticulously styled locs"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_8s_infinite] transition-transform duration-1000"
          referrerPolicy="no-referrer"
          id="hero-background-image"
        />
        {/* Soft elegant gradient overlays for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-transparent md:bg-gradient-to-r" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl flex flex-col justify-center items-start text-left">
          
          {/* Accent micro badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
            id="hero-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
            <span className="font-sans text-xs tracking-widest font-semibold uppercase text-gold">
              Precision. Patience. Sacred Care.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight"
            id="hero-headline"
          >
            Your Crown Care <br />
            <span className="text-gold italic font-medium">Journey</span> Starts Here
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg sm:text-xl text-beige/90 max-w-xl mb-10 leading-relaxed font-light"
            id="hero-subheadline"
          >
            Transform Your Crown. Transform Your Confidence. Embrace a sanctuary where cultural beauty meets holistic wellness.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            id="hero-ctas"
          >
            <a
              href={brandDetails.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 text-espresso font-semibold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-gold/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              id="hero-book-now-button"
            >
              <Calendar className="w-4 h-4" />
              Book Crown Care Consultation
            </a>
            
            <a
              href={brandDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-cream hover:text-white border border-beige/40 hover:border-white font-semibold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-full transition-all duration-300"
              id="hero-whatsapp-button"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 border-t border-beige/10 pt-8 w-full max-w-xl"
            id="hero-trust-line"
          >
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full border border-gold bg-taupe/40 flex items-center justify-center text-[10px] font-bold text-white uppercase">ATL</span>
              <span className="w-8 h-8 rounded-full border border-gold bg-espresso flex items-center justify-center text-[10px] font-bold text-gold uppercase">#106</span>
            </div>
            <p className="font-sans text-xs tracking-wider text-beige/60 font-medium">
              {brandDetails.trustLine}
            </p>
          </motion.div>

        </div>
      </div>

      {/* Decorative vertical spacer line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-gold to-transparent" />
    </section>
  );
}
