import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScamSimulator } from './components/ScamSimulator';
import { SafetyChecker } from './components/SafetyChecker';
import { SuspiciousGuide } from './components/SuspiciousGuide';
import { LearnSection } from './components/LearnSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'simulator', 'checklist', 'guide', 'learn', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-cream selection:bg-lavender selection:text-plum-950 font-sans relative">
      {/* Background cyber grid */}
      <div className="fixed inset-0 bg-grid-cyber pointer-events-none opacity-20 -z-20" />

      {/* Global Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main>
        <div id="hero">
          <Hero
            onStartSimulator={() => scrollToSection('simulator')}
            onExploreLearn={() => scrollToSection('learn')}
          />
        </div>

        <ScamSimulator />

        <SafetyChecker />

        <SuspiciousGuide />

        <LearnSection />

        <AboutSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default App;
