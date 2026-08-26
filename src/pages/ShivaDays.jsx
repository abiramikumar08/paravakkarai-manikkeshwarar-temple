import React, { useState } from 'react';
import { templeData } from '../data/templeData';
import { Calendar, Sun, Moon, Sparkles, ChevronDown, ChevronUp, Flame, Info, CheckCircle2, Image as ImageIcon, ZoomIn } from 'lucide-react';
import ImageModal from '../components/ImageModal';

export default function ShivaDays() {
  const [show2026Section, setShow2026Section] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const days = templeData.SPECIAL_SHIVA_DAYS || [];

  return (
    <div className="space-y-10 animate-fadeIn pb-8 max-w-5xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center space-y-3 border-b border-temple-gold/30 pb-6">
        <span className="text-xs font-semibold tracking-widest uppercase font-serif text-temple-goldDark">
          சைவ சமய மரபு வழிகாட்டி
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-temple-maroon">
          சிவ வழிபாட்டின் சிறப்பு நாட்கள்
        </h1>
        <div className="temple-divider">
          <div className="temple-divider-dot" />
        </div>
        <p className="text-sm md:text-base text-temple-stoneLight max-w-2xl mx-auto">
          ஆண்டுதோறும் சைவ மரபிலும் ஆகமங்களிலும் சிவபெருமானை வழிபடக் குறிப்பிடப்படும் புனித நாட்களின் ஆன்மிக முக்கியத்துவம் மற்றும் வழிபாட்டு முறைகள்.
        </p>
      </div>

      {/* Distinction & Authenticity Notice */}
      <div className="p-4 rounded-2xl bg-temple-cream border border-temple-gold/40 shadow-sm flex items-start gap-3">
        <Info className="w-5 h-5 text-temple-goldDark shrink-0 mt-0.5" />
        <div className="text-xs text-temple-stoneLight leading-relaxed">
          <span className="font-bold text-temple-maroon block mb-0.5">சைவ மரபுத் தகவல் குறிப்பு:</span>
          இப்பக்கத்தில் குறிப்பிடப்பட்டுள்ள விவரங்கள் அனைத்தும் <strong className="text-temple-maroon">“சைவ மரபில் சிறப்பாகக் கருதப்படும் நாட்கள்”</strong> பற்றிய பொதுவான ஆன்மிக வழிகாட்டியாகும். இத்திருக்கோயிலில் பிரதோஷம், மகா சிவராத்திரி, அன்னாபிஷேகம், கார்த்திகை தீபம் மற்றும் மார்கழி வழிபாடுகள் வழக்கமாக நடைபெறுகின்றன.
        </div>
      </div>

      {/* 2026 Special Dates Collapsible Card */}
      <section className="bg-gradient-to-r from-temple-maroon to-temple-maroonLight text-white rounded-3xl p-6 md:p-8 border-2 border-temple-gold/40 shadow-md space-y-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShow2026Section(!show2026Section)}>
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-temple-gold" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-gold">
                2026 சிறப்பு நாட்கள் நாட்காட்டி
              </h2>
              <p className="text-xs text-temple-sand/80">நடப்பு 2026-ஆம் ஆண்டிற்கான முக்கிய சிவ வழிபாட்டு தேதிகள்</p>
            </div>
          </div>
          <button className="p-2 rounded-full bg-temple-maroonDark/60 text-temple-gold hover:bg-temple-maroonDark transition-colors">
            {show2026Section ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {show2026Section && (
          <div className="pt-4 border-t border-temple-gold/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {days.map((d) => (
              <div key={d.id} className="p-3.5 rounded-xl bg-temple-maroonDark/80 border border-temple-gold/30 space-y-1">
                <span className="text-[10px] font-semibold text-temple-gold font-mono block uppercase">{d.name}</span>
                <span className="text-sm font-bold text-white block">{d.date2026}</span>
                <span className="text-[11px] text-temple-sand/70 block line-clamp-1">{d.when}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Main Special Days List */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-serif text-temple-maroon text-center">
          சிவ வழிபாட்டு நன்னாட்களின் விபரம்
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {days.map((item) => (
            <div 
              key={item.id}
              className="bg-temple-cream rounded-2xl p-6 border border-temple-gold/40 shadow-sm hover:border-temple-gold hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2 border-b border-temple-gold/20 pb-3">
                  <div>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-temple-gold/20 text-temple-goldDark border border-temple-gold/30">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-temple-maroon mt-1.5">
                      {item.name}
                    </h3>
                  </div>
                  <Flame className="w-5 h-5 text-temple-gold shrink-0 mt-1" />
                </div>

                {/* எப்போது வருகிறது */}
                <div className="text-xs text-temple-stoneLight space-y-1 bg-temple-sand/60 p-3 rounded-xl border border-temple-gold/20">
                  <span className="font-semibold text-temple-maroon block font-serif">📅 எப்போது வருகிறது?</span>
                  <p className="font-medium text-temple-stone">{item.when}</p>
                  <p className="text-temple-goldDark font-semibold pt-0.5">2026 தேதி: {item.date2026}</p>
                </div>

                {/* ஆன்மிக முக்கியத்துவம் */}
                <div className="space-y-1 pt-1">
                  <span className="text-xs font-semibold text-temple-maroon font-serif block">✨ ஆன்மிக முக்கியத்துவம்:</span>
                  <p className="text-sm text-temple-stone leading-relaxed">
                    {item.significance}
                  </p>
                </div>

                {/* பக்தர்கள் பொதுவாக மேற்கொள்ளும் வழிபாட்டு முறைகள் */}
                <div className="space-y-1 pt-2 border-t border-temple-gold/20">
                  <span className="text-xs font-semibold text-temple-maroon font-serif block">🙏🏻 பக்தர்களின் வழிபாட்டு முறைகள்:</span>
                  <p className="text-xs text-temple-stoneLight leading-relaxed">
                    {item.practices}
                  </p>
                </div>

                {/* விழா / அலங்காரப் புகைப்படங்கள் */}
                {item.images && item.images.length > 0 && (
                  <div className="pt-3 border-t border-temple-gold/20 space-y-2">
                    <span className="text-xs font-bold text-temple-maroon font-serif flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-temple-goldDark" />
                      <span>திருவிழா அலங்காரப் புகைப்படங்கள்:</span>
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {item.images.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          onClick={() => setSelectedImage({ url: img.url, title: img.label, caption: `${item.name} — ${img.label}` })}
                          className="group relative rounded-xl overflow-hidden border border-temple-gold/40 cursor-pointer aspect-4/3 bg-temple-maroonDark"
                        >
                          <img
                            src={img.url}
                            alt={img.label}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-2 flex flex-col justify-end">
                            <span className="text-[11px] font-bold text-temple-gold font-serif truncate flex items-center justify-between">
                              <span>{img.label}</span>
                              <ZoomIn className="w-3.5 h-3.5 text-temple-gold shrink-0 ml-1" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

    </div>
  );
}
