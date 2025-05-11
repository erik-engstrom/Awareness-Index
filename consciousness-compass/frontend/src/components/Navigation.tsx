import React, { useState, useEffect } from 'react';
import type { Section } from '../api/api';

interface NavigationProps {
  sections: Section[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#13151f] bg-opacity-95 shadow-md py-1 sm:py-2' 
          : 'bg-transparent py-2 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 sm:h-14 md:h-16">
          <div className="flex items-center">
            <a href="#" className="text-base sm:text-lg md:text-xl font-bold text-amber-100">
              The Awareness Index
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#section-${section.id}`}
                className="text-gray-300 hover:text-indigo-300 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                {section.title}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#13151f] bg-opacity-95 shadow-lg border-b border-gray-800">
          <div className="px-2 pt-1 pb-2 space-y-0.5 max-h-[70vh] overflow-y-auto">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#section-${section.id}`}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
