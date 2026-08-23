import React, { useState } from 'react';
import { templeData } from '../data/templeData';
import { BookOpen, Plus, Minus, RotateCcw, Copy, Check } from 'lucide-react';

export default function Thiruvasagam() {
  const [fontSize, setFontSize] = useState(18); // default font size px
  const [showMeanings, setShowMeanings] = useState(true);
  const [copied, setCopied] = useState(false);
  const [selectedSection, setSelectedSection] = useState('அனைத்தும்');

  const verses = templeData.SIVAPURANAM_VERSES || [];

  const sections = ['அனைத்தும்', 'சிவபுராணம்', 'திருவெம்பாவை', 'திருப்பள்ளியெழுச்சி', 'திருவாசகம் - பிற பாடல்கள்'];

  const filteredVerses = selectedSection === 'அனைத்தும்'
    ? verses
    : selectedSection === 'திருவாசகம் - பிற பாடல்கள்'
      ? verses.filter(v => !['சிவபுராணம்', 'திருவெம்பாவை', 'திருப்பள்ளியெழுச்சி'].includes(v.section))
      : verses.filter(v => v.section === selectedSection);

  const handleCopy = () => {
    const textToCopy = filteredVerses.map(v => `[${v.section} - பாடல் ${v.line}]\n${v.text}\n\nபொருள்: ${v.meaning}`).join('\n\n---\n\n');
    navigator.clipboard.writeText(`மாணிக்கவாசகர் அருளிய திருவாசகம் பாடல்கள்\n\n${textToCopy}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-temple-maroonDark text-temple-sand space-y-8 animate-fadeIn pb-12 rounded-3xl p-4 md:p-8 border border-temple-gold/40 shadow-2xl">
      
      {/* Page Header */}
      <div className="text-center space-y-3 border-b border-temple-gold/30 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-temple-gold/20 text-temple-goldLight text-xs font-semibold tracking-widest font-serif border border-temple-gold/30">
          <BookOpen className="w-4 h-4 text-temple-gold" />
          <span>சைவ பன்னிரு திருமுறைகள்</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold font-serif text-temple-gold">
          மாணிக்கவாசகர் அருளிய திருவாசகம்
        </h1>

        <p className="text-sm md:text-base text-temple-sand/90 max-w-2xl mx-auto font-serif italic">
          "நமச்சிவாய வாழ்க! நாதன் தாள் வாழ்க!"
        </p>

        <p className="text-xs text-temple-sand/70 max-w-xl mx-auto">
          சிவபுராணம், திருவெம்பாவை, திருப்பள்ளியெழுச்சி உள்ளிட்ட திருவாசகத் திருமுறைப் பாடல்களின் தொகுப்பு.
        </p>
      </div>

      {/* Section Selection Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
        {sections.map((sec, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSection(sec)}
            className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
              selectedSection === sec
                ? 'bg-temple-gold text-temple-maroonDark border border-temple-gold shadow-md'
                : 'bg-temple-maroon/80 text-temple-sand hover:bg-temple-maroon border border-temple-gold/30'
            }`}
          >
            {sec}
          </button>
        ))}
      </div>

      {/* Reading Experience Controls Bar */}
      <div className="sticky top-20 z-30 p-3 md:p-4 rounded-2xl bg-temple-maroon/95 border border-temple-gold/40 shadow-xl backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-temple-sand">
        
        {/* Font Size Adjusters */}
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <span className="hidden sm:inline text-temple-goldLight">எழுத்து அளவு:</span>
          <button
            onClick={() => setFontSize(prev => Math.min(prev + 2, 30))}
            className="p-2 rounded-lg bg-temple-maroonDark border border-temple-gold/40 text-temple-gold hover:bg-temple-gold hover:text-temple-maroonDark transition-colors"
            title="எழுத்தை பெரிதாக்குக"
          >
            <Plus className="w-4 h-4" />
          </button>
          <span className="px-2 font-mono text-temple-gold">{fontSize}px</span>
          <button
            onClick={() => setFontSize(prev => Math.max(prev - 2, 14))}
            className="p-2 rounded-lg bg-temple-maroonDark border border-temple-gold/40 text-temple-gold hover:bg-temple-gold hover:text-temple-maroonDark transition-colors"
            title="எழுத்தை சிறிதாக்குக"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={() => setFontSize(18)}
            className="p-2 rounded-lg bg-temple-maroonDark border border-temple-gold/40 text-temple-gold hover:bg-temple-gold hover:text-temple-maroonDark transition-colors text-xs"
            title="இயல்பு அளவு"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Feature Action Buttons */}
        <div className="flex items-center gap-2 text-xs font-semibold">
          
          {/* Toggle Meaning */}
          <button
            onClick={() => setShowMeanings(!showMeanings)}
            className={`px-3 py-2 rounded-xl border transition-colors ${
              showMeanings 
                ? 'bg-temple-gold text-temple-maroonDark border-temple-gold font-bold' 
                : 'bg-temple-maroonDark text-temple-sand border-temple-gold/40'
            }`}
          >
            <span>{showMeanings ? 'பொருள் மறைக்க' : 'பொருள் காட்ட'}</span>
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="px-3 py-2 rounded-xl bg-temple-maroonDark border border-temple-gold/40 text-temple-gold hover:bg-temple-gold hover:text-temple-maroonDark transition-colors flex items-center gap-1.5"
            title="பாடல்களை நகலெடுக்க"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-temple-gold" />}
            <span>{copied ? 'நகலெடுக்கப்பட்டது!' : 'நகலெடுக்க'}</span>
          </button>

        </div>

      </div>

      {/* Main Devotional Text Container (Permanent Dark Mode Reading Area) */}
      <section className="space-y-6 max-w-4xl mx-auto pt-4">
        {filteredVerses.map((verse) => (
          <div 
            key={verse.id}
            className="p-6 md:p-8 rounded-3xl bg-temple-maroon/70 border border-temple-gold/30 shadow-md hover:border-temple-gold transition-all duration-200"
          >
            
            {/* Verse Header Badge */}
            <div className="flex items-center justify-between mb-3 border-b border-temple-gold/20 pb-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-temple-maroonDark text-temple-gold border border-temple-gold/40">
                {verse.section} • பாடல் {verse.line}
              </span>
              <span className="text-xs text-temple-goldLight font-serif italic">
                மாணிக்கவாசகர் அருளியது
              </span>
            </div>

            {/* Verse Tamil Text */}
            <div 
              style={{ fontSize: `${fontSize}px`, lineHeight: 2 }}
              className="font-serif font-bold whitespace-pre-line tracking-wide text-temple-sand py-2"
            >
              {verse.text}
            </div>

            {/* Verse Meaning */}
            {showMeanings && verse.meaning && (
              <div className="mt-4 p-4 rounded-2xl bg-temple-maroonDark/90 border border-temple-gold/30 text-sm font-sans leading-relaxed text-temple-sand/90">
                <span className="text-xs font-bold font-serif text-temple-gold block mb-1">
                  பாடலின் பொருள்:
                </span>
                <p className="italic text-temple-sand/95">
                  {verse.meaning}
                </p>
              </div>
            )}

          </div>
        ))}
      </section>

      {/* Daily Prayers Summary */}
      <section className="pt-10 border-t border-temple-gold/30 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-temple-goldLight font-serif">
            சைவ திருமுறைகள்
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-temple-gold">
            தினசரி பாராயணத்திற்கு
          </h2>
          <p className="text-xs text-temple-sand/80">
            பக்தர்கள் தினமும் பாராயணம் செய்யக்கூடிய பாரம்பரிய சைவ திருமுறைத் துதிகள்.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {templeData.DAILY_PRAYERS.map((prayer) => (
            <div 
              key={prayer.id}
              className="p-5 rounded-2xl bg-temple-maroon/80 border border-temple-gold/30 space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold font-serif text-temple-gold">
                  {prayer.title}
                </h3>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-temple-gold/20 text-temple-goldLight border border-temple-gold/30">
                  {prayer.author}
                </span>
              </div>
              <p className="text-xs text-temple-sand/80 leading-relaxed">
                {prayer.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
