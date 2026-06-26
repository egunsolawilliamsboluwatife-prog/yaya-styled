/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X, BookOpen, Tag } from 'lucide-react';
import { journalPosts, brandDetails } from '../data/brandData';
import { JournalPost } from '../types';

export default function Journal() {
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);

  return (
    <section id="journal" className="py-24 bg-cream text-espresso relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-widest font-semibold uppercase text-gold mb-2 inline-flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            Crown Wisdom Journal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso mb-6" id="journal-headline">
            Education, Science <span className="text-taupe italic font-normal">& Community</span>
          </h2>
          <p className="font-sans text-base text-espresso/80 leading-relaxed">
            Meticulous care goes beyond the chair. Explore our professional guides to hair science, installation options, and protective maintenance designed for the Atlanta loc community.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="journal-grid">
          {journalPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-taupe/15 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              id={`journal-post-card-${post.id}`}
            >
              <div>
                {/* Article Image Canvas */}
                <div className="relative aspect-video overflow-hidden bg-espresso/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-[9px] tracking-widest font-bold uppercase text-cream bg-espresso/90 px-3 py-1.5 rounded-md border border-white/10 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Text Context */}
                <div className="p-6 md:p-8 space-y-4">
                  
                  {/* Date & Read Time */}
                  <div className="flex items-center gap-4 text-[10px] font-bold text-taupe uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {post.date}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Content Snippet */}
                  <p className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed line-clamp-3">
                    {post.snippet}
                  </p>

                </div>
              </div>

              {/* Action Trigger */}
              <div className="p-6 md:px-8 md:pb-8 pt-0 border-t border-taupe/10 mt-auto flex items-center justify-between">
                
                {/* Display tiny SEO target tag indicator */}
                <div className="flex gap-1">
                  <span className="text-[10px] text-espresso/40 font-mono tracking-tight bg-cream/80 px-2 py-0.5 rounded border border-taupe/10">
                    #{post.keywords[0].replace(' ', '')}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-espresso hover:text-gold font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  id={`read-article-btn-${post.id}`}
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* SEO citation tags list bottom */}
        <div className="mt-16 text-center border-t border-taupe/20 pt-8" id="journal-seo-tags-area">
          <p className="font-sans text-[10px] text-espresso/40 uppercase tracking-widest font-semibold mb-3">
            Top Atlanta Area Loc Search Keywords:
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {['microlocs Atlanta', 'starter locs Atlanta', 'loc repairs Atlanta', 'best loctician Atlanta', 'certified microlocs installer', 'crochet hair repair georgia', 'Phenix suites edgewood styling'].map((tag) => (
              <span
                key={tag}
                className="bg-white text-espresso/60 border border-taupe/15 px-3 py-1 rounded-full text-[10px] font-mono shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* FULL READER MODAL OVERLAY */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4" id="journal-reader-modal">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-espresso/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-cream border border-taupe/30 rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative z-10"
            >
              
              {/* Image banner header */}
              <div className="relative aspect-video w-full overflow-hidden bg-espresso/15">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Close Button top-right */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-espresso text-white hover:text-gold p-2 rounded-full shadow-lg transition-colors z-20"
                  id="reader-close-button"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-sans text-[10px] tracking-widest font-bold uppercase text-gold bg-gold/10 border border-gold/20 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-md inline-block mb-3">
                    {selectedPost.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {selectedPost.title}
                  </h3>
                </div>
              </div>

              {/* Reader Body content */}
              <div className="p-8 space-y-6 overflow-y-auto max-h-[50vh]" id="reader-body-paragraphs">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-taupe uppercase tracking-widest pb-4 border-b border-taupe/15">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold" />
                    Published: {selectedPost.date}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold" />
                    Est. {selectedPost.readTime}
                  </span>
                </div>

                {/* Main article content blocks */}
                <div className="font-sans text-sm sm:text-base text-espresso/85 space-y-5 leading-relaxed">
                  {selectedPost.content.map((p, pIdx) => (
                    <p key={pIdx}>
                      {p}
                    </p>
                  ))}
                </div>

                {/* Keywords tag visualization for SEO awareness */}
                <div className="pt-6 border-t border-taupe/15">
                  <h4 className="font-sans text-xs font-bold uppercase text-espresso mb-3 flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-gold" />
                    SEO Keywords Sourced from Strategic Report:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.keywords.map((kw, kwIdx) => (
                      <span
                        key={kwIdx}
                        className="bg-white text-gold font-mono text-[10px] font-bold border border-gold/20 px-3 py-1.5 rounded-md shadow-sm"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Reader Footer action */}
              <div className="p-6 bg-cream border-t border-taupe/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-sans text-xs text-espresso/60 italic">
                  "Guiding Atlanta’s natural beauty — one crown at a time."
                </p>
                <div className="flex gap-2 w-full sm:w-auto">
                  <a
                    href={brandDetails.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial bg-gold hover:bg-gold/90 text-espresso font-bold uppercase tracking-widest text-[10px] px-6 py-3.5 rounded-xl text-center shadow-md transition-colors"
                  >
                    Schedule Consultation
                  </a>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-3.5 border border-taupe/30 hover:border-espresso rounded-xl text-[10px] font-bold uppercase tracking-wider text-espresso transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
