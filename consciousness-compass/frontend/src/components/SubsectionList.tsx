import React, { useState, useEffect } from 'react';
import type { ResourceLink, Subsection } from '../api/api';
import { fetchResourceLinks } from '../api/api';
import ResourceList from './ResourceList';

interface SubsectionListProps {
  subsection: Subsection;
}

const SubsectionList: React.FC<SubsectionListProps> = ({ subsection }) => {
  const [resources, setResources] = useState<ResourceLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    const loadResources = async () => {
      try {
        setIsLoading(true);
        const data = await fetchResourceLinks(subsection.id);
        setResources(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load resources:', err);
        setError('Failed to load resources. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadResources();
  }, [subsection.id]);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="bg-gray-900 bg-opacity-60 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] border border-gray-800">
      <div 
        className="cursor-pointer flex justify-between items-center" 
        onClick={toggleExpand}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => e.key === 'Enter' && toggleExpand()}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-indigo-200">{subsection.title}</h3>
        <button 
          className="text-indigo-300 hover:text-indigo-100 transition-all duration-300 transform hover:scale-110" 
          aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
        >
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`transition-all duration-300 delay-100 ${isExpanded ? 'translate-y-0' : 'translate-y-4'}`}>
          <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{subsection.description}</p>
          
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Loading resources...</span>
            </div>
          )}
          
          {error && <p className="text-red-400">{error}</p>}
          
          {!isLoading && !error && resources.length === 0 && (
            <p className="text-gray-400">No resources available.</p>
          )}
          
          {!isLoading && !error && resources.length > 0 && (
            <ResourceList resources={resources} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SubsectionList;
