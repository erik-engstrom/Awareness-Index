import React, { useState, useEffect } from 'react';
import type { Section as SectionType, Subsection } from '../api/api';
import { fetchSubsections } from '../api/api';
import SubsectionList from './SubsectionList';
import { getSectionColors } from '../utils/colorPalette';

interface SectionProps {
  section: SectionType;
}

const Section: React.FC<SectionProps> = ({ section }) => {
  const [subsections, setSubsections] = useState<Subsection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSubsections = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSubsections(section.id);
        setSubsections(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load subsections:', err);
        setError('Failed to load subsections. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadSubsections();
  }, [section.id]);

  const colors = getSectionColors(section.id);
  
  return (
    <section 
      id={`section-${section.id}`} 
      className="py-10 sm:py-16 px-3 sm:px-5 md:px-7 border-b border-gray-800 last:border-b-0"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 sm:mb-10 relative">
          {/* Section number indicator */}
          <div className="absolute -left-12 sm:-left-16 top-0 hidden md:flex items-center justify-center">
            <div className={`text-4xl sm:text-5xl font-bold text-gray-800 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent opacity-20`}>
              {section.id < 10 ? `0${section.id}` : section.id}
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 relative inline-block">
            <span className={`bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
              {section.title}
            </span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r ${colors.accent} opacity-40 rounded`}></span>
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mt-3 sm:mt-5">
            {section.description}
          </p>
        </div>

        {isLoading && (
          <div className="flex items-center space-x-3 text-gray-400">
            <svg className="animate-spin h-5 w-5 text-amber-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Loading subsections...</span>
          </div>
        )}
        
        {error && <p className="text-red-400 bg-red-900 bg-opacity-20 p-3 rounded-md">{error}</p>}
        
        {!isLoading && !error && subsections.length === 0 && (
          <p className="text-gray-400">No subsections available.</p>
        )}
        
        {!isLoading && !error && subsections.length > 0 && (
          <div className="space-y-8 relative">
            {/* Decorative line */}
            <div className="absolute left-8 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-800 via-purple-800 to-transparent opacity-30 hidden sm:block"></div>
            
            {subsections.map((subsection, index) => (
              <div 
                key={subsection.id} 
                className="transform transition-all duration-500"
                style={{ 
                  opacity: 0,
                  animation: `fadeIn 0.6s ease-out forwards ${0.1 + index * 0.1}s`
                }}
              >
                <SubsectionList subsection={subsection} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
