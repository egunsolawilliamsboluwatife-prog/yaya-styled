/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Calendar, ArrowUpRight, HelpCircle } from 'lucide-react';
import { servicesData, brandDetails } from '../data/brandData';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-espresso text-cream relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream/5 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[radial-gradient(circle,rgba(201,166,107,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs tracking-widest font-semibold uppercase text-gold mb-2 inline-block">
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight" id="services-headline">
            The Crown Care <span className="text-gold italic font-normal">Journey</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-beige/80 leading-relaxed">
            We categorize our services into four primary, sacred stages of maintenance and major transformation. No matter where you are in your loc journey, Ayanna provides supportive, high-value partnership.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col justify-between bg-white/[0.03] border border-taupe/20 hover:border-gold/50 rounded-2xl p-6 lg:p-8 hover:bg-white/[0.05] transition-all duration-300 group shadow-lg hover:shadow-gold/5"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Card category & Index */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-sans text-[10px] tracking-widest font-bold uppercase text-gold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                    {service.category}
                  </span>
                  <span className="font-serif text-xl italic text-taupe/40 font-bold">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                {/* Pricing / Duration */}
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-beige/70 mb-5 border-y border-white/10 py-2">
                  <span>{service.priceInfo}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{service.duration || 'Flexible'}</span>
                </div>

                {/* Service Description */}
                <p className="font-sans text-xs sm:text-sm text-beige/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Benefits */}
                <div className="mb-6">
                  <h4 className="font-sans text-[11px] tracking-wider font-bold uppercase text-white mb-3 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-gold" />
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-beige/80 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-gold mt-1.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ideal Client & Booking */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="bg-espresso/50 border border-taupe/20 rounded-xl p-3.5 mb-5">
                  <h5 className="font-sans text-[10px] tracking-wider font-bold uppercase text-gold mb-1.5 flex items-center gap-1">
                    <HelpCircle className="w-3 h-3" />
                    Ideal For:
                  </h5>
                  <p className="font-sans text-[11px] text-beige/70 leading-relaxed">
                    {service.idealClient}
                  </p>
                </div>

                <a
                  href={service.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gold text-espresso hover:bg-gold/90 font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl transition-all duration-300"
                  id={`book-now-btn-${service.id}`}
                >
                  Book Now
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic call to action prompt */}
        <div className="mt-16 text-center" id="services-footer-cta">
          <p className="font-sans text-sm text-beige/60">
            *Custom schedules, memberships, and monthly packages are detailed during your consultation. 
            <a href="#booking" className="text-gold font-medium ml-1.5 underline hover:text-white transition-colors">
              Read New Client Specials below.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
