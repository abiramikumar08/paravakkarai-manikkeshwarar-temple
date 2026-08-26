import React from 'react';
import { templeData } from '../data/templeData';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';

export default function Location() {
  return (
    <div className="space-y-10 animate-fadeIn pb-8 max-w-4xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center space-y-3 border-b border-temple-gold/30 pb-6">
        <span className="text-xs font-semibold tracking-widest uppercase font-serif text-temple-goldDark">
          பரவாக்கரை திருத்தலம்
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-temple-maroon">
          திருத்தல இருப்பிடம்
        </h1>
        <div className="temple-divider">
          <div className="temple-divider-dot" />
        </div>
        <p className="text-sm md:text-base text-temple-stoneLight max-w-2xl mx-auto">
          பரவாக்கரை அருள்மிகு ஸ்ரீ மாணிக்கேஸ்வரர் திருக்கோயிலை வந்தடைவதற்கான கூகுள் வரைபட வழிகாட்டி.
        </p>
      </div>

      {/* Main Location Card */}
      <div className="bg-temple-cream rounded-3xl p-6 md:p-10 border border-temple-gold/40 shadow-temple space-y-8">
        
        {/* Address Overview */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-temple-goldDark">
              <MapPin className="w-5 h-5 text-temple-maroon shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider font-serif">திருக்கோயில் முகவரி</span>
            </div>
            <h2 className="text-2xl font-bold font-serif text-temple-maroon">
              {templeData.TEMPLE_NAME}
            </h2>
            <p className="text-base text-temple-stone font-medium leading-relaxed">
              {templeData.LOCATION_FULL}
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto text-center">
            <a
              href={templeData.MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-temple-maroon to-temple-maroonLight text-temple-gold font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 border border-temple-gold/50 group"
            >
              <Navigation className="w-5 h-5 text-temple-gold group-hover:scale-110 transition-transform" />
              <span>Google Maps-ல் வழிகாட்டியைப் பெற</span>
              <ExternalLink className="w-4 h-4 text-temple-goldLight" />
            </a>
          </div>
        </div>

        {/* Location Direction Note */}
        <div className="p-5 rounded-2xl bg-temple-sand border border-temple-gold/30 text-xs md:text-sm text-temple-stone leading-relaxed flex items-start gap-3">
          <Compass className="w-5 h-5 text-temple-goldDark shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-temple-maroon block font-serif mb-1">திசை வழிகாட்டுதல்:</span>
            சோழவளநாட்டில், அரசலாற்றின் வடகரையிலும், திருக்கருவேலிக்கு வடக்கிழக்கிலும், திருவீழிமிழலைக்கு மேற்கிலும், கோனேரிராஜபுரத்திற்கு தெற்கிலும் திருவாரூர் மாவட்டம் குடவாசல் வட்டத்தில் பரவாக்கரை கிராமம் அமையப்பெற்றுள்ளது.
          </div>
        </div>

      </div>

    </div>
  );
}
