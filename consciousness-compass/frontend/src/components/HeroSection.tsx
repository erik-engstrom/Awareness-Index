import React, { useState, useRef, useEffect, useCallback } from 'react';
import awarenessIndexLogo from '../assets/awareness-index.png';
import meditationAurora from '../assets/meditation-aurora.png';
import meditationMindfulnessImage from '../assets/section-images/MeditationSection.png';
import exploreConsciousnessImage from '../assets/section-images/ExploreConsciousness.png';
import monroeInstituteImage from '../assets/section-images/MonroeInstitute.png';
import './HeroSection.css';
import lucidDreamingImage from '../assets/section-images/LucidDreaming.png';
import OBEImage from '../assets/section-images/OBE.png';
import remoteViewingImage from '../assets/section-images/RemoteViewing.png';
import CarouselSection from './CarouselSection';

interface Section {
  name: string;
  description: string;
  imageUrl?: string;
}

const sections: Section[] = [
  {
    name: 'Meditation & Mindfulness',
    description: 'Guided meditations, techniques and traditions, benefits and scientific studies',
    imageUrl: meditationMindfulnessImage,
  },
  {
    name: 'Consciousness & Science',
    description: 'Neuroscientific studies, quantum theories, interdisciplinary research',
    imageUrl: exploreConsciousnessImage,
  },
  {
    name: 'The Monroe Institute & Hemi-Sync',
    description: 'Programs, technologies, research, testimonials and experiences',
    imageUrl: monroeInstituteImage,
  },
  {
    name: 'Remote Viewing & Non-Local Perception',
    description: 'History, methodologies, experiments, applications, ethics',
    imageUrl: remoteViewingImage,
  },
  {
    name: 'Out-of-Body Experiences (OBEs) & Astral Projection',
    description: 'Induction techniques, personal accounts, institutional resources',
    imageUrl: OBEImage,
  },
  {
    name: 'Dreamwork & Lucid Dreaming',
    description: 'Lucid dreams, dream recall, induction, therapy, research',
    imageUrl: lucidDreamingImage,
  },
];

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Handle next/previous slide navigation
  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    
    // Ensure index is within bounds
    const newIndex = Math.max(0, Math.min(index, sections.length - 1));
    setActiveIndex(newIndex);
    setIsAnimating(true);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  // Handle swipe gestures for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && activeIndex < sections.length - 1) {
      goToSlide(activeIndex + 1);
    }
    
    if (isRightSwipe && activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
  }, [touchStart, touchEnd, activeIndex, goToSlide]);
  
  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const nextIndex = (activeIndex + 1) % sections.length;
        goToSlide(nextIndex);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating, goToSlide]);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background hero image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Star field background */}
        <div className="absolute inset-0 bg-black">
          <div className="stars-small"></div>
          <div className="stars-medium"></div>
          <div className="stars-large"></div>
        </div>
        
        {/* Background container with centered image */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {/* Main background image */}
          <img
            src={meditationAurora}
            alt="Meditation Aurora"
            className="min-w-full min-h-full object-cover hero-image"
            loading="eager"
          />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#13151f]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(25,33,60,0)_0%,rgba(25,33,60,0.7)_100%)]"></div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 pointer-events-none glow-effect"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
      {/* Logo and Navigation */}
      <header className="w-full flex flex-col items-center py-4 sm:py-6">
        <div className="flex items-center space-x-2 mb-2">
          {/* Logo image */}
          <img src={awarenessIndexLogo} alt="The Awareness Index" className="h-12 sm:h-16 w-auto drop-shadow-lg fade-up" />
        </div>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 text-white font-medium px-2">
          {["HOME", "EXPLORE", "RESOURCES", "ABOUT", "CONTACT"].map((item, i) => (
            <a 
              key={item} 
              href="#" 
              className="hover:text-amber-300 transition-colors fade-up text-xs sm:text-base"
              style={{animationDelay: `${0.1 + i * 0.1}s`}}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-8 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-200 drop-shadow-lg fade-up fade-up-delay-1">
            Explore the Frontiers of Awareness
          </h1>
          <p className="text-gray-100 text-center mb-12 max-w-2xl mx-auto drop-shadow-md fade-up fade-up-delay-2">
            Dive into curated resources, research, and practices for meditation, consciousness, non-local perception, and more.
          </p>
        </div>

        {/* Peek-a-boo Carousel - scaled down to half size */}
        <div className="w-full max-w-2xl mx-auto fade-up fade-up-delay-3 relative carousel-container">
          <div className="absolute inset-0 bg-indigo-900/10 blur-3xl rounded-full w-3/4 h-3/4 mx-auto my-auto"></div>
          
          {/* Carousel viewport with overflow visible for peek-a-boo effect */}
          <div 
            className="carousel-viewport"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Gradient masks for fade effect on sides */}
            <div className="carousel-mask carousel-mask-left"></div>
            <div className="carousel-mask carousel-mask-right"></div>
            
            <div 
              className="carousel-track"
              style={{ 
                transform: `translateX(calc(-${activeIndex * 78}% + 10%))`
              }}
            >
              {sections.map((section, i) => {
                // Calculate distance from active slide
                const distance = Math.abs(activeIndex - i);
                
                return (
                  <div 
                    key={section.name}
                    onClick={() => distance > 0 && goToSlide(i)}
                    className={`carousel-slide w-[70%] ${
                      activeIndex === i 
                      ? 'carousel-slide-active' 
                      : 'carousel-slide-inactive'
                    }`}
                    style={{ marginRight: '8%' }}
                  >
                    <CarouselSection 
                      name={section.name}
                      description={section.description}
                      imageUrl={section.imageUrl}
                      isActive={activeIndex === i}
                      onClick={() => goToSlide(i)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Carousel navigation */}
          <div className="carousel-nav flex justify-center items-center mt-5 space-x-3">
            <button 
              onClick={() => goToSlide(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="p-2 rounded-full text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed relative group"
              aria-label="Previous slide"
              title="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-indigo-800/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Previous</span>
            </button>
            
            <div className="carousel-indicators flex space-x-3">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-amber-300' : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  title={`Go to slide ${index + 1}: ${sections[index].name}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => goToSlide(activeIndex + 1)}
              disabled={activeIndex === sections.length - 1}
              className="p-2 rounded-full text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed relative group"
              aria-label="Next slide"
              title="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-indigo-800/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Next</span>
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-20 mb-4 text-center fade-up" style={{animationDelay: '1.2s'}}>
          <div className="scroll-indicator flex flex-col items-center text-gray-300 text-xs sm:text-sm">
            <span className="mb-2 text-indigo-300">Discover More Below</span>
            <div className="w-px h-12 bg-gradient-to-b from-indigo-400/60 to-transparent"></div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mt-2 animate-bounce text-indigo-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default HeroSection;
