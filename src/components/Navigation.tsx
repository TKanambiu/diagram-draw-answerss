
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const activityCategories = [
    { name: "Luxury Yachts & Cruises", path: "/activities#yachting" },
    { name: "Water & Air", path: "/activities#water-air" },
    { name: "Theme Parks", path: "/activities#theme-parks" },
    { name: "Desert Safaris", path: "/activities#desert" },
    { name: "Transport", path: "/activities#transport" },
    { name: "Dinner in Sky", path: "/activities#dinner-sky" },
    { name: "Visas", path: "/activities#visas" }
  ];

  return (
    <nav className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 shadow-2xl sticky top-0 z-50 border-b-4 border-yellow-600/50">
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
              <span className="block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent animate-pulse">
                Emirates Dubai Travel
              </span>
              <span className="block text-sm md:text-base font-medium text-yellow-100/90 mt-1 tracking-wide">
                Golden Experiences Await
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-yellow-200 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                isActive("/") ? "text-yellow-200 bg-white/20 shadow-lg" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-white hover:text-yellow-200 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                isActive("/about") ? "text-yellow-200 bg-white/20 shadow-lg" : ""
              }`}
            >
              About
            </Link>
            
            {/* Activity Categories Dropdown */}
            <div className="relative group">
              <Link
                to="/activities"
                className={`text-white hover:text-yellow-200 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/activities") ? "text-yellow-200 bg-white/20 shadow-lg" : ""
                }`}
              >
                Activities
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-2 border-yellow-300">
                <div className="py-2">
                  {activityCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-amber-600 transition-colors font-medium"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`text-white hover:text-yellow-200 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                isActive("/contact") ? "text-yellow-200 bg-white/20 shadow-lg" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-white bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
              <Phone size={16} className="text-yellow-200" />
              <span className="font-medium">+971 56 872 3633</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
              <Mail size={16} className="text-yellow-200" />
              <span className="font-medium">info@dubaitours.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/20 hover:text-yellow-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-yellow-400/30">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-white hover:text-yellow-200 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/") ? "text-yellow-200 bg-white/20" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-white hover:text-yellow-200 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/about") ? "text-yellow-200 bg-white/20" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/activities"
                className={`text-white hover:text-yellow-200 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/activities") ? "text-yellow-200 bg-white/20" : ""
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
                    className="block text-yellow-100 hover:text-yellow-200 transition-colors text-sm font-medium px-4 py-1 rounded hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className={`text-white hover:text-yellow-200 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/contact") ? "text-yellow-200 bg-white/20" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-yellow-400/30 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-white bg-white/10 px-3 py-2 rounded-lg">
                  <Phone size={16} className="text-yellow-200" />
                  <span>+971 56 872 3633</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white bg-white/10 px-3 py-2 rounded-lg">
                  <Mail size={16} className="text-yellow-200" />
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
