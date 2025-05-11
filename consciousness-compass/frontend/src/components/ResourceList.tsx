import React, { useState } from 'react';
import type { ResourceLink } from '../api/api';
import ExternalLinkWarning from './ExternalLinkWarning';

interface ResourceListProps {
  resources: ResourceLink[];
}

const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
  const [warningUrl, setWarningUrl] = useState<string>('');
  const [showWarning, setShowWarning] = useState(false);

  const handleResourceClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    setWarningUrl(url);
    setShowWarning(true);
  };

  const handleConfirm = () => {
    window.open(warningUrl, '_blank', 'noopener,noreferrer');
    setShowWarning(false);
  };

  return (
    <div className="mt-3 sm:mt-4">
      <ExternalLinkWarning 
        url={warningUrl} 
        isOpen={showWarning} 
        onClose={() => setShowWarning(false)} 
        onConfirm={handleConfirm} 
      />
      
      <ul className="space-y-3 sm:space-y-4">
        {resources.map((resource, index) => (
          <li 
            key={resource.id} 
            className="bg-gray-800 bg-opacity-50 rounded-lg p-3 sm:p-4 hover:bg-gray-700 transition-all duration-300 
                      transform hover:scale-[1.01] border border-gray-700 hover:border-indigo-800 shadow-md"
            style={{ 
              animationDelay: `${index * 100}ms`, 
              animation: 'fadeIn 0.5s ease-in forwards',
              opacity: 0 
            }}
          >
            <a 
              href={resource.url} 
              onClick={(e) => handleResourceClick(e, resource.url)}
              className="block group"
              aria-label={`Visit ${resource.title}`}
            >
              <div className="flex justify-between items-start">
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-indigo-300 group-hover:text-amber-200 mb-1 transition-colors">
                  {resource.title}
                </h4>
                <span className="bg-gray-900 bg-opacity-50 rounded-full p-1 text-xs text-indigo-300 opacity-60 group-hover:opacity-100 transition-opacity">
                  External Link
                </span>
              </div>
              <p className="text-gray-300 text-sm">{resource.description}</p>
              <div className="mt-3 flex justify-between items-center pt-2 border-t border-gray-700">
                <span className="text-xs text-gray-400 truncate max-w-[250px] opacity-70 hover:opacity-100 transition-opacity">{resource.url}</span>
                <span className="text-indigo-400 text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center">
                  Visit 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
