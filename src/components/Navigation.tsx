
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Cruise", path: "/cruise", color: "from-blue-500 to-cyan-500", textColor: "text-blue-600" },
    { name: "Visa", path: "/visa", color: "from-green-500 to-emerald-500", textColor: "text-green-600" },
    { name: "Activities", path: "/activities", color: "from-purple-500 to-violet-500", textColor: "text-purple-600" },
    { name: "Hotel", path: "/hotel", color: "from-red-500 to-pink-500", textColor: "text-red-600" },
    { name: "Holiday", path: "/holiday", color: "from-orange-500 to-amber-500", textColor: "text-orange-600" },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleBookNow = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking a Dubai experience. Please help me with the best packages available.");
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl z-50 border-b border-amber-200 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo with uploaded image */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/a9cb64a3-5cd6-403e-9e5b-ce0057d90590.png" 
                  alt="Emirates Dubai Tours & Travel Logo" 
                  className="w-16 h-16 object-contain animate-pulse"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent animate-pulse tracking-wide">
                <span className="font-serif italic">Emirates</span>{" "}
                <span className="font-sans font-black">Dubai</span>{" "}
                <span className="font-serif">Tours & Travel</span>
              </div>
              <div className="text-xs text-amber-600 font-medium tracking-widest animate-fade-in">
                Premium Travel Experience
              </div>
            </div>
          </Link>

          {/* Desktop Menu with enhanced animations */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group"
              >
                <Button 
                  className={`bg-gradient-to-r ${item.color} hover:shadow-2xl transform hover:scale-110 transition-all duration-300 text-white font-semibold px-6 py-3 animate-fade-in hover:animate-pulse ${
                    isActivePath(item.path) ? "shadow-2xl scale-110 animate-bounce" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <Button 
              onClick={handleBookNow}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold px-8 py-3 ml-4 transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-bounce"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? <X size={28} className="animate-spin" /> : <Menu size={28} className="animate-pulse" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with enhanced animations */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200 animate-slide-in-right">
            <div className="px-2 pt-2 pb-3 space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    className={`w-full bg-gradient-to-r ${item.color} hover:shadow-2xl text-white font-semibold transform hover:scale-105 transition-all duration-300 ${
                      isActivePath(item.path) ? "shadow-2xl animate-pulse" : ""
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <div className="pt-2">
                <Button 
                  onClick={handleBookNow}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 animate-bounce"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
