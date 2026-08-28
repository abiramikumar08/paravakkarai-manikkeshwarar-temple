import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageModal({ image, onClose, onNext, onPrev, hasNext, hasPrev }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-temple-stone/95 backdrop-blur-md animate-fadeIn">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-temple-maroon text-temple-gold hover:bg-temple-maroonLight transition-colors"
        aria-label="மூடுக"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-temple-maroon/80 text-temple-gold hover:bg-temple-maroon transition-colors"
          aria-label="முந்தைய படம்"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Navigation */}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-temple-maroon/80 text-temple-gold hover:bg-temple-maroon transition-colors"
          aria-label="அடுத்த படம்"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Lightbox Content */}
      <div className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center bg-temple-maroonDark rounded-2xl overflow-hidden border border-temple-gold/40 shadow-2xl">
        <div className="w-full flex-1 overflow-hidden flex items-center justify-center p-2 bg-black/40">
          <img
            src={image.url}
            alt={image.title}
            className="max-h-[75vh] w-auto object-contain rounded-lg"
          />
        </div>

        <div className="w-full p-4 md:p-6 bg-temple-maroon text-temple-sand border-t border-temple-gold/30">
          <div className="flex items-center justify-between gap-4 mb-1">
            <h3 className="text-lg font-bold font-serif text-temple-gold">
              {image.title || image.caption}
            </h3>
            {image.category && (
              <span className="text-xs px-3 py-1 rounded-full bg-temple-gold/20 text-temple-goldLight border border-temple-gold/30">
                {image.category}
              </span>
            )}
          </div>
          {image.caption && image.caption !== image.title && (
            <p className="text-sm text-temple-sand/90 font-medium">
              {image.caption}
            </p>
          )}
        </div>
      </div>

    </div>
  );
}
