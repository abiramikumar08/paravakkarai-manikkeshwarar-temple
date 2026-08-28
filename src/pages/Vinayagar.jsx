import React, { useState } from 'react';
import { templeData } from '../data/templeData';
import { MapPin, Navigation, ExternalLink, ZoomIn, Heart } from 'lucide-react';
import ImageModal from '../components/ImageModal';

export default function Vinayagar() {
  const data = templeData.VINAYAGAR_DATA;
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setSelectedImage(data.photos[index]);
  };

  const handleNext = () => {
    if (selectedIndex < data.photos.length - 1) {
      const nextIdx = selectedIndex + 1;
      setSelectedIndex(nextIdx);
      setSelectedImage(data.photos[nextIdx]);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const prevIdx = selectedIndex - 1;
      setSelectedIndex(prevIdx);
      setSelectedImage(data.photos[prevIdx]);
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn pb-8 max-w-5xl mx-auto">
      
      {/* 1. Page Title & Introduction */}
      <div className="text-center space-y-3 border-b border-temple-gold/30 pb-6">
        <span className="text-xs font-semibold tracking-widest uppercase font-serif text-temple-goldDark">
          {data.subtitle}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-temple-maroon">
          {data.title}
        </h1>
        <div className="temple-divider">
          <div className="temple-divider-dot" />
        </div>
      </div>

      {/* Devotional Introduction Card */}
      <section className="bg-temple-cream rounded-3xl p-6 md:p-10 border border-temple-gold/40 shadow-temple space-y-5">
        <div className="flex items-center gap-3 border-b border-temple-gold/20 pb-4">
          <div className="w-10 h-10 rounded-full bg-temple-maroon flex items-center justify-center text-temple-gold font-serif font-bold text-xl shrink-0 border border-temple-gold/40">
            ௐ
          </div>
          <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
            அருள்மிகு ஸ்ரீ பொய்யா விநாயகர் திருக்கோயில்
          </h2>
        </div>

        <div className="space-y-4 text-base md:text-lg text-temple-stone leading-relaxed font-serif">
          {data.intro_paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* 2. Temple Photographs Section */}
      <section className="bg-temple-sand rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-temple-gold/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-8 bg-temple-maroon rounded-full" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
                திருக்கோயில் புகைப்படங்கள்
              </h2>
              <p className="text-xs text-temple-stoneLight">ஸ்ரீ பொய்யா விநாயகர் திருக்கோயில் புகைப்படத் தொகுப்பு</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-temple-gold/20 text-temple-maroon font-serif font-bold self-start sm:self-auto border border-temple-gold/30">
            {data.photos.length} புகைப்படங்கள்
          </span>
        </div>

        {/* 4 Actual Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.photos.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative bg-temple-cream rounded-2xl overflow-hidden border border-temple-gold/40 shadow-sm hover:shadow-xl hover:border-temple-gold transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-temple-maroonDark overflow-hidden">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-temple-maroon/80 text-temple-gold border border-temple-gold/50 flex items-center justify-center">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-temple-cream border-t border-temple-gold/20 text-center">
                <h3 className="text-sm font-bold font-serif text-temple-maroon">
                  {img.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Donor Gratitude Section */}
      <section className="bg-gradient-to-br from-temple-sand via-temple-cream to-temple-sand rounded-3xl p-6 md:p-10 border-2 border-temple-gold/50 shadow-md space-y-6 relative overflow-hidden">
        {/* Background Sacred Accent */}
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-temple-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3 border-b border-temple-gold/30 pb-4">
          <div className="w-10 h-10 rounded-full bg-temple-maroon/10 border border-temple-gold/40 flex items-center justify-center text-temple-maroon shrink-0">
            <Heart className="w-5 h-5 text-temple-maroon fill-temple-maroon/20" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
              {data.donor.heading}
            </h2>
            <p className="text-xs text-temple-stoneLight">உயரிய நற்பணிக்கான நெஞ்சார்ந்த போற்றுதல்கள்</p>
          </div>
        </div>

        {/* Donor Information Presentation */}
        <div className="bg-temple-cream rounded-2xl p-6 md:p-8 border border-temple-gold/30 space-y-6 shadow-inner">
          <div className="border-b border-temple-gold/20 pb-4 text-center sm:text-left">
            <p className="text-base md:text-lg font-bold font-serif text-temple-maroon leading-relaxed">
              {data.donor.identification}
            </p>
          </div>

          <div className="space-y-4 font-serif leading-relaxed text-temple-stone text-base md:text-lg">
            <div className="inline-block px-3 py-1 rounded-lg bg-temple-gold/20 text-temple-maroon font-bold text-base border border-temple-gold/40 mb-1">
              {data.donor.subtitle}
            </div>

            <p>{data.donor.paragraph1}</p>
            <p>{data.donor.paragraph2}</p>
          </div>

          <div className="pt-4 border-t border-temple-gold/30 text-center">
            <span className="text-lg md:text-xl font-bold font-serif text-temple-maroon tracking-wider">
              {data.donor.closing}
            </span>
          </div>
        </div>
      </section>

      {/* 4. Exact Location Section */}
      <section className="bg-temple-cream rounded-3xl p-6 md:p-10 border border-temple-gold/40 shadow-temple space-y-6">
        <div className="flex items-center gap-3 border-b border-temple-gold/20 pb-4">
          <div className="w-10 h-10 rounded-full bg-temple-maroon/10 border border-temple-gold/40 flex items-center justify-center text-temple-maroon shrink-0">
            <MapPin className="w-5 h-5 text-temple-maroon" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
              {data.location.heading}
            </h2>
            <p className="text-xs text-temple-stoneLight">ஸ்ரீ பொய்யா விநாயகர் திருக்கோயில் அமைவிடம் மற்றும் கூகுள் வரைபட வழிகாட்டி</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-temple-sand p-6 rounded-2xl border border-temple-gold/30">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider font-serif text-temple-goldDark block">
              திருக்கோயில் அமைவிடம்
            </span>
            <h3 className="text-xl font-bold font-serif text-temple-maroon">
              ஸ்ரீ பொய்யா விநாயகர் திருக்கோயில்
            </h3>
            <p className="text-sm md:text-base text-temple-stone font-medium">
              பரவாக்கரை திருக்கோயில் வளாகம், பரவாக்கரை, குடவாசல் வட்டம், திருவாரூர் மாவட்டம்.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto text-center">
            <a
              href={data.location.map_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-temple-maroon to-temple-maroonLight text-temple-gold font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 border border-temple-gold/50 group"
            >
              <Navigation className="w-5 h-5 text-temple-gold group-hover:scale-110 transition-transform" />
              <span>{data.location.button_text}</span>
              <ExternalLink className="w-4 h-4 text-temple-goldLight" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={selectedIndex < data.photos.length - 1}
          hasPrev={selectedIndex > 0}
        />
      )}

    </div>
  );
}
