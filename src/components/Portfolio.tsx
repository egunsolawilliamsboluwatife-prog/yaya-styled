/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ArrowRight, X, Play, RotateCcw, HelpCircle, Instagram } from 'lucide-react';
import { portfolioData, brandDetails } from '../data/brandData';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage for before/after slider
  const [isResizing, setIsResizing] = useState<boolean>(false);
  
  // Instant visual check states for cards directly on the grid
  const [gridShowAfter, setGridShowAfter] = useState<Record<string, boolean>>({
    'portfolio-1': true,
    'portfolio-2': true,
    'portfolio-3': true,
    'portfolio-4': true,
  });

  const categories = [
    { id: 'all', label: 'All Journeys' },
    { id: 'starter', label: 'Starter Locs' },
    { id: 'microlocs', label: 'Microlocs' },
    { id: 'repairs', label: 'Repairs & Extensions' },
    { id: 'styled', label: 'Styled Looks' },
  ];

  const filteredItems = filter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === filter);

  const toggleGridState = (id: string) => {
    setGridShowAfter(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isResizing) { // drag or clicked
      const container = e.currentTarget.getBoundingClientRect();
      handleSliderMove(e.clientX, container);
    }
  };

  // Video Process Reels from PDF
  const processReels = [
    {
      id: 'DYhagv1t484',
      title: 'Instant Locs Journey Transformation',
      duration: '0:58',
      views: '45K',
      description: 'A comprehensive transformation going from short, loose natural hair to fully locked, volumetric extensions.'
    },
    {
      id: 'DYh5Z05qlIV',
      title: 'Micro Locs Install Vlog & Grid Partings',
      duration: '1:12',
      views: '110K',
      description: 'Step-by-step installation showing the precise, artistic sectioning, scalp prep, and interlocking technique.'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-cream text-espresso relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-widest font-semibold uppercase text-gold mb-2 inline-block">
            Transformations Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso mb-6" id="portfolio-headline">
            Precision. <span className="text-taupe italic font-normal">Patience.</span> Sacred Care.
          </h2>
          <p className="font-sans text-base text-espresso/80 leading-relaxed">
            Real, fully documented client transformations. Filter through our starter lock designs, microlocs, repairs, and styled finishes. Press <b>"Before / After"</b> to toggle states, or click to engage the interactive comparison slider.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-espresso text-cream shadow-md'
                  : 'bg-white text-espresso border border-taupe/20 hover:border-espresso'
              }`}
              id={`filter-btn-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-taupe/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                id={`portfolio-tile-${item.id}`}
              >
                {/* Visual Canvas Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-espresso/10">
                  
                  {/* Before State */}
                  <img
                    src={item.beforeImage}
                    alt={`${item.title} Before`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      gridShowAfter[item.id] ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* After State */}
                  <img
                    src={item.afterImage}
                    alt={`${item.title} After`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      gridShowAfter[item.id] ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Labels and Toggles */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-sans text-[10px] tracking-widest font-bold uppercase text-cream bg-espresso/80 border border-taupe/30 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-md">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10 flex gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleGridState(item.id);
                      }}
                      className="bg-gold hover:bg-gold/90 text-espresso px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-1"
                      title="Toggle before/after state"
                    >
                      <RotateCcw className="w-3 h-3" />
                      {gridShowAfter[item.id] ? 'Show Before' : 'Show After'}
                    </button>
                  </div>

                  {/* Action hover mask */}
                  <div className="absolute inset-0 bg-espresso/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                       onClick={() => setSelectedItem(item)}>
                    <div className="bg-white/90 text-espresso p-4 rounded-full shadow-lg transform translate-y-4 hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider">
                      <Eye className="w-4 h-4 text-gold" />
                      Interactive Slider
                    </div>
                  </div>

                  {/* Absolute bottom tags */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                    <span className="bg-espresso/90 text-cream text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                      {gridShowAfter[item.id] ? 'AFTER' : 'BEFORE'}
                    </span>
                    {item.id === 'portfolio-2' && (
                      <span className="bg-gold text-espresso text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                        8-week journey
                      </span>
                    )}
                  </div>
                </div>

                {/* Info Text Area */}
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-espresso/70 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-taupe/10">
                    <span className="font-sans text-[11px] italic text-taupe font-medium">
                      {item.caption}
                    </span>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="text-espresso hover:text-gold font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                    >
                      Compare Live
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Process Video Section - Reels integration requested */}
        <div className="bg-espresso text-cream rounded-3xl p-8 lg:p-12 relative overflow-hidden" id="process-reels-showcase">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(201,166,107,0.06)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Reel text explanation */}
            <div className="lg:col-span-4">
              <span className="font-sans text-xs tracking-widest font-semibold uppercase text-gold mb-3 block">
                Social Integration & Transparency
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                Authentic Process <br />
                <span className="text-gold italic font-normal">Reels & Vlogs</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-beige/80 leading-relaxed mb-6">
                Ayanna believes in complete structural transparency. We document our clients' multi-week processes in real-time. Follow the reels on Instagram <b>@yayastyled</b>.
              </p>
              <a
                href={brandDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-cream font-sans text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full border border-white/20 transition-all"
                id="reels-insta-btn"
              >
                <Instagram className="w-4 h-4 text-gold" />
                Follow @yayastyled
              </a>
            </div>

            {/* Visual cards for Reels */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6" id="process-reels-grid">
              {processReels.map((reel) => (
                <div
                  key={reel.id}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between"
                  id={`reel-card-${reel.id}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-gold uppercase tracking-wider font-semibold">
                        Reel Key: {reel.id}
                      </span>
                      <span className="font-sans text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded-full border border-gold/10 font-medium">
                        {reel.duration}
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-white mb-2">
                      {reel.title}
                    </h4>
                    <p className="font-sans text-xs text-beige/60 leading-relaxed mb-6">
                      {reel.description}
                    </p>
                  </div>

                  <a
                    href={`${brandDetails.instagramUrl}/p/${reel.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-gold/10 border border-gold/30 hover:bg-gold hover:text-espresso text-gold px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                    id={`play-reel-btn-${reel.id}`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Watch on Instagram ({reel.views} views)
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* BEFORE / AFTER LIGHTBOX MODAL WITH INTERACTIVE SLIDER */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4" id="portfolio-lightbox-modal">
            {/* Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-espresso/95 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="bg-cream border border-taupe/30 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative z-10 flex flex-col md:flex-row"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 bg-espresso text-white hover:text-gold p-2 rounded-full shadow-md transition-colors"
                id="lightbox-close-button"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Slider Canvas Area (Left) */}
              <div
                className="relative md:w-1/2 aspect-[4/5] bg-espresso overflow-hidden select-none cursor-ew-resize"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsResizing(true)}
                onMouseUp={() => setIsResizing(false)}
                onMouseLeave={() => setIsResizing(false)}
                id="lightbox-slider-container"
              >
                {/* Before Image (Background) */}
                <img
                  src={selectedItem.beforeImage}
                  alt="Before state"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-10 bg-black/70 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                  Before
                </div>

                {/* After Image (Foreground with clipping width based on sliderPosition) */}
                <div
                  className="absolute inset-y-0 left-0 right-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={selectedItem.afterImage}
                    alt="After state"
                    className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-gold text-espresso text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                    After
                  </div>
                </div>

                {/* Slider bar splitter handler */}
                <div
                  className="absolute inset-y-0 w-1 bg-gold cursor-ew-resize flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-gold text-espresso shadow-lg flex items-center justify-center border-2 border-white text-xs font-bold">
                    ↔
                  </div>
                </div>

                {/* Informational helpful nudge */}
                <div className="absolute bottom-4 inset-x-4 bg-black/60 backdrop-blur-sm rounded-lg p-2 text-center text-white text-[10px] font-medium tracking-wide flex items-center justify-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                  Drag across image to compare transformations
                </div>

              </div>

              {/* Story Description Area (Right) */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between" id="lightbox-description-container">
                <div>
                  <span className="font-sans text-[10px] tracking-widest font-bold uppercase text-gold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20 inline-block mb-4">
                    {selectedItem.categoryLabel}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-espresso mb-3">
                    {selectedItem.title}
                  </h3>

                  <p className="font-sans text-[11px] text-taupe italic mb-4">
                    {selectedItem.caption}
                  </p>

                  <p className="font-sans text-sm text-espresso/80 leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  <div className="bg-beige/40 rounded-xl p-4 border border-taupe/10 mb-6">
                    <h4 className="font-sans text-xs font-bold uppercase text-espresso mb-1">
                      Our Approach:
                    </h4>
                    <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                      We plan each crown care journey through scheduled follow-ups, prioritizing hair elasticity, scalp oxygenation, and precise parting structures over quick cosmetic fixes.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-taupe/20">
                  <a
                    href={brandDetails.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-espresso hover:bg-espresso/90 text-cream font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl text-center shadow-md transition-colors"
                    id="lightbox-book-now-cta"
                  >
                    Book This Journey
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-3.5 border border-taupe/30 hover:border-espresso rounded-xl text-xs font-bold uppercase tracking-wider text-espresso transition-colors"
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
