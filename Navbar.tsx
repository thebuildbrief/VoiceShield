import React, { useState } from 'react';
import { Shield, Sparkles, Menu, X, Terminal, Volume2 } from 'lucide-react';
import { audioFx } from '../utils/audioEffects';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'simulator', label: 'Scam Simulator', highlight: true },
    { id: 'checklist', label: 'Safety Checklist' },
    { id: 'guide', label: 'Response Protocol' },
    { id: 'learn', label: 'Learn' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (id: string) => {
    audioFx.playTap(520);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-plum-950/85 backdrop-blur-md border-b border-plum-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Brand Label */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-lavender/30 via-plum-800 to-plum-900 border border-lavender/40 shadow-inner group">
              <Shield className="w-5 h-5 text-lime transition-transform group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-lime border-2 border-plum-950" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-cream">
                  Voice<span className="text-lime">Shield</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-plum-800 border border-lavender/30 text-lavender">
                  PROTOTYPE
                </span>
              </div>
              <p className="text-[10px] font-medium text-cream-400 tracking-wide uppercase">
                by The Build Brief
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-lime bg-plum-800/80 border border-lime/30 shadow-sm'
                    : 'text-cream-300 hover:text-cream hover:bg-plum-850'
                } ${item.highlight ? 'relative font-semibold' : ''}`}
              >
                {item.label}
                {item.highlight && (
                  <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime" />
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Right Action: Try Demo Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('simulator')}
              className="px-4 py-2 rounded-xl bg-lime hover:bg-lime-400 text-plum-950 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(223,255,117,0.3)] hover:shadow-[0_0_25px_rgba(223,255,117,0.5)] transition-all active:scale-95 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Try the Demo</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('simulator')}
              className="px-3 py-1.5 rounded-lg bg-lime text-plum-950 text-xs font-bold"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-plum-800 text-cream-300 hover:text-cream hover:bg-plum-700 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-plum-900 border-b border-plum-700 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                activeSection === item.id
                  ? 'bg-plum-800 text-lime border border-lime/30'
                  : 'text-cream-200 hover:bg-plum-800/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-plum-800">
            <p className="text-[11px] text-cream-400 px-3">
              Designed as an awareness demo by <strong className="text-lavender">The Build Brief</strong>.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
