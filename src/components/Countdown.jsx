import React, { useState, useEffect } from 'react';
import { templeData } from '../data/templeData';
import { Calendar, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const eventTime = new Date(templeData.KUMBABHISHEKAM_DATE).getTime();
      const now = new Date().getTime();
      const difference = eventTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPassed: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-temple-maroon via-temple-maroonLight to-temple-maroonDark text-white rounded-2xl p-6 md:p-8 border-2 border-temple-gold/40 shadow-temple-lg relative overflow-hidden my-8">
      
      {/* Background Sacred Pattern Accent */}
      <div className="absolute inset-0 bg-maroon-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/20 text-temple-goldLight text-xs md:text-sm font-semibold mb-3 border border-temple-gold/40">
          <Sparkles className="w-4 h-4 text-temple-gold" />
          <span>புனித கும்பாபிஷேக நந்நாள்</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold font-serif text-temple-gold mb-2">
          கும்பாபிஷேக திருவிழா எண்ணிப்பு
        </h3>
        
        <p className="text-sm md:text-base text-temple-sand/90 mb-6">
          {templeData.KUMBABHISHEKAM_DATE_DISPLAY} • {templeData.KUMBABHISHEKAM_TIME_DISPLAY}
        </p>

        {timeLeft.isPassed ? (
          <div className="bg-temple-maroonDark/80 p-6 rounded-xl border border-temple-gold/40 text-temple-gold flex flex-col items-center gap-3">
            <CheckCircle2 className="w-12 h-12 text-temple-gold animate-bounce" />
            <p className="text-xl md:text-2xl font-bold font-serif">
              கும்பாபிஷேக விழா நிறைவு பெற்றது.
            </p>
            <p className="text-sm md:text-base text-temple-sand font-medium">
              ஸ்ரீ மரகதவல்லி அம்பாள் சமேத ஸ்ரீ மாணிக்கேஸ்வரர் திருவருள் அனைவருக்கும் கிடைக்கட்டும்.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-xs text-temple-goldLight font-medium mb-4 tracking-wider uppercase">
              கும்பாபிஷேகத்திற்கு இன்னும்...
            </p>
            
            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto">
              
              <div className="bg-temple-maroonDark/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-temple-gold/30 shadow-md">
                <span className="block text-2xl sm:text-4xl font-bold font-serif text-temple-gold font-mono">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="block text-[11px] sm:text-xs text-temple-sand/80 mt-1 font-medium">
                  நாட்கள்
                </span>
              </div>

              <div className="bg-temple-maroonDark/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-temple-gold/30 shadow-md">
                <span className="block text-2xl sm:text-4xl font-bold font-serif text-temple-gold font-mono">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="block text-[11px] sm:text-xs text-temple-sand/80 mt-1 font-medium">
                  மணிநேரம்
                </span>
              </div>

              <div className="bg-temple-maroonDark/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-temple-gold/30 shadow-md">
                <span className="block text-2xl sm:text-4xl font-bold font-serif text-temple-gold font-mono">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="block text-[11px] sm:text-xs text-temple-sand/80 mt-1 font-medium">
                  நிமிடங்கள்
                </span>
              </div>

              <div className="bg-temple-maroonDark/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-temple-gold/30 shadow-md">
                <span className="block text-2xl sm:text-4xl font-bold font-serif text-temple-gold font-mono">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="block text-[11px] sm:text-xs text-temple-sand/80 mt-1 font-medium">
                  விநாடிகள்
                </span>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
