
import React, { useEffect, useRef } from 'react';

interface ImageSliderProps {
  images: string[];
  title: string;
  onBookNow: (title: string) => void;
}

const ImageSlider = ({ images, title, onBookNow }: ImageSliderProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const maxScroll = container.scrollWidth - container.clientWidth;

    const autoScroll = () => {
      if (container) {
        scrollPosition += scrollSpeed;
        
        // Reset to beginning when reached the end
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
      }
    };

    // Start auto-scrolling
    const intervalId = setInterval(autoScroll, 16); // ~60fps

    // Pause on hover
    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => {
      // Restart auto-scrolling when mouse leaves
      const newIntervalId = setInterval(autoScroll, 16);
      return newIntervalId;
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
      const newIntervalId = setInterval(autoScroll, 16);
    });

    return () => {
      clearInterval(intervalId);
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 animate-slide-left-to-right">{title}</h3>
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
        style={{ scrollBehavior: 'auto' }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-80 h-60 relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-left-to-right animate-float-horizontal"
            style={{ 
              animationDelay: `${index * 200}ms`,
              animationFillMode: 'both'
            }}
          >
            <img 
              src={image} 
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-all duration-500 transform hover:translate-x-2"
              onClick={() => onBookNow(title)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg animate-pulse transform translate-x-2">Click to Book!</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
