import React, { useState, useEffect } from 'react';
import { templeData } from '../data/templeData';
import { Calendar, Clock, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';

export default function Countdown() {
  const [statusState, setStatusState] = useState('before'); // 'before' | 'today' | 'after'
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const eventDate = new Date(templeData.KUMBABHISHEKAM_DATE);
      const eventTime = eventDate.getTime();
      const now = new Date();
      const nowTime = now.getTime();
      const difference = eventTime - nowTime;

      // Check if today is the event day (same year, month, date)
      const isSameDay =
        now.getFullYear() === eventDate.getFullYear() &&
        now.getMonth() === eventDate.getMonth() &&
        now.getDate() === eventDate.getDate();

      if (isSameDay) {
        setStatusState('today');
      } else if (difference < 0) {
        setStatusState('after');
      } else {
        setStatusState('before');
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
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
          <span>
            {statusState === 'today'
              ? 'இன்று மகா கும்பாபிஷேக திருநாள்!'
              : statusState === 'after'
              ? 'கும்பாபிஷேக திருவிழா'
              : 'புனித கும்பாபிஷேக நந்நாள்'}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold font-serif text-temple-gold mb-2">
          கும்பாபிஷேக திருவிழா
        </h3>
        
        <p className="text-sm md:text-base text-temple-sand/90 mb-6 font-serif">
          {templeData.KUMBABHISHEKAM_DATE_DISPLAY} • {templeData.KUMBABHISHEKAM_TIME_DISPLAY}
        </p>

        {/* State A: Before Event */}
        {statusState === 'before' && (
          <div>
            <p className="text-xs text-temple-goldLight font-medium mb-4 tracking-wider uppercase font-serif">
              மகா கும்பாபிஷேக திருநாளுக்கு இன்னும்...
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

        {/* State B: On Event Day */}
        {statusState === 'today' && (
          <div className="bg-temple-maroonDark/90 p-6 rounded-xl border border-temple-gold/40 text-temple-gold flex flex-col items-center gap-3">
            <HeartHandshake className="w-12 h-12 text-temple-gold animate-bounce" />
            <p className="text-xl md:text-2xl font-bold font-serif text-white">
              இன்று மகா கும்பாபிஷேக திருநாள்!
            </p>
            <p className="text-sm md:text-base text-temple-sand font-medium leading-relaxed">
              பக்தர்கள் அனைவரும் வருகை தந்து இறைவனின் அருளையும் திருவருட் பிரசாதத்தையும் பெறுமாறு அன்புடன் கேட்டுக்கொள்ளப்படுகிறார்கள்.
            </p>
          </div>
        )}

        {/* State C: After Event */}
        {statusState === 'after' && (
          <div className="bg-temple-maroonDark/90 p-6 rounded-xl border border-temple-gold/40 text-temple-gold flex flex-col items-center gap-3">
            <CheckCircle2 className="w-12 h-12 text-temple-gold" />
            <p className="text-xl md:text-2xl font-bold font-serif text-white">
              மகா கும்பாபிஷேகம் இனிதே நிறைவுற்றது.
            </p>
            <p className="text-sm md:text-base text-temple-sand font-medium leading-relaxed">
              அருள்மிகு ஸ்ரீ மரகதவல்லி அம்பாள் சமேத ஸ்ரீ மாணிக்கேஸ்வரர் சுவாமியின் திருவருள் பக்த கோடிகள் அனைவருக்கும் கிடைக்கட்டும்.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
