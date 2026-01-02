
import React from 'react';
import Hero from './components/Hero';
import TechSection from './components/TechSection';
import AuditSection from './components/AuditSection';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import RoadmapSection from './components/RoadmapSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
      <Hero />
      <TechSection />
      <AuditSection />
      <AboutSection />
      <Testimonials />
      <RoadmapSection />
      <BookingSection />
      <Footer />
    </main>
  );
};

export default App;
