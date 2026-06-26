/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { brandDetails } from '../data/brandData';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40" id="sticky-whatsapp-widget">
      <a
        href={brandDetails.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full p-3.5 sm:px-5 sm:py-3.5 shadow-2xl border-2 border-gold/60 hover:scale-105 active:scale-95 hover:shadow-emerald-500/20 hover:border-white transition-all duration-300 group"
        id="whatsapp-sticky-trigger"
      >
        {/* Pulsating green ambient radial shadow overlay */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 scale-110 group-hover:scale-125 transition-transform duration-700 animate-ping pointer-events-none" />
        
        {/* Gold sparkling highlight */}
        <Sparkles className="absolute -top-1.5 -left-1.5 w-4 h-4 text-gold animate-bounce" />

        <MessageSquare className="w-5 h-5 shrink-0 fill-current text-white" />
        <span className="hidden sm:inline font-sans text-xs font-bold uppercase tracking-widest">
          Consult Yaya
        </span>
      </a>
    </div>
  );
}
