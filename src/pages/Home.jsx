import React from 'react';
import { templeData } from '../data/templeData';
import Countdown from '../components/Countdown';
import PanchaksharaBanner from '../components/PanchaksharaBanner';
import { Landmark, Sparkles, BookOpen, Image as ImageIcon, ArrowRight, HeartHandshake, MapPin, Compass, ShieldCheck } from 'lucide-react';

export default function Home({ setActiveTab }) {
  const handleNavigate = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 animate-fadeIn pb-8">
      
      {/* Devotional Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-temple-maroon via-temple-maroonLight to-temple-maroonDark text-white p-8 md:p-14 border-2 border-temple-gold/40 shadow-temple-lg text-center">
        
        {/* Background Sacred Motif Accent */}
        <div className="absolute inset-0 bg-maroon-pattern opacity-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-temple-gold/20 text-temple-goldLight text-xs md:text-sm font-semibold tracking-widest font-serif border border-temple-gold/30">
            <span>{templeData.HEADER_MANTHRA}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
            {templeData.TEMPLE_NAME}
          </h1>

          <p className="text-lg md:text-xl font-serif text-temple-gold font-medium">
            {templeData.LOCATION_SHORT}
          </p>

          <div className="py-3 px-6 rounded-2xl bg-temple-maroonDark/80 border border-temple-gold/30 inline-block max-w-xl mx-auto shadow-inner">
            <p className="text-lg md:text-2xl font-serif text-temple-goldLight italic">
              "{templeData.MANTRA_MAIN}"
            </p>
          </div>

          {/* Quick Action Navigation Grid */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            
            <button
              onClick={() => handleNavigate('temple')}
              className="p-3.5 rounded-xl bg-temple-cream text-temple-maroon font-semibold text-xs md:text-sm hover:bg-temple-gold hover:text-temple-maroonDark transition-all duration-300 shadow-md flex flex-col items-center gap-2 group border border-temple-gold/50"
            >
              <Landmark className="w-5 h-5 text-temple-maroon group-hover:scale-110 transition-transform" />
              <span>கோயிலை அறிய</span>
            </button>

            <button
              onClick={() => handleNavigate('kumbhabhishekam')}
              className="p-3.5 rounded-xl bg-temple-gold text-temple-maroonDark font-semibold text-xs md:text-sm hover:bg-temple-goldLight transition-all duration-300 shadow-md flex flex-col items-center gap-2 group border border-temple-gold/60"
            >
              <Sparkles className="w-5 h-5 text-temple-maroonDark group-hover:scale-110 transition-transform" />
              <span>கும்பாபிஷேகம்</span>
            </button>

            <button
              onClick={() => handleNavigate('thiruvasagam')}
              className="p-3.5 rounded-xl bg-temple-cream text-temple-maroon font-semibold text-xs md:text-sm hover:bg-temple-gold hover:text-temple-maroonDark transition-all duration-300 shadow-md flex flex-col items-center gap-2 group border border-temple-gold/50"
            >
              <BookOpen className="w-5 h-5 text-temple-maroon group-hover:scale-110 transition-transform" />
              <span>திருவாசகம்</span>
            </button>

            <button
              onClick={() => handleNavigate('gallery')}
              className="p-3.5 rounded-xl bg-temple-cream text-temple-maroon font-semibold text-xs md:text-sm hover:bg-temple-gold hover:text-temple-maroonDark transition-all duration-300 shadow-md flex flex-col items-center gap-2 group border border-temple-gold/50"
            >
              <ImageIcon className="w-5 h-5 text-temple-maroon group-hover:scale-110 transition-transform" />
              <span>புகைப்படங்கள்</span>
            </button>

          </div>

        </div>

      </section>

      {/* Prominent Welcome Section for Today's Visit */}
      <section className="bg-temple-cream rounded-3xl p-6 md:p-10 border border-temple-gold/40 shadow-temple relative">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-temple-gold/30 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-temple-maroon/10 border border-temple-gold/40 flex items-center justify-center text-temple-maroon">
                <span className="text-2xl font-serif">ௐ</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
                  இன்றைய தரிசனத்திற்கு வரவேற்கிறோம்
                </h2>
                <p className="text-xs text-temple-stoneLight font-medium">
                  {templeData.LOCATION_FULL}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleNavigate('location')}
              className="px-4 py-2 rounded-xl bg-temple-sand hover:bg-temple-gold/20 text-temple-maroon text-xs font-semibold border border-temple-gold/40 flex items-center gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4 text-temple-maroon" />
              <span>வழிகாட்டியைப் பெற</span>
            </button>
          </div>

          <p className="text-base md:text-lg text-temple-stone leading-relaxed font-serif">
            {templeData.WELCOME_MESSAGE}
          </p>

          {/* Deity Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            <div className="p-6 rounded-2xl bg-temple-sand border border-temple-gold/30 hover:border-temple-gold transition-colors space-y-3">
              <span className="text-xs font-bold text-temple-goldDark tracking-wider uppercase font-serif block">
                மூலவர்
              </span>
              <h3 className="text-xl font-bold font-serif text-temple-maroon">
                {templeData.DEITY_NAME}
              </h3>
              <p className="text-sm text-temple-stoneLight leading-relaxed">
                {templeData.TEMPLE_HISTORY.moolavar_desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-temple-sand border border-temple-gold/30 hover:border-temple-gold transition-colors space-y-3">
              <span className="text-xs font-bold text-temple-goldDark tracking-wider uppercase font-serif block">
                அம்பாள்
              </span>
              <h3 className="text-xl font-bold font-serif text-temple-maroon">
                {templeData.GODDESS_NAME}
              </h3>
              <p className="text-sm text-temple-stoneLight leading-relaxed">
                {templeData.TEMPLE_HISTORY.ambal_desc}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Live Kumbhabhishekam Countdown Section */}
      <Countdown />

      {/* Panchakshara Banner */}
      <PanchaksharaBanner />

      {/* Spiritual Path Feature Card */}
      <section className="bg-temple-sand rounded-3xl p-6 md:p-10 border border-temple-gold/40 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-temple-goldDark font-serif">
              சைவ ஆன்மிக வழிகாட்டி
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-temple-maroon mt-1">
              சிவ அருளை உணரும் ஆன்மிகப் பாதை
            </h2>
            <p className="text-sm text-temple-stoneLight mt-2">
              இறைவனின் பேரருளை நமது அன்றாட வாழ்வில் உணர்வதற்கான சைவ நெறிமுறைகள்.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {templeData.SPIRITUAL_PATH.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-temple-cream border border-temple-gold/30 shadow-sm hover:border-temple-gold transition-colors space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-temple-maroon text-temple-gold font-bold font-serif text-sm flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold font-serif text-temple-maroon">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-temple-stoneLight leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
