import React, { useState } from 'react';
import { templeData } from '../data/templeData';
import { Sparkles, Info } from 'lucide-react';

export default function PanchaksharaBanner() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <section className="w-full bg-temple-sand rounded-2xl p-6 md:p-8 border border-temple-gold/40 shadow-sm my-8">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-temple-goldDark font-serif">
          சைவ சமய மகா மந்திரம்
        </span>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-temple-maroon mt-1">
          ஓம் நமச்சிவாய
        </h3>
        <p className="text-sm text-temple-stoneLight mt-2">
          பஞ்சாட்சரம் என்பது சிவபெருமானின் புனிதமான ஐந்தெழுத்து மந்திரமாகும். 
          ஒவ்வொரு எழுத்தும் ஆன்மீக தத்துவப் பொருளைக் கொண்டுள்ளது.
        </p>
      </div>

      {/* Letter Grid */}
      <div className="grid grid-cols-5 gap-2 md:gap-4 max-w-2xl mx-auto mb-6">
        {templeData.PANCHARAKSHARA_EXPLANATION.map((item, idx) => {
          const isSelected = selectedLetter === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedLetter(isSelected ? null : idx)}
              className={`p-3 md:p-5 rounded-xl text-center transition-all duration-300 border flex flex-col items-center justify-center ${
                isSelected
                  ? 'bg-temple-maroon text-temple-gold border-temple-gold shadow-md scale-105'
                  : 'bg-temple-cream text-temple-maroon border-temple-gold/30 hover:border-temple-gold hover:bg-temple-sand'
              }`}
            >
              <span className="text-2xl md:text-4xl font-bold font-serif block mb-1">
                {item.letter}
              </span>
              <span className="text-[10px] md:text-xs text-temple-stoneLight font-medium">
                {idx + 1}-ம் எழுத்து
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Letter Explanation Banner */}
      {selectedLetter !== null ? (
        <div className="bg-temple-cream p-4 rounded-xl border border-temple-gold/40 max-w-xl mx-auto text-center shadow-inner animate-fadeIn">
          <p className="text-xs font-semibold text-temple-goldDark uppercase tracking-wider">
            {templeData.PANCHARAKSHARA_EXPLANATION[selectedLetter].letter} - எழுத்தின் ஆன்மீகப் பொருள்:
          </p>
          <p className="text-base md:text-lg font-serif font-bold text-temple-maroon mt-1">
            {templeData.PANCHARAKSHARA_EXPLANATION[selectedLetter].meaning}
          </p>
        </div>
      ) : (
        <div className="text-center text-xs text-temple-stoneLight flex items-center justify-center gap-1.5">
          <Info className="w-4 h-4 text-temple-goldDark" />
          <span>எழுத்துக்களின் ஆன்மீகப் பொருளை அறிய ஏதேனும் ஒரு எழுத்தின் மீது கிளிக் செய்யவும்</span>
        </div>
      )}

    </section>
  );
}
