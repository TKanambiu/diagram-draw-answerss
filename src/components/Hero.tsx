
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1512632578888-169bbbc64f33')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 to-yellow-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Dubai's
          <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Golden Magic
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Experience the ultimate blend of luxury, adventure, and culture in the most 
          spectacular city on Earth. Your unforgettable Dubai journey starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/activities">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold">
              Explore Activities
            </Button>
          </Link>
          <Link to="/visa">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-amber-300 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold">
              Get Your Visa
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
