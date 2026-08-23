import React from 'react';
import { templeData } from '../data/templeData';
import { Landmark, Heart, CheckCircle2, History, Sparkles, ExternalLink } from 'lucide-react';

export default function TempleInfo({ setActiveTab }) {
  return (
    <div className="space-y-10 animate-fadeIn pb-8 max-w-5xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center space-y-3 border-b border-temple-gold/30 pb-6">
        <span className="text-xs font-semibold tracking-widest uppercase font-serif text-temple-goldDark">
          பரவாக்கரை அருள்மிகு திருக்கோயில்
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-temple-maroon">
          திருக்கோயிலைப் பற்றி
        </h1>
        <div className="temple-divider">
          <div className="temple-divider-dot" />
        </div>
        <p className="text-sm md:text-base text-temple-stoneLight max-w-2xl mx-auto">
          பரவாக்கரை திருத்தலத்தின் ஆன்மிக பாரம்பரியம், இறைவன் அருள் மற்றும் பக்தர்கள் இணைந்து நடத்தும் கும்பாபிஷேகப் பணிகள் பற்றிய தகவல்கள்.
        </p>
      </div>

      {/* திருக்கோயில் அறிமுகம் */}
      <section className="bg-temple-cream rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-temple-maroon rounded-full" />
          <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
            திருக்கோயில் அறிமுகம்
          </h2>
        </div>
        <p className="text-base text-temple-stone leading-relaxed font-serif pt-1">
          {templeData.TEMPLE_HISTORY.intro}
        </p>
        <p className="text-sm text-temple-stoneLight leading-relaxed">
          {templeData.TEMPLE_HISTORY.historical_note}
        </p>
      </section>

      {/* வரலாற்றுப் பின்னணி */}
      <section className="bg-temple-sand rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-temple-maroon rounded-full" />
          <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
            வரலாற்றுப் பின்னணி
          </h2>
        </div>
        
        <div className="p-4 rounded-2xl bg-temple-cream border-l-4 border-temple-gold text-temple-stone space-y-2">
          <p className="text-base font-serif text-temple-maroonDark font-medium">
            "{templeData.TEMPLE_HISTORY.intro}"
          </p>
        </div>

        <p className="text-sm text-temple-stoneLight leading-relaxed">
          உள்ளூர் மரபிலும் தொன்றுதொட்டு தொடரும் ஆன்மிக நம்பிக்கையின் அடிப்படையிலும், இத்திருக்கோயில் பல தலைமுறைகளாக ஊர் மக்களால் வழிபடப்பட்டு வரும் தொன்மையான சிவாலயமாக திகழ்கிறது.
        </p>

        {/* Historical Source Note Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-temple-cream/90 border border-temple-gold/30 text-xs text-temple-stoneLight">
          <div className="flex items-start gap-2.5">
            <History className="w-4 h-4 text-temple-goldDark shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-temple-maroon block">வரலாற்றுத் தகவல் குறிப்பு:</span>
              <span>தஞ்சாவூர் பரம்பரை வெளியிட்ட பரவாக்கரை சிவன் கோயில் தொடர்பான பதிவு.</span>
            </div>
          </div>
          <a
            href={templeData.TEMPLE_HISTORY.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-temple-sand text-temple-maroon hover:bg-temple-gold/20 font-semibold flex items-center gap-1.5 transition-colors border border-temple-gold/30 shrink-0"
          >
            <span>மூலத் தகவலைக் காண</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* மூலவர் & அம்பாள் Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* மூலவர் */}
        <div className="bg-temple-cream rounded-3xl p-6 border border-temple-gold/40 shadow-sm space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-6 bg-temple-maroon rounded-full" />
            <h2 className="text-xl font-bold font-serif text-temple-maroon">
              மூலவர் - ஸ்ரீ மாணிக்கேஸ்வரர்
            </h2>
          </div>
          <p className="text-sm text-temple-stone leading-relaxed font-serif pt-1">
            {templeData.TEMPLE_HISTORY.moolavar_desc}
          </p>
          <p className="text-xs text-temple-stoneLight leading-relaxed">
            மாணிக்கம்போல் பேரொளியாய் விளங்கும் ஈசனை அன்போடு துதிக்கும் பக்தர்களின் மனதில் அமைதியும் மெய்ஞ்ஞானமும் பெருகுகிறது.
          </p>
        </div>

        {/* அம்பாள் */}
        <div className="bg-temple-cream rounded-3xl p-6 border border-temple-gold/40 shadow-sm space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-6 bg-temple-maroon rounded-full" />
            <h2 className="text-xl font-bold font-serif text-temple-maroon">
              அம்பாள் - ஸ்ரீ மரகதவல்லி
            </h2>
          </div>
          <p className="text-sm text-temple-stone leading-relaxed font-serif pt-1">
            {templeData.TEMPLE_HISTORY.ambal_desc}
          </p>
          <p className="text-xs text-temple-stoneLight leading-relaxed">
            பச்சைப் பெண்கொடியாய் கருணை பொழியும் மரகதவல்லி தாயார், தன்னிடம் அடைக்கலமடையும் பக்தர்களைக் காத்து அருள்புரிகிறாள்.
          </p>
        </div>

      </section>

      {/* திருத்தல சிறப்பு */}
      <section className="bg-temple-sand rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-temple-maroon rounded-full" />
          <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
            திருத்தல சிறப்பு
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {templeData.TEMPLE_HISTORY.speciality.map((spec, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-temple-cream border border-temple-gold/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-temple-gold shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-temple-stone">{spec}</span>
            </div>
          ))}
        </div>
      </section>

      {/* பாரம்பரியம் & வழிபாடுகள் */}
      <section className="bg-temple-cream rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-temple-maroon rounded-full" />
          <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
            பாரம்பரியம் & வழிபாடுகள்
          </h2>
        </div>
        <p className="text-sm md:text-base text-temple-stone leading-relaxed">
          இத்திருக்கோயிலில் பிரதோஷ வழிபாடுகள், மகா சிவராத்திரி, மார்கழி மாத வழிபாடுகள் மற்றும் சிறப்பு நாட்களில் கிராமத்து சைவ மரபுப்படி நித்திய வழிபாடுகளும் பூஜைகளும் நடைபெற்று வருகின்றன.
        </p>
      </section>

      {/* பக்தர்களின் பங்களிப்பு & கும்பாபிஷேகம் */}
      <section className="bg-gradient-to-r from-temple-maroon to-temple-maroonLight text-white rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-md space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-temple-gold" />
          <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-gold">
            பக்தர்களின் பங்களிப்பு & கும்பாபிஷேகம்
          </h2>
        </div>
        <p className="text-sm md:text-base text-temple-sand/90 leading-relaxed font-serif">
          {templeData.TEMPLE_HISTORY.devotee_section_text}
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setActiveTab('kumbhabhishekam');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl bg-temple-gold text-temple-maroonDark font-bold text-sm hover:bg-temple-goldLight transition-colors shadow-md inline-flex items-center gap-2"
          >
            <span>கும்பாபிஷேக விவரங்களைக் காண</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
