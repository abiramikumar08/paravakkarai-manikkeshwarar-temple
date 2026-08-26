import React from 'react';
import { templeData } from '../data/templeData';
import { Heart, MapPin, Sparkles, BookOpen, Calendar, Image as ImageIcon, Landmark, HeartHandshake } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const handleNavClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-temple-maroon text-temple-sand border-t-4 border-temple-gold pt-12 pb-24 lg:pb-12 mt-16 relative overflow-hidden">
      
      {/* Background Motif Accent */}
      <div className="absolute inset-0 bg-maroon-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-temple-gold/20">
          
          {/* Column 1: Devotional Intro */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif text-temple-gold font-bold">ௐ</span>
              <span className="text-xs tracking-widest uppercase font-serif text-temple-goldLight">
                {templeData.HEADER_MANTHRA}
              </span>
            </div>

            <h3 className="text-xl font-bold font-serif text-white">
              {templeData.TEMPLE_NAME}
            </h3>

            <p className="text-sm text-temple-sand/90 font-medium">
              {templeData.LOCATION_FULL}
            </p>

            <p className="text-sm font-serif text-temple-goldLight italic pt-2">
              "{templeData.DIGITAL_OFFERING_CREDIT.blessing}"
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold font-serif text-temple-gold border-b border-temple-gold/30 pb-2 inline-block">
              திருக்கோயில் பக்கங்கள்
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-temple-gold transition-colors">
                  • முகப்பு
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('temple')} className="hover:text-temple-gold transition-colors">
                  • திருக்கோயில்
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('deities')} className="hover:text-temple-gold transition-colors">
                  • இறைவன் அருள்
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('kumbhabhishekam')} className="hover:text-temple-gold transition-colors">
                  • கும்பாபிஷேகம்
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('thiruvasagam')} className="hover:text-temple-gold transition-colors">
                  • திருவாசகம்
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('shiva-days')} className="hover:text-temple-gold transition-colors">
                  • சிவ வழிபாட்டு நாட்கள்
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-temple-gold transition-colors">
                  • புகைப்படங்கள்
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('location')} className="hover:text-temple-gold transition-colors">
                  • இருப்பிடம்
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Devotional Offering Note & Devotee Attribution */}
          <div className="space-y-4 rounded-xl p-5 bg-temple-maroonDark/60 border border-temple-gold/30">
            <div className="flex items-center gap-2 text-temple-gold">
              <Heart className="w-5 h-5 text-temple-gold fill-temple-gold/20" />
              <h4 className="text-base font-bold font-serif">டிஜிட்டல் பக்தி அர்ப்பணிப்பு</h4>
            </div>
            
            <p className="text-xs leading-relaxed text-temple-sand/90 font-serif">
              {templeData.DIGITAL_OFFERING_CREDIT.student_note}
            </p>

            <div className="pt-2 border-t border-temple-gold/20 space-y-1">
              <p className="text-sm font-bold font-serif text-temple-gold">
                {templeData.DIGITAL_OFFERING_CREDIT.devotee_name}
              </p>
              <p className="text-xs font-bold font-serif text-temple-goldLight tracking-widest pt-2">
                {templeData.DIGITAL_OFFERING_CREDIT.closing_line}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-temple-sand/70 gap-4 text-center md:text-left">
          <p>{templeData.DIGITAL_OFFERING_CREDIT.copyright}</p>
          <div className="flex items-center gap-4 font-serif font-bold text-temple-goldLight">
            <span>திருச்சிற்றம்பலம்</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
