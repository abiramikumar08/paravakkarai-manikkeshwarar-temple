import React, { useState } from 'react';
import { templeData } from '../data/templeData';
import { Menu, X, Home, Landmark, HeartHandshake, Sparkles, BookOpen, Calendar, Image as ImageIcon, MapPin } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'முகப்பு', icon: Home },
    { id: 'temple', label: 'திருக்கோயில்', icon: Landmark },
    { id: 'vinayagar', label: 'ஸ்ரீ பொய்யா விநாயகர்', icon: Sparkles },
    { id: 'kumbhabhishekam', label: 'கும்பாபிஷேகம்', icon: Sparkles },
    { id: 'thiruvasagam', label: 'திருவாசகம்', icon: BookOpen },
    { id: 'shiva-days', label: 'சிவ வழிபாட்டு நாட்கள்', icon: Calendar },
    { id: 'gallery', label: 'புகைப்படங்கள்', icon: ImageIcon },
    { id: 'location', label: 'இருப்பிடம்', icon: MapPin },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Sacred Mantra Header Bar */}
      <div className="bg-temple-maroonDark text-temple-gold text-xs md:text-sm py-1.5 px-4 text-center border-b border-temple-gold/20 flex items-center justify-center gap-3">
        <span className="font-serif tracking-widest font-semibold">{templeData.HEADER_MANTHRA}</span>
        <span className="text-temple-gold/40">•</span>
        <span className="hidden sm:inline italic">{templeData.MANTRA_MAIN}</span>
        <span className="hidden sm:inline text-temple-gold/40">•</span>
        <span>{templeData.LOCATION_SHORT}</span>
      </div>

      {/* Main Header Bar */}
      <header className="sticky top-0 z-40 bg-temple-cream/95 backdrop-blur-md border-b border-temple-gold/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo / Title Area */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none max-w-[75%] sm:max-w-none"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-temple-maroon flex items-center justify-center text-temple-gold border border-temple-gold/50 shadow-md group-hover:scale-105 transition-transform shrink-0">
                <span className="text-xl md:text-2xl font-serif font-bold">ௐ</span>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-serif text-temple-maroon leading-tight whitespace-nowrap group-hover:text-temple-maroonLight transition-colors">
                  {templeData.TEMPLE_SHORT_NAME}
                </h1>
                <p className="text-[11px] sm:text-xs text-temple-goldDark font-semibold tracking-wide">
                  {templeData.LOCATION_SHORT}
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                      isActive
                        ? 'bg-temple-maroon text-temple-gold shadow-sm border border-temple-gold/30 font-bold'
                        : 'text-temple-stone hover:text-temple-maroon hover:bg-temple-sand'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${isActive ? 'text-temple-gold' : 'text-temple-maroon'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-temple-maroon hover:bg-temple-sand focus:outline-none border border-temple-gold/30"
              aria-label="பட்டி"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-temple-cream border-b border-temple-gold/30 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm md:text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-temple-maroon text-temple-gold font-bold shadow-sm'
                      : 'text-temple-stone hover:bg-temple-sand'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-temple-gold' : 'text-temple-maroon'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Bottom Sticky Mobile Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-temple-cream/95 backdrop-blur-lg border-t border-temple-gold/40 shadow-2xl py-1.5 px-3 flex justify-around items-center">
        {[
          { id: 'home', label: 'முகப்பு', icon: Home },
          { id: 'temple', label: 'திருக்கோயில்', icon: Landmark },
          { id: 'kumbhabhishekam', label: 'கும்பாபிஷேகம்', icon: Sparkles },
          { id: 'thiruvasagam', label: 'திருவாசகம்', icon: BookOpen },
          { id: 'location', label: 'இருப்பிடம்', icon: MapPin },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center py-1 px-1.5 rounded-lg transition-colors ${
                isActive ? 'text-temple-maroon font-bold scale-105' : 'text-temple-stoneLight hover:text-temple-maroon'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-temple-maroon' : 'text-temple-stoneLight'}`} />
              <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
            </button>
          );
        })}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col items-center py-1 px-1.5 rounded-lg text-temple-stoneLight hover:text-temple-maroon"
        >
          <Menu className="w-5 h-5 text-temple-maroon" />
          <span className="text-[10px] mt-0.5 font-medium">பட்டி</span>
        </button>
      </div>
    </>
  );
}
