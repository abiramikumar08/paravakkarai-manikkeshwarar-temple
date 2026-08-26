import React, { useState } from 'react';
import { templeData } from '../data/templeData';
import { Image as ImageIcon, Camera, ZoomIn, Sparkles, CheckCircle2 } from 'lucide-react';
import ImageModal from '../components/ImageModal';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGalleryList, setCurrentGalleryList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [renovationTab, setRenovationTab] = useState('after');

  const openLightbox = (list, index) => {
    setCurrentGalleryList(list);
    setSelectedIndex(index);
    setSelectedImage(list[index]);
  };

  const handleNext = () => {
    if (selectedIndex < currentGalleryList.length - 1) {
      const nextIdx = selectedIndex + 1;
      setSelectedIndex(nextIdx);
      setSelectedImage(currentGalleryList[nextIdx]);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const prevIdx = selectedIndex - 1;
      setSelectedIndex(prevIdx);
      setSelectedImage(currentGalleryList[prevIdx]);
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn pb-8 max-w-6xl mx-auto">
      
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
          பரவாக்கரை அருள்மிகு ஸ்ரீ மாணிக்கேஸ்வரர் திருக்கோயிலின் சந்நிதி புகைப்படங்கள் மற்றும் திருப்பணி முன்பும் பின்பும் புகைப்படத் தொகுப்பு.
        </p>
      </div>

      {/* SECTION 1: சந்நிதி புகைப்படங்கள் */}
      <section className="bg-temple-sand rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-temple-gold/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-8 bg-temple-maroon rounded-full" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
                சந்நிதி புகைப்படங்கள்
              </h2>
              <p className="text-xs text-temple-stoneLight">கருவறை சந்நிதிகள் மற்றும் வரலாற்றுப் புகைப்படங்கள்</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-temple-gold/20 text-temple-maroon font-serif font-bold self-start sm:self-auto border border-temple-gold/30">
            {templeData.SANNIDHI_GALLERY.length} புகைப்படங்கள்
          </span>
        </div>

        {/* Sannidhi Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templeData.SANNIDHI_GALLERY.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(templeData.SANNIDHI_GALLERY, idx)}
              className="group relative bg-temple-cream rounded-2xl overflow-hidden border border-temple-gold/40 shadow-sm hover:shadow-xl hover:border-temple-gold transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-temple-maroonDark overflow-hidden">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs font-bold font-serif text-temple-gold">{img.title}</span>
                    <ZoomIn className="w-4 h-4 text-temple-gold shrink-0 opacity-80 group-hover:opacity-100" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-temple-cream space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-temple-gold/20 text-temple-goldDark border border-temple-gold/30">
                    {img.category}
                  </span>
                  <span className="text-[10px] text-temple-stoneLight italic">சொடுக்கி பெரிதாக்குக</span>
                </div>
                <p className="text-xs font-medium text-temple-stone leading-relaxed pt-1">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: திருக்கோயில் திருப்பணி: முன்பும் பின்பும் */}
      <section className="bg-temple-cream rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-temple-gold/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-8 bg-temple-maroon rounded-full" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
                திருக்கோயில் திருப்பணி: முன்பும் பின்பும்
              </h2>
              <p className="text-xs text-temple-stoneLight">திருக்கோயில் திருப்பணிக்கு முன்னும் பின்னும் எடுக்கப்பட்ட புகைப்படங்கள்</p>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center p-1 rounded-2xl bg-temple-sand border border-temple-gold/30 self-start sm:self-auto">
            <button
              onClick={() => setRenovationTab('after')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-serif transition-all ${
                renovationTab === 'after'
                  ? 'bg-temple-maroon text-temple-gold shadow-md'
                  : 'text-temple-stone hover:text-temple-maroon'
              }`}
            >
              திருப்பணிக்குப் பின் ({templeData.RENOVATION_AFTER_IMAGES.length})
            </button>
            <button
              onClick={() => setRenovationTab('before')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-serif transition-all ${
                renovationTab === 'before'
                  ? 'bg-temple-maroon text-temple-gold shadow-md'
                  : 'text-temple-stone hover:text-temple-maroon'
              }`}
            >
              திருப்பணிக்கு முன் ({templeData.RENOVATION_BEFORE_IMAGES.length})
            </button>
          </div>
        </div>

        {/* Active Renovation Gallery Grid */}
        <div>
          {renovationTab === 'after' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {templeData.RENOVATION_AFTER_IMAGES.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={() => openLightbox(templeData.RENOVATION_AFTER_IMAGES, idx)}
                  className="group relative rounded-2xl overflow-hidden border border-temple-gold/40 shadow-sm cursor-pointer aspect-square bg-temple-maroonDark flex flex-col justify-between"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                    <div className="flex items-center justify-between text-white mb-0.5">
                      <p className="text-xs font-bold font-serif text-temple-gold truncate">{img.title}</p>
                      <ZoomIn className="w-4 h-4 text-temple-gold shrink-0 ml-1" />
                    </div>
                    <p className="text-[11px] text-temple-sand/90 font-medium truncate">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {templeData.RENOVATION_BEFORE_IMAGES.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={() => openLightbox(templeData.RENOVATION_BEFORE_IMAGES, idx)}
                  className="group relative rounded-2xl overflow-hidden border border-temple-gold/40 shadow-sm cursor-pointer aspect-square bg-temple-maroonDark flex flex-col justify-between"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                    <div className="flex items-center justify-between text-white mb-0.5">
                      <p className="text-xs font-bold font-serif text-temple-gold truncate">{img.title}</p>
                      <ZoomIn className="w-4 h-4 text-temple-gold shrink-0 ml-1" />
                    </div>
                    <p className="text-[11px] text-temple-sand/90 font-medium truncate">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={selectedIndex < currentGalleryList.length - 1}
          hasPrev={selectedIndex > 0}
        />
      )}

    </div>
  );
}
