import React, { useState } from 'react';
import { templeData } from '../data/templeData';
import Countdown from '../components/Countdown';
import { Sparkles, Calendar, Clock, Flame, BookOpen, Heart, User, Building, Phone, CreditCard, ShieldCheck, FileText } from 'lucide-react';

export default function Kumbhabhishekam() {
  const details = templeData.KUMBABHISHEKAM_DETAILS || {};

  return (
    <div className="space-y-10 animate-fadeIn pb-8 max-w-5xl mx-auto">
      
      {/* Page Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-temple-maroon via-temple-maroonLight to-temple-maroonDark text-white p-8 md:p-12 border-2 border-temple-gold/40 shadow-temple-lg text-center space-y-4">
        
        {/* Sacred Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/20 text-temple-goldLight text-xs md:text-sm font-semibold tracking-widest font-serif border border-temple-gold/30">
          <Sparkles className="w-4 h-4 text-temple-gold" />
          <span>மகா கும்பாபிஷேக திருவிழா அழைப்பிதழ்</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
          {details.full_deity_heading || templeData.TEMPLE_NAME}
        </h1>

        <p className="text-xl md:text-2xl font-serif text-temple-gold font-bold">
          கும்பாபிஷேக நாள்: {details.date} ({details.day})
        </p>

        <p className="text-sm md:text-base text-temple-sand/90 max-w-3xl mx-auto font-serif">
          {details.location_details}
        </p>

        {/* Lagnam Banner */}
        <div className="p-3 rounded-2xl bg-temple-maroonDark/80 border border-temple-gold/30 max-w-xl mx-auto text-xs sm:text-sm text-temple-goldLight font-medium">
          <p><strong>லக்னம் & முஹூர்த்தம்:</strong> {details.lagnam}</p>
          <p className="font-bold text-temple-gold mt-1 text-sm sm:text-base">✨ {details.kumbhabhishekam_moment}</p>
        </div>

        <p className="text-xs text-temple-goldLight/80 italic pt-1">
          "{details.invitation_source_note}"
        </p>

      </div>

      {/* Live Kumbhabhishekam Countdown Section */}
      <Countdown />

      {/* 1. கும்பாபிஷேகம் பற்றிய அறிமுகம் */}
      <section className="bg-temple-cream rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 bg-temple-maroon rounded-full" />
          <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
            கும்பாபிஷேகம் என்றால் என்ன?
          </h2>
        </div>
        <p className="text-base text-temple-stone leading-relaxed font-serif pt-1">
          கும்பாபிஷேகம் (மகா சும்ப்ரோக்ஷணம்) என்பது திருக்கோயிலின் விமானங்கள், கோபுரங்கள் மற்றும் மூல மூர்த்திகளுக்கு புனித நீரால் அபிஷேகம் செய்து, தெய்வீக ஆற்றலையும் சைதன்யத்தையும் புதுப்பிக்கும் மகா ஆன்மிக நிகழ்வாகும்.
        </p>
        <p className="text-sm text-temple-stoneLight leading-relaxed">
          யாகசாலையில் வேத ஆகம மந்திரங்கள் மற்றும் திருமுறைப் பண்ணோடு பூஜிக்கப்பட்ட புனித நீர்க் கலசங்கள் கோபுரக் கலசங்கள் மீதும் சுவாமி மீது ஊற்றப்பட்டு மகா அபிஷேகம் நடத்தப்படுகிறது.
        </p>
      </section>

      {/* 2. சிறப்பு அழைப்பாளர்கள் (Special Guests) */}
      {details.special_guests && details.special_guests.length > 0 && (
        <section className="bg-gradient-to-r from-temple-maroon to-temple-maroonLight text-white rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-temple-gold" />
            <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-gold">
              சிறப்பு அழைப்பாளர்
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.special_guests.map((guest, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-temple-maroonDark/80 border border-temple-gold/30 space-y-1">
                <span className="text-lg font-bold font-serif text-white block">{guest.name}</span>
                <span className="text-xs text-temple-goldLight block">{guest.title}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. அதிகாரப்பூர்வ யாகசாலை விழா நிகழ்ச்சி நிரல் (Full Schedule) */}
      <section className="bg-temple-cream rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-temple-gold/30 pb-4">
          <div className="w-3 h-8 bg-temple-maroon rounded-full" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
              அதிகாரப்பூர்வ யாகசாலை நிகழ்ச்சி நிரல்
            </h2>
            <p className="text-xs text-temple-stoneLight">கும்பாபிஷேக திருவிழா பூஜைகள் மற்றும் யாகசாலை காலங்கள்</p>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-6">
          {details.schedule && details.schedule.map((dayGroup, dIdx) => (
            <div key={dIdx} className="bg-temple-sand/70 rounded-2xl p-5 border border-temple-gold/30 space-y-4">
              <h3 className="text-lg font-bold font-serif text-temple-maroon flex items-center gap-2 border-b border-temple-gold/30 pb-2">
                <Calendar className="w-5 h-5 text-temple-gold" />
                <span>{dayGroup.date_display}</span>
              </h3>

              <div className="space-y-3">
                {dayGroup.events.map((evt, eIdx) => (
                  <div key={eIdx} className="p-4 rounded-xl bg-temple-cream border border-temple-gold/20 flex flex-col sm:flex-row sm:items-start justify-between gap-3 hover:border-temple-gold transition-colors">
                    <span className="px-3 py-1 rounded-lg bg-temple-maroon text-temple-gold text-xs font-mono font-bold shrink-0 self-start">
                      {evt.time}
                    </span>
                    <p className="text-xs md:text-sm text-temple-stone leading-relaxed font-medium flex-1">
                      {evt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. திருக்கோயில் நிர்வாகிகள் & அர்ச்சகர்கள் (Key Persons & Priests) */}
      {details.officials && (
        <section className="bg-temple-sand rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-8 bg-temple-maroon rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
              கோயில் நிர்வாகிகள், அர்ச்சகர்கள் & திருப்பணியாளர்கள்
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {details.officials.map((off, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-temple-cream border border-temple-gold/30 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-temple-goldDark block font-serif">
                  {off.role}
                </span>
                <p className="text-xs md:text-sm font-semibold text-temple-maroon font-serif leading-snug">
                  {off.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. திருப்பணிக் குழுவினர் (Donors & Organizers) */}
      {details.donors_and_organizers && (
        <section className="bg-temple-cream rounded-3xl p-6 md:p-8 border border-temple-gold/40 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-8 bg-temple-maroon rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-maroon">
              திருப்பணிக் குழுவினர்
            </h2>
          </div>

          <p className="text-xs text-temple-stoneLight">
            கும்பாபிஷேகத் திருப்பணியில் அன்புடன் பங்கேற்கும் உபயதாரர்கள் மற்றும் கிராம நிர்வாகிகள்:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {details.donors_and_organizers.map((donor, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-temple-sand/60 border border-temple-gold/20 text-xs font-medium text-temple-stone flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-temple-gold shrink-0" />
                <span>{donor}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. தொடர்பு & வங்கி கணக்கு விபரங்கள் (Contact & Donations) */}
      {details.contact && (
        <section className="bg-gradient-to-r from-temple-maroon via-temple-maroonLight to-temple-maroonDark text-white rounded-3xl p-6 md:p-8 border-2 border-temple-gold/40 shadow-lg space-y-6">
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-temple-gold" />
            <h2 className="text-xl md:text-2xl font-bold font-serif text-temple-gold">
              திருப்பணி நன்கொடை & தொடர்பு விவரங்கள்
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Contact Person */}
            <div className="p-5 rounded-2xl bg-temple-maroonDark/80 border border-temple-gold/30 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-temple-gold block font-serif">
                தொடர்பு கொள்ள
              </span>
              <p className="text-sm font-bold text-white font-serif">
                {details.contact.coordinator}
              </p>
              <div className="flex items-center gap-2 text-temple-goldLight text-sm font-mono font-bold">
                <Phone className="w-4 h-4 text-temple-gold" />
                <a href={`tel:${details.contact.phone}`} className="hover:underline">
                  {details.contact.phone}
                </a>
              </div>
            </div>

            {/* Bank Details */}
            <div className="p-5 rounded-2xl bg-temple-maroonDark/80 border border-temple-gold/30 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-temple-gold block font-serif">
                வங்கி கணக்கு விவரங்கள் (நன்கொடைக்கு)
              </span>
              <div className="text-xs text-temple-sand/90 space-y-1 font-mono">
                <p><strong className="text-white">வங்கி:</strong> {details.contact.bank}</p>
                <p><strong className="text-white">பெயர்:</strong> {details.contact.account_name}</p>
                <p><strong className="text-white">கிளை:</strong> {details.contact.branch}</p>
                <p><strong className="text-white">கணக்கு எண்:</strong> {details.contact.account_no}</p>
                <p><strong className="text-white">IFSC Code:</strong> {details.contact.ifsc}</p>
                <p className="text-temple-goldLight pt-1">Cell: {details.contact.bank_phone}</p>
              </div>
            </div>

          </div>

          <p className="text-xs text-center text-temple-goldLight/80 pt-2 border-t border-temple-gold/20">
            பக்தர்கள் அனைவரும் குடும்பத்தினருடன் வருகை தந்து இறைவனின் பேரருளைப் பெற வேண்டுமாய் அன்புடன் அழைக்கிறோம்.
          </p>
        </section>
      )}

    </div>
  );
}
