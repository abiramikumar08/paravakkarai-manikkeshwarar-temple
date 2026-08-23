import React, { useState } from 'react';
import { templeData } from '../data/templeData';
import { Image as ImageIcon, Filter, Maximize2, Camera, Info } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('அனைத்தும்');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = [
    'அனைத்தும்',
    'கோயில் தோற்றம்',
    'மூலவர் சன்னதி',
    'அம்பாள் சன்னதி',
    'கோயில் வளாகம்',
    'பழமையான கட்டிடக்கலை',
    'கும்பாபிஷேக ஏற்பாடுகள்'
  ];

  const filteredImages = selectedCategory === 'அனைத்தும்'
    ? templeData.GALLERY_IMAGES
    : templeData.GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const currentModalImage = activeImageIndex !== null ? filteredImages[activeImageIndex] : null;

  return (
    <div className="space-y-10 animate-fadeIn pb-8 max-w-6xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center space-y-3 border-b border-temple-gold/30 pb-6">
        <span className="text-xs font-semibold tracking-widest uppercase font-serif text-temple-goldDark">
          பரவாக்கரை திருத்தலக் காட்சிகள்
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-temple-maroon">
          திருக்கோயில் புகைப்படங்கள்
        </h1>
        <div className="temple-divider">
          <div className="temple-divider-dot" />
        </div>
        <p className="text-sm md:text-base text-temple-stoneLight max-w-2xl mx-auto">
          பரவாக்கரை அருள்மிகு ஸ்ரீ மாணிக்கேஸ்வரர் திருக்கோயிலின் தோற்றம், கருவறை சன்னதிகள் மற்றும் கும்பாபிஷேகப் பணிகளின் புகைப்படத் தொகுப்பு.
        </p>
      </div>

      {/* Authenticity Notice */}
      <div className="p-4 rounded-2xl bg-temple-cream border border-temple-gold/40 shadow-sm flex items-center gap-3">
        <Info className="w-5 h-5 text-temple-goldDark shrink-0" />
        <p className="text-xs text-temple-stoneLight">
          <strong>புகைப்படத் தகவல்கள்:</strong> திருக்கோயிலின் அதிகாரப்பூர்வ புகைப்படங்கள் பெறப்பட்டவுடன் இப்பகுதியில் பதிவேற்றப்படும்.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none justify-start md:justify-center">
        <Filter className="w-4 h-4 text-temple-gold shrink-0 ml-1" />
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-temple-maroon text-temple-gold shadow-md border border-temple-gold/40 font-bold'
                : 'bg-temple-cream text-temple-stone hover:bg-temple-sand border border-temple-gold/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Image Grid (Authentic Placeholder Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setActiveImageIndex(idx)}
            className="group relative bg-temple-cream rounded-2xl overflow-hidden border border-temple-gold/30 shadow-sm hover:shadow-xl hover:border-temple-gold transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Box or Placeholder */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-temple-sand via-temple-cream to-temple-sand flex flex-col items-center justify-center p-6 text-center border-b border-temple-gold/20">
              <div className="w-16 h-16 rounded-full bg-temple-maroon/10 border border-temple-gold/40 flex items-center justify-center text-temple-maroon mb-3 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-serif">ௐ</span>
              </div>
              <span className="text-xs font-bold font-serif text-temple-maroon">
                {img.placeholderText || 'திருக்கோயில் புகைப்படம் விரைவில் சேர்க்கப்படும்'}
              </span>
              <span className="text-[11px] text-temple-stoneLight mt-1 italic">
                (அதிகாரப்பூர்வ படங்கள் சேர்க்கப்பட உள்ளன)
              </span>

              <div className="absolute inset-0 bg-temple-maroonDark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="text-xs text-temple-gold font-semibold flex items-center gap-1.5 bg-temple-maroon px-3 py-1.5 rounded-full border border-temple-gold/40">
                  <Maximize2 className="w-4 h-4" />
                  <span>விவரங்களைக் காண</span>
                </span>
              </div>
            </div>

            <div className="p-4 bg-temple-cream flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-temple-gold/15 text-temple-goldDark border border-temple-gold/30">
                  {img.category}
                </span>
                <h3 className="text-base font-bold font-serif text-temple-maroon mt-2">
                  {img.title}
                </h3>
              </div>
              <p className="text-xs text-temple-stoneLight mt-1">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Image Modal for Placeholder info */}
      {currentModalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-temple-stone/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-temple-cream rounded-3xl p-6 md:p-8 max-w-lg w-full border-2 border-temple-gold/40 shadow-2xl text-center space-y-4 relative">
            <div className="w-16 h-16 rounded-full bg-temple-maroon text-temple-gold flex items-center justify-center text-3xl font-serif mx-auto border border-temple-gold/50">
              ௐ
            </div>

            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-temple-gold/20 text-temple-goldDark border border-temple-gold/30 inline-block">
              {currentModalImage.category}
            </span>

            <h3 className="text-xl font-bold font-serif text-temple-maroon">
              {currentModalImage.title}
            </h3>

            <p className="text-sm text-temple-stone font-medium">
              {currentModalImage.caption}
            </p>

            <div className="p-3 rounded-xl bg-temple-sand border border-temple-gold/30 text-xs text-temple-stoneLight">
              திருக்கோயில் கும்பாபிஷேகம் மற்றும் வழிபாடுகளின் அதிகாரப்பூர்வ புகைப்படங்கள் விரைவில் இங்கு பதிவேற்றப்படும்.
            </div>

            <button
              onClick={() => setActiveImageIndex(null)}
              className="w-full py-2.5 rounded-xl bg-temple-maroon text-temple-gold font-bold text-sm hover:bg-temple-maroonLight transition-colors"
            >
              மூடுக
            </button>
          </div>
        </div>
      )}

      {/* Photo Sharing Info Banner */}
      <section className="bg-temple-sand rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-temple-maroon">
            <Camera className="w-5 h-5 text-temple-gold" />
            <h3 className="text-lg font-bold font-serif">
              {templeData.PHOTO_SHARE_INFO.title}
            </h3>
          </div>
          <p className="text-xs md:text-sm text-temple-stoneLight">
            {templeData.PHOTO_SHARE_INFO.desc}
          </p>
        </div>
      </section>

    </div>
  );
}
