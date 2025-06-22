
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const activityCategories = [
    { name: "Luxury Yachts & Cruises", path: "/activities#yachting", color: "bg-gradient-to-br from-blue-500 to-cyan-600" },
    { name: "Water & Air", path: "/activities#water-air", color: "bg-gradient-to-br from-sky-400 to-blue-500" },
    { name: "Theme Parks", path: "/activities#theme-parks", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { name: "Desert Safaris", path: "/activities#desert", color: "bg-gradient-to-br from-orange-500 to-red-500" },
    { name: "Transport", path: "/activities#transport", color: "bg-gradient-to-br from-gray-600 to-gray-800" },
    { name: "Dinner in Sky", path: "/activities#dinner-sky", color: "bg-gradient-to-br from-indigo-500 to-purple-600" },
    { name: "Visas", path: "/activities#visas", color: "bg-gradient-to-br from-green-500 to-emerald-600" }
  ];

  return (
    <nav className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-2xl sticky top-0 z-50 border-b-4 border-yellow-500/40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/5c36784f-b200-45b7-acb2-9aa53be582c0.png" 
                alt="Emirates Dubai Travel Logo" 
                className="w-16 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />
              <div className="absolute -inset-1 bg-white/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
            </div>
            <div className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
              <span className="block text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-yellow-50 to-white bg-clip-text text-transparent tracking-wide">
                <span className="font-serif italic text-shadow-lg">Emirates</span>
                <span className="font-sans ml-2 text-yellow-100 drop-shadow-md">Dubai</span>
                <span className="font-serif italic ml-2 bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Travel</span>
              </span>
              <span className="block text-sm md:text-base font-semibold text-yellow-50/95 mt-1 tracking-wider font-serif italic">
                Golden Experiences Await
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                isActive("/") ? "text-yellow-100 bg-white/20 shadow-lg" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                isActive("/about") ? "text-yellow-100 bg-white/20 shadow-lg" : ""
              }`}
            >
              About
            </Link>
            
            {/* Activity Categories Dropdown */}
            <div className="relative group">
              <Link
                to="/activities"
                className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/activities") ? "text-yellow-100 bg-white/20 shadow-lg" : ""
                }`}
              >
                Activities
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-2 border-yellow-300 p-2">
                <div className="grid gap-2">
                  {activityCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      className={`${category.color} text-white font-bold px-4 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center text-sm`}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                isActive("/contact") ? "text-yellow-100 bg-white/20 shadow-lg" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-white bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
              <Phone size={16} className="text-yellow-100" />
              <span className="font-medium">+971 56 872 3633</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
              <Mail size={16} className="text-yellow-100" />
              <span className="font-medium">info@dubaitours.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/20 hover:text-yellow-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-yellow-300/30">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/") ? "text-yellow-100 bg-white/20" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/about") ? "text-yellow-100 bg-white/20" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/activities"
                className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/activities") ? "text-yellow-100 bg-white/20" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                All Activities
              </Link>
              
              {/* Mobile Activity Categories */}
              <div className="ml-4 space-y-2">
                {activityCategories.map((category, index) => (
                  <Link
                    key={index}
                    to={category.path}
                    className={`block ${category.color} text-white font-bold px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center text-sm`}
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/contact") ? "text-yellow-100 bg-white/20" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-yellow-300/30 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-white bg-white/10 px-3 py-2 rounded-lg">
                  <Phone size={16} className="text-yellow-100" />
                  <span>+971 56 872 3633</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white bg-white/10 px-3 py-2 rounded-lg">
                  <Mail size={16} className="text-yellow-100" />
                  <span>info@dubaitours.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
