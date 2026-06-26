/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { brandDetails } from '../data/brandData';
import ayannaPortrait from '../assets/images/ayanna_portrait_1782434320934.jpg';

export default function About() {
  const pillars = [
    {
      icon: Award,
      title: 'Master Loctician',
      desc: 'Certified expert specializing in pristine grid parting, starter installs, and advanced crochet restoration.'
    },
    {
      icon: Heart,
      title: 'Wellness Coach',
      desc: 'Holistic approach integrating mental peace, hair hydration, and scalp physical therapy.'
    },
    {
      icon: ShieldCheck,
      title: 'Private Sanctuary',
      desc: 'Dedicated 1-on-1 sessions at Suite #106, Phenix Salon Suites Edgewood. Zero rush, absolute peace.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-cream text-espresso relative overflow-hidden">
      {/* Decorative gold background accent blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(201,166,107,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(166,138,100,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Her story in her voice */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <span className="font-sans text-xs tracking-widest font-semibold uppercase text-gold mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Meet Ayanna Polite
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso mb-8 leading-tight" id="about-headline">
              From Self-Discovery <br />
              <span className="text-taupe italic font-normal">to Sacred Practice</span>
            </h2>

            {/* Main personal greeting block */}
            <div className="border-l-4 border-gold pl-6 py-2 mb-8 bg-beige/30 rounded-r-xl pr-4" id="about-voice-quote">
              <p className="font-serif text-lg sm:text-xl italic text-espresso/95 leading-relaxed">
                "{brandDetails.aboutVoiceQuote}"
              </p>
            </div>

            {/* Full brand story */}
            <div className="font-sans text-base text-espresso/80 space-y-6 leading-relaxed mb-8" id="about-story-content">
              {brandDetails.aboutFullStory.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Pillars / Trust Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-taupe/20" id="about-pillars">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="flex flex-col">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-gold/10 text-gold">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <h3 className="font-sans font-semibold text-sm tracking-wide text-espresso uppercase">
                        {p.title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Professional Warm Photo Placeholder with gold styling */}
          <div className="lg:col-span-5 relative" id="about-photo-column">
            
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Decorative Background Box */}
              <div className="absolute -inset-4 rounded-2xl border border-gold/30 translate-x-4 translate-y-4 -z-10" />
              
              {/* Solid Background Container */}
              <div className="absolute inset-0 bg-espresso rounded-2xl -z-10 shadow-xl" />

              {/* Main Image */}
              <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-espresso/40 flex items-center justify-center relative group">
                <img
                  src={ayannaPortrait}
                  alt="Ayanna Polite, ATL Master Loctician"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  id="about-ayanna-photo"
                />
                
                {/* Real Work Badge Overlaid */}
                <div className="absolute top-4 right-4 bg-espresso/90 text-gold border border-gold/30 px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-sans text-[10px] tracking-widest font-semibold uppercase">
                    Master Loctician
                  </span>
                </div>

                {/* Info Card Overlay bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso via-espresso/80 to-transparent p-6 text-cream">
                  <h4 className="font-serif text-lg font-bold text-white mb-0.5">Ayanna Polite</h4>
                  <p className="font-sans text-xs text-gold uppercase tracking-widest font-medium mb-3">
                    Suite #106 Atlanta, GA
                  </p>
                  <p className="font-sans text-xs text-beige/80 italic">
                    "Transforming you inside and out, because your crown is a sacred ritual."
                  </p>
                </div>
              </div>

            </div>

            {/* Quick trust metrics floating bubble */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-taupe/20 p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-xs backdrop-blur-sm bg-white/95">
              <div className="bg-gold text-espresso w-10 h-10 rounded-lg flex items-center justify-center font-serif text-xl font-bold">
                10k
              </div>
              <div>
                <p className="font-sans text-xs font-bold text-espresso uppercase tracking-wider mb-0.5">
                  Loved on Instagram
                </p>
                <p className="font-sans text-[10px] text-espresso/60">
                  Join our community @yayastyled
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
