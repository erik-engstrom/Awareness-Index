import React, { useState, useEffect } from 'react';
import type { Section as SectionType } from '../api/api';
import { fetchSections } from '../api/api';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import Navigation from '../components/Navigation';

const HomePage: React.FC = () => {
  const [sections, setSections] = useState<SectionType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSections = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSections();
        setSections(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load sections:', err);
        setError('Failed to load content. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadSections();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#13151f] to-[#1a1f35]">
      <Navigation sections={sections} />
      <HeroSection />
      
      <div id="content-start" className="pt-8">
        {isLoading && (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-center text-gray-300">
              <svg className="animate-spin h-12 w-12 mx-auto mb-4 text-amber-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-lg">Loading your consciousness journey...</p>
            </div>
          </div>
        )}
        
        {error && (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-center text-red-400">
              <svg className="h-10 w-10 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
        
        {!isLoading && !error && sections.length === 0 && (
          <div className="flex justify-center items-center min-h-[300px]">
            <p className="text-gray-300">No content available.</p>
          </div>
        )}
        
        {!isLoading && !error && sections.length > 0 && (
          <div className="pb-16">
            {sections.map((section) => (
              <Section key={section.id} section={section} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
