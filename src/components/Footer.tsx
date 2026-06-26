/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, Smartphone, Mail, ArrowUpRight, ShieldAlert, Heart, Calendar } from 'lucide-react';
import { brandDetails } from '../data/brandData';
import starterLocsAfter from '../assets/images/starter_locs_after_1782434744341.jpg';

export default function Footer() {
  // Mock Instagram Feed - representing real @yayastyled content
  const instagramFeed = [
    {
      id: 'ig-1',
      imageUrl: starterLocsAfter,
      caption: 'Pristine diamond parting on starter locs. Perfection in every grid.'
    },
    {
      id: 'ig-2',
      imageUrl: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=300&q=80',
      caption: 'Microlocs Interlocking install. Lightweight, flowing, elegant.'
    },
    {
      id: 'ig-3',
      imageUrl: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=300&q=80',
      caption: 'Root rehabilitation and loc crochet repairs. Natural body restored.'
    },
    {
      id: 'ig-4',
      imageUrl: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=300&q=80',
      caption: 'Two-strand twist protective style styled on locs. Ready for ATL summer.'
    }
  ];

  return (
    <footer className="bg-espresso text-cream pt-24 pb-12 border-t border-taupe/20 relative overflow-hidden" id="main-footer">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-taupe/15">
          
          {/* Column 1: Brand Info & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex flex-col group">
              <span className="font-serif text-2xl tracking-wide font-semibold text-white group-hover:text-gold transition-colors">
                YAYA STYLED
              </span>
              <span className="font-sans text-[10px] tracking-widest text-gold uppercase font-semibold mt-0.5">
                Crown Care by Ayanna Polite
              </span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-beige/70 leading-relaxed">
              "Transforming You Inside & Out." Atlanta’s premier independent Master Loctician & Wellness Coach delivering precise diamond grids, micro installs, and crochet repair rituals from Suite #106.
            </p>

            <div className="space-y-3 pt-2" id="footer-contact-details">
              <a
                href={brandDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-beige/80 hover:text-gold transition-colors"
              >
                <Smartphone className="w-4 h-4 text-gold shrink-0" />
                <span>WhatsApp: {brandDetails.contactNumber}</span>
              </a>
              <a
                href={`mailto:${brandDetails.email}`}
                className="flex items-center gap-3 text-xs text-beige/80 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{brandDetails.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Instagram Live Feed Integration */}
          <div className="lg:col-span-5 space-y-6" id="footer-instagram-feed">
            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-1 flex items-center gap-2">
                <Instagram className="w-4.5 h-4.5 text-gold" />
                Latest from @yayastyled
              </h4>
              <p className="font-sans text-xs text-beige/50">
                Instagram community of over 10K loc lovers. Sourced live.
              </p>
            </div>

            {/* Instagram Grid Mockup */}
            <div className="grid grid-cols-4 gap-3">
              {instagramFeed.map((img) => (
                <a
                  key={img.id}
                  href={brandDetails.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square rounded-lg overflow-hidden group border border-white/5 bg-cream/10"
                  title={img.caption}
                >
                  <img
                    src={img.imageUrl}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-gold" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              Sanctuary Access
            </h4>
            <ul className="space-y-3" id="footer-quick-links">
              {[
                { name: 'Crown Consultation', href: '#services' },
                { name: 'Ritual Maintenance', href: '#services' },
                { name: 'Microlocs & Starter Installs', href: '#services' },
                { name: 'Before / After Portfolio', href: '#portfolio' },
                { name: 'Schedule Appointment', href: '#booking' },
                { name: 'Education Journal', href: '#journal' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-beige/70 hover:text-gold transition-colors flex items-center gap-1"
                  >
                    <span className="text-gold">▪</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Salon Policies Section (Crucial for luxury boutique suites) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-taupe/15 text-xs text-beige/65 leading-relaxed" id="footer-policies">
          
          <div className="space-y-2">
            <h5 className="font-sans font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-gold shrink-0" />
              1. Booking & Deposits
            </h5>
            <p>
              All luxury installations, microlocs, and comprehensive repair services require a secure reservation deposit via Acuity. Deposits are applied 100% towards your total service fee.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-sans font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-gold shrink-0" />
              2. Cancellation Policy
            </h5>
            <p>
              We value your private sanctuary time. Please reschedule or cancel appointments at least 48 hours in advance. Cancellations made under 48 hours will result in deposit forfeiture.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-sans font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-gold shrink-0" />
              3. New Client Mandates
            </h5>
            <p>
              All first-time clients wishing to start a Microlocs or Starter Loc program must undergo a physical Crown Care Consultation prior to install schedules to design healthy parting grids.
            </p>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-sans text-[11px] text-beige/40">
            © 2026 Yaya Styled. All Rights Reserved. Designed for Crown Care by Ayanna Polite in Atlanta, GA.
          </p>

          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-beige/40 font-semibold" id="footer-legal-links">
            <a href="#booking" className="hover:text-gold transition-colors">Booking Policies</a>
            <span className="text-taupe/30">•</span>
            <a href="#about" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span className="text-taupe/30">•</span>
            <a href="#space" className="hover:text-gold transition-colors">Terms of Sanctuary</a>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-beige/40">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-gold fill-current" />
            <span>for natural hair excellence.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
