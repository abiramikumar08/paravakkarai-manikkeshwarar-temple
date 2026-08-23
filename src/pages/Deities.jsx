import React from 'react';
import { templeData } from '../data/templeData';
import { Sparkles, HeartHandshake } from 'lucide-react';

export default function Deities() {
  return (
    <div className="space-y-10 animate-fadeIn pb-8 max-w-5xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center space-y-3 border-b border-temple-gold/30 pb-6">
        <span className="text-xs font-semibold tracking-widest uppercase font-serif text-temple-goldDark">
          பரவாக்கரை அருள்மூர்த்திகள்
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-temple-maroon">
          இறைவன் அருள்
        </h1>
        <div className="temple-divider">
          <div className="temple-divider-dot" />
        </div>
        <p className="text-sm md:text-base text-temple-stoneLight max-w-2xl mx-auto">
          ஸ்ரீ மரகதவல்லி அம்பாள் சமேத அருள்மிகு ஸ்ரீ மாணிக்கேஸ்வரர் சுவாமியின் தெய்வீக அருளாட்சி மற்றும் சிவ தத்துவச் சிறப்புகள்.
        </p>
      </div>

      {/* Deity Section 1: Sri Manikkeshwarar */}
      <section className="bg-temple-cream rounded-3xl p-6 md:p-10 border border-temple-gold/40 shadow-temple space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-temple-gold/30 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-temple-maroon text-temple-gold font-serif font-bold text-3xl flex items-center justify-center border border-temple-gold/50 shadow-md shrink-0">
              ௐ
            </div>
            <div>
              <span className="text-xs font-bold text-temple-goldDark uppercase font-serif tracking-wider">
                மூலவர் திருவுருவம்
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-temple-maroon">
                {templeData.DEITY_NAME}
              </h2>
            </div>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-temple-sand text-temple-maroon text-xs font-semibold border border-temple-gold/30">
            மாணிக்கவண்ணக் கோமான்
          </span>
        </div>

        <div className="space-y-4 text-temple-stone leading-relaxed font-serif text-base">
          <p>
            பரவாக்கரை திருத்தலத்தில் அருள்மிகு ஸ்ரீ மாணிக்கேஸ்வரர் சிவலிங்கத் திருமேனியாக எழுந்தருளி பக்தர்களுக்கு அருள் பாலிக்கிறார். 
            மாணிக்கம் எவ்வாறு ஒளியையும் தூய்மையையும் குறிக்கிறதோ, அதேபோல சிவபெருமான் அனைத்துயிர்களின் உள்ளத்திலும் உறைந்து அறியாமை இருளை அகற்றும் ஞான ஒளிப்பொருளாக திகழ்கிறார்.
          </p>

          {/* Shiva Symbolism Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-sans text-sm">
            <div className="p-4 rounded-2xl bg-temple-sand border border-temple-gold/30 space-y-1">
              <span className="font-bold text-temple-maroon block font-serif">ஞான வடிவம்</span>
              <p className="text-xs text-temple-stoneLight">மனதிற்குள் நிலவும் கவலைகளையும் குழப்பங்களையும் நீக்கி சிவ அமைதி தருபவர்.</p>
            </div>
            <div className="p-4 rounded-2xl bg-temple-sand border border-temple-gold/30 space-y-1">
              <span className="font-bold text-temple-maroon block font-serif">அருட்கருணை</span>
              <p className="text-xs text-temple-stoneLight">அன்போடு தொழும் பக்தர்களின் குறைகளைக் கேட்டு அருள்புரியும் கருணையாளன்.</p>
            </div>
            <div className="p-4 rounded-2xl bg-temple-sand border border-temple-gold/30 space-y-1">
              <span className="font-bold text-temple-maroon block font-serif">மகா யோகேஸ்வரன்</span>
              <p className="text-xs text-temple-stoneLight">அனைத்து உலகங்களுக்கும் தலைவனாய், அகிலத்தின் ஆதாரமாய் வீற்றிருக்கும் பரம்பொருள்.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deity Section 2: Sri Maragathavalli Amman */}
      <section className="bg-temple-cream rounded-3xl p-6 md:p-10 border border-temple-gold/40 shadow-temple space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-temple-gold/30 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-temple-maroon text-temple-gold font-serif font-bold text-3xl flex items-center justify-center border border-temple-gold/50 shadow-md shrink-0">
              ஸ்ரீ
            </div>
            <div>
              <span className="text-xs font-bold text-temple-goldDark uppercase font-serif tracking-wider">
                அம்பாள் திருவுருவம்
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-temple-maroon">
                {templeData.GODDESS_NAME}
              </h2>
            </div>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-temple-sand text-temple-maroon text-xs font-semibold border border-temple-gold/30">
            தாயார் - மரகதவல்லி அம்பாள்
          </span>
        </div>

        <div className="space-y-4 text-temple-stone leading-relaxed font-serif text-base">
          <p>
            ஸ்ரீ மரகதவல்லி அம்பாள், மரகதக் கல் போன்ற அருள்மிக்க பசுமையோடும், தாய்மையின் எல்லையற்ற வாஞ்சையோடும் பக்தர்களைக் காத்தருளும் தேவியாக எழுந்தருளியுள்ளாள். 
            சிவபெருமானின் இடப்பாகத்தில் உறைந்து உலக உயிர்கள் அனைத்துக்கும் அன்னையாக அருள் பாலிக்கிறாள்.
          </p>

          {/* Goddess Symbolism Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-sans text-sm">
            <div className="p-4 rounded-2xl bg-temple-sand border border-temple-gold/30 space-y-1">
              <span className="font-bold text-temple-maroon block font-serif">தாயின் வாஞ்சை</span>
              <p className="text-xs text-temple-stoneLight">தன் பிள்ளைகளான பக்தர்களின் பிரார்த்தனைகளை ஈசனிடம் கொண்டு சேர்க்கும் மகா சக்தி.</p>
            </div>
            <div className="p-4 rounded-2xl bg-temple-sand border border-temple-gold/30 space-y-1">
              <span className="font-bold text-temple-maroon block font-serif">மங்கள நாயகி</span>
              <p className="text-xs text-temple-stoneLight">குடும்பத்தில் மங்களமும், வாழ்வாதாரமும், சுபிட்சமும் பெருக அருள்பவள்.</p>
            </div>
            <div className="p-4 rounded-2xl bg-temple-sand border border-temple-gold/30 space-y-1">
              <span className="font-bold text-temple-maroon block font-serif">கருணைப் பார்வை</span>
              <p className="text-xs text-temple-stoneLight">மரகதக் கொடியைப் போன்ற மென்மையோடும், அருட்பார்வையோடும் தன்னை அடைக்கலமடைந்தோரைக் காப்பவள்.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Shaivite Spiritual Guidance */}
      <section className="bg-temple-sand rounded-3xl p-6 md:p-10 border border-temple-gold/40 shadow-sm space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-temple-goldDark font-serif">
            சைவ ஆன்மிக நெறிமுறை
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-temple-maroon">
            சிவ அருளை உணரும் ஆன்மிகப் பாதை
          </h2>
          <p className="text-xs md:text-sm text-temple-stoneLight">
            சிவபெருமான் பக்தர்களின் உண்மையான அன்பையும் தூய மனதையுமே விரும்புகிறார். 
            சைவ ஆகமங்களும் திருமுறைகளும் காட்டும் ஆன்மிக வழிகள்:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {templeData.SPIRITUAL_PATH.map((path, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-temple-cream border border-temple-gold/30 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-temple-gold" />
                <h3 className="text-lg font-bold font-serif text-temple-maroon">
                  {path.title}
                </h3>
              </div>
              <p className="text-sm text-temple-stoneLight leading-relaxed pt-1">
                {path.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
