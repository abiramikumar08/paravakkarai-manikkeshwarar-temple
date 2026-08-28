import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';
import Home from './pages/Home';
import TempleInfo from './pages/TempleInfo';
import Vinayagar from './pages/Vinayagar';
import Kumbhabhishekam from './pages/Kumbhabhishekam';
import Thiruvasagam from './pages/Thiruvasagam';
import ShivaDays from './pages/ShivaDays';
import Gallery from './pages/Gallery';
import Location from './pages/Location';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (path === 'vinayagar' || hash === 'vinayagar') return 'vinayagar';
    }
    return 'home';
  });
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  // Check if first visit in this session for QR scan landing
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visited_paravakkarai_temple');
    if (!hasVisited) {
      setShowWelcomeModal(true);
      sessionStorage.setItem('visited_paravakkarai_temple', 'true');
    }
  }, []);

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'temple':
        return <TempleInfo setActiveTab={setActiveTab} />;
      case 'vinayagar':
        return <Vinayagar />;
      case 'kumbhabhishekam':
        return <Kumbhabhishekam />;
      case 'thiruvasagam':
        return <Thiruvasagam />;
      case 'shiva-days':
        return <ShivaDays />;
      case 'gallery':
        return <Gallery />;
      case 'location':
        return <Location />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-temple-cream text-temple-stone font-sans flex flex-col selection:bg-temple-maroon selection:text-temple-gold bg-temple-pattern">
      
      {/* Landing Welcome Experience Gateway */}
      <WelcomeModal
        isOpen={showWelcomeModal}
        onClose={() => setShowWelcomeModal(false)}
      />

      {/* Header Bar */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {renderActivePage()}
      </main>

      {/* Devotional Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
