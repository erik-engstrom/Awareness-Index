import React from 'react';

interface CarouselSectionProps {
  name: string;
  description: string;
  imageUrl?: string;
  isActive: boolean;
  onClick: () => void;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ 
  name, 
  description, 
  imageUrl,
  isActive, 
  onClick 
}) => {
  return (
    <div 
      onClick={!isActive ? onClick : undefined}
      className={`flex flex-col items-center p-5 sm:p-7 bg-gray-900 bg-opacity-70 backdrop-blur-md 
              rounded-lg shadow-xl border transition-all duration-300 relative h-full cursor-pointer
              ${isActive 
                ? 'border-indigo-500 shadow-lg shadow-indigo-900/40' 
                : 'border-indigo-800/30 hover:border-indigo-700'}`}
    >
      {imageUrl && (
        <div className="w-full mb-4 overflow-hidden rounded-md">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-40 object-cover rounded-md transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="font-semibold text-amber-300 text-xl sm:text-2xl mb-4 pb-3 w-full text-center border-b border-indigo-700/40">
        {name}
      </div>
      <div className="text-gray-200 text-sm sm:text-base mb-8 leading-relaxed flex-grow text-center max-w-lg mx-auto">
        {description}
      </div>
      <button className="mt-auto py-2 sm:py-3 px-5 sm:px-6 rounded-md bg-indigo-800/70 text-white hover:bg-indigo-700 transition-all text-sm sm:text-base font-medium flex items-center group border border-indigo-600/50 hover:border-indigo-500">
        Explore
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselSection;
