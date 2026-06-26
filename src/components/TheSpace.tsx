/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Clock, Coffee, Shield, Music, Compass } from 'lucide-react';
import { brandDetails } from '../data/brandData';
import suiteSanctuary from '../assets/images/suite_sanctuary_1782434336563.jpg';

export default function TheSpace() {
  const features = [
    {
      icon: Shield,
      title: '1-on-1 Complete Privacy',
      desc: 'No crowded chairs or salon gossip. It’s just you, Ayanna, and your crown in a calm, focused environment.'
    },
    {
      icon: Music,
      title: 'Soothing Sensory Flow',
      desc: 'Curated calming playlists, warm ambient lighting, and pure aromatherapy to quiet your mind.'
    },
    {
      icon: Coffee,
      title: 'Restorative Refreshments',
      desc: 'Enjoy warm organic herbal teas, premium spring water, and light nourishing snacks during your install.'
    }
  ];

  return (
    <section id="space" className="py-24 bg-cream text-espresso relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs tracking-widest font-semibold uppercase text-gold mb-2 inline-flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" />
            The Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso mb-6" id="space-headline">
            An Intentional, Calm, <span className="text-taupe italic font-normal">Private Sanctuary</span>
          </h2>
          <p className="font-sans text-base text-espresso/80 leading-relaxed">
            Welcome to Suite #106. Located inside the premium Phenix Salon Suites Edgewood, our studio is designed from the ground up as a high-end wellness sanctuary meets cultural hair atelier.
          </p>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Descriptions & Map */}
          <div className="lg:col-span-6 space-y-10" id="space-description-column">
            
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-espresso leading-tight">
                Designed for Rest, Built for Precision
              </h3>
              <p className="font-sans text-sm sm:text-base text-espresso/75 leading-relaxed">
                Ayanna deliberately chose an independent private suite over a traditional open salon floor. The journey of starting, maintaining, or repairing locs is deeply personal and often emotional. Here, you are free to unwind, read, meditate, work, or share stories in absolute safety and peace.
              </p>
            </div>

            {/* List of custom space features */}
            <div className="space-y-6 bg-white border border-taupe/15 rounded-2xl p-6 shadow-sm" id="space-features">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="p-2 bg-gold/10 text-gold rounded-xl h-10 w-10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm tracking-wide uppercase text-espresso mb-1">
                        {f.title}
                      </h4>
                      <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Address & Operational Hours Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-taupe/20">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-espresso mb-1">
                    Location Address
                  </h5>
                  <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                    Suite #106, Phenix Salon Suites<br />
                    Edgewood Retail District<br />
                    Atlanta, Georgia
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-espresso mb-1">
                    Hours & Access
                  </h5>
                  <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                    By Appointment Only<br />
                    Tues - Sat: 9:00 AM - 6:00 PM<br />
                    Secure free parking available
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Serene interior photography & Interactive Map */}
          <div className="lg:col-span-6 space-y-8" id="space-photos-column">
            
            {/* Main Sanctuary Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg group bg-espresso/10">
              <img
                src={suiteSanctuary}
                alt="Suite #106 private sanctuary interior view"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
                id="space-suite-photo"
              />
              <div className="absolute top-4 right-4 bg-espresso/90 text-gold border border-gold/30 px-3 py-1.5 rounded-full backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Suite #106 Private Door
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent p-6 text-cream">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                  Phenix Salon Suites Edgewood
                </p>
                <p className="font-serif text-base italic text-white">
                  "Step away from the noise and embrace intentional, peaceful luxury."
                </p>
              </div>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="border border-taupe/20 rounded-2xl overflow-hidden shadow-md aspect-video relative bg-cream/50" id="google-map-iframe-container">
              {/* Premium Responsive Map Embed - Centered on Edgewood Retail District Atlanta */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.9205562723653!2d-84.3491416847926!3d33.750519380689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5015b6d56d817%3A0xc39f993d596489a2!2sPhenix%20Salon%20Suites%20Edgewood!5e0!3m2!1sen!2sus!4v1719264421453!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yaya Styled - Phenix Salon Suites Edgewood Address Map"
                id="space-map-embed"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
