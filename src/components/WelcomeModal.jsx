import React, { useState, useEffect } from 'react';
import { templeData } from '../data/templeData';
import { Sparkles, ArrowRight, Sun } from 'lucide-react';

export default function WelcomeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-temple-stone/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn">
      <div className="relative w-full max-w-lg overflow-hidden bg-temple-cream rounded-2xl border-2 border-temple-gold/40 shadow-2xl text-center p-6 md:p-8">
        
        {/* Top Decorative Temple Arc Accent */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-temple-maroon via-temple-gold to-temple-maroon" />
        
        {/* Sacred Symbol Top Motif */}
        <div className="flex justify-center mt-2 mb-4">
          <div className="w-16 h-16 rounded-full bg-temple-maroon/10 border border-temple-gold/40 flex items-center justify-center text-temple-gold shadow-inner">
            <span className="text-3xl font-serif font-bold text-temple-maroon">ௐ</span>
          </div>
        </div>

        {/* Trichittrambalam Opening */}
        <p className="text-sm font-semibold tracking-widest text-temple-goldDark uppercase font-serif mb-1">
          {templeData.HEADER_MANTHRA}
        </p>

        <h1 className="text-2xl md:text-3xl font-bold font-serif text-temple-maroon mb-2 leading-tight">
          {templeData.TEMPLE_NAME}
        </h1>

        <p className="text-base text-temple-stoneLight font-medium mb-4">
          {templeData.LOCATION_SHORT}
        </p>

        <div className="my-4 p-4 rounded-xl bg-temple-sand border border-temple-gold/30">
          <p className="text-lg font-serif text-temple-maroonDark font-semibold leading-relaxed">
            {templeData.GODDESS_NAME} சமேத<br />
            <span className="text-temple-maroon">{templeData.DEITY_NAME}</span> திருவருள்
          </p>
          <p className="text-sm text-temple-stoneLight mt-2 italic">
            "{templeData.MANTRA_MAIN}"
          </p>
        </div>

        {/* Kumbhabhishekam Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-temple-maroon text-temple-gold text-sm font-medium mb-6 shadow-sm border border-temple-gold/30">
          <Sparkles className="w-4 h-4 text-temple-gold" />
          <span>கும்பாபிஷேக திருநாள்: {templeData.KUMBABHISHEKAM_DATE_DISPLAY}</span>
        </div>

        {/* Enter Button */}
        <div>
          <button
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-temple-maroon to-temple-maroonLight text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 border border-temple-gold/50 group"
          >
            <span>திருக்கோயிலுக்குள் நுழைய</span>
            <ArrowRight className="w-5 h-5 text-temple-gold group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Devotional Subtitle Note */}
        <p className="text-xs text-temple-stoneLight/80 mt-4">
          அன்புடன் வழங்கப்படும் டிஜிட்டல் பக்தி சேவை
        </p>

      </div>
    </div>
  );
}
