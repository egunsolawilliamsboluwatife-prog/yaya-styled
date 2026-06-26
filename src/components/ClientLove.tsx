/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';
import { testimonialsData } from '../data/brandData';

export default function ClientLove() {
  return (
    <section id="testimonials" className="py-24 bg-espresso text-cream relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[radial-gradient(circle,rgba(201,166,107,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(166,138,100,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs tracking-widest font-semibold uppercase text-gold mb-2 inline-flex items-center gap-1.5 justify-center">
            <Heart className="w-3.5 h-3.5 text-gold fill-current" />
            Client Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight" id="testimonials-headline">
            Look Good. Feel Good. <br className="hidden sm:inline" />
            <span className="text-gold italic font-normal">Be Treated Better.</span>
          </h2>
          <p className="font-sans text-base text-beige/80 leading-relaxed">
            What our clients experience in the private, intentional sanctuary of Suite #106. Read real, documented testimonials from clients who value precision, luxury, and restorative crown care.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {testimonialsData.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/[0.03] border border-taupe/20 rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 relative group flex flex-col justify-between"
              id={`testimonial-card-${test.id}`}
            >
              {/* Giant elegant decorative quote icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/10 group-hover:text-gold/20 transition-colors" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4.5 h-4.5 text-gold fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-sm sm:text-base italic text-beige/90 leading-relaxed mb-8 relative z-10">
                  {test.quote}
                </p>
              </div>

              {/* Author Area with circle avatar and gold border */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full border border-gold translate-x-0.5 translate-y-0.5" />
                  <img
                    src={test.image}
                    alt={test.author}
                    className="w-12 h-12 rounded-full object-cover relative z-10 border border-espresso"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white mb-0.5">
                    {test.author}
                  </h4>
                  <p className="font-sans text-xs text-gold uppercase tracking-widest font-semibold">
                    {test.title}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Highlight trust count details */}
        <div className="mt-20 text-center" id="testimonials-trust-footer">
          <div className="inline-flex items-center gap-6 bg-white/[0.02] border border-taupe/20 px-8 py-4 rounded-2xl">
            <div className="text-left">
              <p className="font-serif text-2xl font-bold text-gold">4.9 ★★★★★</p>
              <p className="font-sans text-[10px] text-beige/50 uppercase tracking-widest">Average Client Rating</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-left">
              <p className="font-serif text-2xl font-bold text-white">100%</p>
              <p className="font-sans text-[10px] text-beige/50 uppercase tracking-widest font-medium">1-on-1 Attention</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
