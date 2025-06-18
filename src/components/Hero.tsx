
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1512632578888-169bbbc64f33",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleBookNow = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking a Dubai experience. Please help me with the best packages available.");
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform ${
              index === currentImageIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-110"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-yellow-900/50 animate-pulse"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-amber-600/30 rounded-full animate-ping delay-500"></div>
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
          Experience the ultimate blend of luxury, adventure, and culture in the most 
          spectacular city on Earth. Your unforgettable Dubai journey starts here.
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

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-400/40 rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
