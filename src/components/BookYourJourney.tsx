/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Mail, Gift, Sparkles, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { brandDetails } from '../data/brandData';

export default function BookYourJourney() {
  const [email, setEmail] = useState('');
  const [guideSubscribed, setGuideSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Consultation');

  // Interactive booking calendar simulation details
  const dates = [
    { day: 'Mon', num: '29', month: 'Jun', available: false },
    { day: 'Tue', num: '30', month: 'Jun', available: true },
    { day: 'Wed', num: '01', month: 'Jul', available: true },
    { day: 'Thu', num: '02', month: 'Jul', available: true },
    { day: 'Fri', num: '03', month: 'Jul', available: true },
    { day: 'Sat', num: '04', month: 'Jul', available: false },
  ];

  const slots = [
    '09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'
  ];

  const handleGuideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setGuideSubscribed(true);
      setEmail('');
    }
  };

  const bookingOffers = [
    {
      title: 'Consultation Credit Special',
      desc: 'Your initial $50 consultation fee is credited 100% towards your starter installation or first retwist service when booked within 14 days.',
      icon: Gift
    },
    {
      title: 'Sacred Ritual Membership',
      desc: 'Lock in consistent care. Members receive priority scheduling, complimentary herbal steam treatments, and a 15% discount on 6-month pre-bookings.',
      icon: Sparkles
    }
  ];

  return (
    <section id="booking" className="py-24 bg-espresso text-cream relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(201,166,107,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-92 h-92 bg-[radial-gradient(circle,rgba(201,166,107,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Promotions, specials & newsletter */}
          <div className="lg:col-span-5 space-y-12" id="booking-promo-column">
            
            <div className="space-y-4">
              <span className="font-sans text-xs tracking-widest font-semibold uppercase text-gold">
                Exclusive Programs
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight" id="booking-headline">
                Begin Your <br />
                <span className="text-gold italic font-normal">Restorative Care</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-beige/80 leading-relaxed">
                Take the step from self-discovery to a sacred practice. Secure your appointment below or enroll in our digital community to kickstart your journey.
              </p>
            </div>

            {/* Exclusive Membership Cards */}
            <div className="space-y-6" id="booking-specials-list">
              {bookingOffers.map((offer, idx) => {
                const Icon = offer.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/[0.03] border border-taupe/20 hover:border-gold/30 rounded-2xl p-6 transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      <div className="p-2.5 bg-gold/10 rounded-xl text-gold h-11 w-11 flex items-center justify-center shrink-0">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-white mb-2">
                          {offer.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-beige/70 leading-relaxed">
                          {offer.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Email Lead Capture - "Free Loc Journey Starter Guide" */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8" id="booking-lead-magnet">
              <h3 className="font-serif text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Gift className="w-5 h-5 text-gold" />
                Free Loc Journey Starter Guide
              </h3>
              <p className="font-sans text-xs text-beige/70 leading-relaxed mb-6">
                Receive Ayanna’s expert-compiled guidebook featuring daily hydration recipes, sleep protection methods, and starter expectations directly in your inbox.
              </p>

              <AnimatePresence mode="wait">
                {!guideSubscribed ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleGuideSubmit}
                    className="space-y-3"
                    id="guide-signup-form"
                  >
                    <div className="relative">
                      <Mail className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-beige/40" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full bg-espresso/60 border border-taupe/40 focus:border-gold focus:outline-none rounded-full py-4 pl-12 pr-6 text-xs text-white placeholder-beige/40 transition-all font-sans"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold/90 text-espresso font-bold uppercase tracking-widest text-xs py-4 rounded-full shadow-md transition-colors flex items-center justify-center gap-2"
                      id="guide-submit-btn"
                    >
                      Instant Download
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gold/10 border border-gold/30 rounded-xl p-5 text-center flex flex-col items-center gap-2.5"
                    id="guide-success-container"
                  >
                    <CheckCircle className="w-8 h-8 text-gold animate-bounce" />
                    <h4 className="font-serif text-lg font-bold text-white">
                      Your Starter Guide Is on the Way!
                    </h4>
                    <p className="font-sans text-xs text-beige/80 leading-relaxed">
                      We've sent a high-resolution download link to your email. Check your spam or promotions folder if it doesn't arrive in 5 minutes!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Acuity scheduling interactive portal mockup */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 text-espresso shadow-xl border border-taupe/15" id="booking-portal-column">
            
            {/* Live Header */}
            <div className="flex items-center justify-between pb-6 border-b border-taupe/15 mb-6">
              <div>
                <span className="font-sans text-[10px] bg-espresso/10 text-espresso px-3 py-1 rounded-full border border-espresso/5 font-bold tracking-widest uppercase">
                  Acuity Scheduling Portal
                </span>
                <h3 className="font-serif text-xl font-bold text-espresso mt-2">
                  Select Crown Service
                </h3>
              </div>
              <a
                href={brandDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-full transition-colors flex items-center justify-center"
                title="Message on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
            </div>

            {/* Quick Category Tab Toggles */}
            <div className="flex flex-wrap gap-2 mb-6" id="booking-tab-toggles">
              {['Consultation', 'Ritual Care', 'The Journey', 'Transformation'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gold text-espresso font-bold'
                      : 'bg-cream text-espresso hover:bg-taupe/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Booking Portal Body Mockup */}
            <div className="space-y-6" id="booking-mock-details">
              
              <div className="bg-cream/40 border border-taupe/15 rounded-2xl p-5">
                <h4 className="font-serif text-base font-bold text-espresso mb-1">
                  {activeCategory === 'Consultation' && 'Crown Care Consultation — starting $50'}
                  {activeCategory === 'Ritual Care' && 'Sacred Retwist & Maintenance — starting $120'}
                  {activeCategory === 'The Journey' && 'Microlocs & Starter Installs — Custom Quote'}
                  {activeCategory === 'Transformation' && 'Repairs & Reattachments — Consultation Required'}
                </h4>
                <p className="font-sans text-xs text-espresso/70 leading-relaxed mb-3">
                  {activeCategory === 'Consultation' && '30-45 Minute professional session analyzing scalp density, texture, and designing a multi-week crown roadmap.'}
                  {activeCategory === 'Ritual Care' && '2-3 Hour thorough cleanse, clarifying steam, herbal scalp oiling, and precise, tension-free palm rolling.'}
                  {activeCategory === 'The Journey' && '1-2 Days elite-tier parting grid installation using interlock, traditional twist, or instant crochet methods.'}
                  {activeCategory === 'Transformation' && 'Invisible re-weaving to repair thinning points, or seamless human hair loc extension application.'}
                </p>
                <div className="flex items-center gap-3 text-xs font-bold text-gold uppercase tracking-wider">
                  <span>Suite #106 Sanctuary</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-taupe" />
                  <span>1-on-1 Rest</span>
                </div>
              </div>

              {/* simulated date picker */}
              <div>
                <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-espresso/60 mb-3">
                  1. Choose Date
                </h5>
                <div className="grid grid-cols-6 gap-2" id="booking-mock-dates">
                  {dates.map((d, i) => (
                    <button
                      key={i}
                      disabled={!d.available}
                      className={`py-3.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        d.available
                          ? i === 2
                            ? 'bg-espresso text-cream border-espresso font-bold scale-102 shadow-md'
                            : 'bg-white border-taupe/20 hover:border-gold'
                          : 'bg-cream/40 border-cream/50 text-espresso/30 cursor-not-allowed'
                      }`}
                    >
                      <span className="font-sans text-[10px] tracking-widest uppercase opacity-70 mb-1">{d.day}</span>
                      <span className="font-serif text-base font-bold leading-none">{d.num}</span>
                      <span className="font-sans text-[9px] uppercase tracking-wider opacity-60 mt-1">{d.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* simulated time picker */}
              <div>
                <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-espresso/60 mb-3">
                  2. Choose Time (Eastern Time)
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" id="booking-mock-times">
                  {slots.map((slot, i) => (
                    <button
                      key={i}
                      className={`py-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        i === 1
                          ? 'bg-gold text-espresso border-gold font-bold shadow-sm'
                          : 'bg-white border-taupe/20 hover:border-gold'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Final Booking Redirect Button */}
            <div className="mt-8 pt-6 border-t border-taupe/15 text-center">
              <a
                href={brandDetails.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full bg-espresso hover:bg-espresso/90 text-cream font-bold uppercase tracking-widest text-xs py-4.5 rounded-xl shadow-lg transition-all"
                id="booking-confirm-redirect-btn"
              >
                <Calendar className="w-4 h-4 text-gold" />
                Proceed to Acuity Scheduling Calendar
              </a>
              <p className="font-sans text-[10px] text-espresso/50 uppercase tracking-widest mt-3.5 font-medium">
                *Secure scheduling powered by Acuity. You will not be charged today.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
