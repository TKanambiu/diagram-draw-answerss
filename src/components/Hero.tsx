
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3", // Camels (keeping as requested)
    "/lovable-uploads/0ffc5369-38df-4229-9fa5-98cd30c214c0.png", // Red sports car
    "/lovable-uploads/c21fbecb-d54c-4ce2-b9cb-b9598ecd90b7.png", // Dubai skyline/buildings
    "/lovable-uploads/ccad2320-aad3-4ac5-91fb-6c58d6bde829.png", // Airplane sunset
    "/lovable-uploads/f62de0bf-5a34-4fa0-b24b-d77bebe60be3.png", // Luxury yacht
    "/lovable-uploads/71fba801-a9fc-48c6-8b4c-5729492d59aa.png", // Pink limousine
    "/lovable-uploads/2524ed1b-1dfa-407b-a913-c3c33ed71751.png", // Helicopter over Dubai
    "/lovable-uploads/026e2d7e-6b32-45b8-9e9d-1888e22a9d54.png", // Diving/underwater
    "/lovable-uploads/d0221110-5c8a-4e43-8dfa-1da4ee967acc.png", // Lion safari
    "/lovable-uploads/9cebc0ec-daea-4380-bbaa-5bb3376794c4.png" // Ferrari World
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000); // Slightly faster transition for more dynamic feel
    return () => clearInterval(interval);
  }, []);

  const handleBookNow = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking a Dubai experience. Please help me with the best packages available.");
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1500 transform ${
              index === currentImageIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-110"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-yellow-900/60 animate-pulse"></div>
      </div>

      {/* Enhanced floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-amber-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-amber-400/30 to-yellow-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-yellow-500/40 to-amber-600/40 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/6 right-1/3 w-20 h-20 bg-gradient-to-br from-amber-300/25 to-yellow-400/25 rounded-full animate-float"></div>
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-scale-in">
          <span className="inline-block animate-bounce">Discover</span>{" "}
          <span className="inline-block animate-bounce delay-200">Dubai's</span>
          <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            Golden Magic
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-slide-in-right delay-300">
          Experience luxury cars, helicopter tours, yacht cruises, desert safaris, and world-class adventures. 
          Your ultimate Dubai experience awaits with premium services and unforgettable memories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right delay-500">
          <Link to="/activities">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-pulse">
              Explore Activities
            </Button>
          </Link>
          <Button 
            onClick={handleBookNow}
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-bounce"
          >
            Book Now via WhatsApp
          </Button>
        </div>
      </div>

      {/* Enhanced floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-amber-300 rounded-full mt-2 animate-ping"></div>
        </div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-400/40 rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
