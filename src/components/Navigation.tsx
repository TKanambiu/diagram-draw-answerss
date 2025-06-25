
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  // Updated to match exactly with homepage activity categories
  const activityCategories = [
    { name: "Luxury Yachts & Cruises", path: "/activities#yachting", color: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { name: "Water & Air Experience", path: "/activities#water-air", color: "bg-gradient-to-br from-sky-500 to-blue-600" },
    { name: "Theme Parks", path: "/activities#theme-parks", color: "bg-gradient-to-br from-pink-500 to-rose-500" },
    { name: "Desert Safaris", path: "/activities#desert", color: "bg-gradient-to-br from-orange-500 to-red-500" },
    { name: "Luxury Transport", path: "/activities#transport", color: "bg-gradient-to-br from-purple-500 to-indigo-500" },
    { name: "Dinner in Sky", path: "/activities#dinner-sky", color: "bg-gradient-to-br from-violet-500 to-purple-600" },
    { name: "Visas", path: "/activities#visas", color: "bg-gradient-to-br from-emerald-500 to-teal-500" },
    { name: "Unique Stays", path: "/activities#unique", color: "bg-gradient-to-br from-amber-500 to-yellow-500" }
  ];

  const handlePhoneCall = () => {
    window.location.href = "tel:+971568723633";
  };

  const handleEmailCompose = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@emiratedubaitours.com", "_blank");
  };

  const handleActivityClick = (path: string) => {
    const hash = path.split('#')[1];
    if (location.pathname === '/activities') {
      // If already on activities page, just scroll to section
      const element = document.querySelector(`[data-tab="${hash}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Update URL hash
      window.history.pushState(null, '', path);
    } else {
      // Navigate to activities page with hash
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-2xl sticky top-0 z-50 border-b-4 border-yellow-500/40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/5c36784f-b200-45b7-acb2-9aa53be582c0.png" 
                alt="Emirates Dubai Tours & Travel Logo" 
                className="w-16 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />
              <div className="absolute -inset-1 bg-white/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
            </div>
            <div className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
              <span className="block text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-yellow-50 to-white bg-clip-text text-transparent tracking-wide">
                <span className="font-serif italic text-shadow-lg">Emirates</span>
                <span className="font-sans ml-2 text-yellow-100 drop-shadow-md">Dubai</span>
                <span className="font-serif italic ml-2 bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Tours & Travel</span>
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
                    <button
                      key={index}
                      onClick={() => handleActivityClick(category.path)}
                      className={`${category.color} text-white font-bold px-4 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center text-sm`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                isActive("/about") ? "text-yellow-100 bg-white/20 shadow-lg" : ""
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                isActive("/contact") ? "text-yellow-100 bg-white/20 shadow-lg" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info - Enhanced Visibility */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handlePhoneCall}
              className="flex items-center space-x-2 text-white bg-gradient-to-r from-emerald-600 to-teal-700 px-4 py-3 rounded-lg shadow-xl hover:from-emerald-700 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 border-2 border-emerald-500/50 hover:border-emerald-400/70 backdrop-blur-sm"
            >
              <Phone size={20} className="text-white flex-shrink-0 drop-shadow-lg" />
              <span className="font-bold text-base whitespace-nowrap drop-shadow-md tracking-wide">+971 56 872 3633</span>
            </button>
            <button
              onClick={handleEmailCompose}
              className="flex items-center space-x-2 text-white bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 rounded-lg shadow-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 border-2 border-blue-500/50 hover:border-blue-400/70 backdrop-blur-sm"
            >
              <Mail size={20} className="text-white flex-shrink-0 drop-shadow-lg" />
              <span className="font-bold text-base whitespace-nowrap drop-shadow-md tracking-wide">Email Us</span>
            </button>
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
                  <button
                    key={index}
                    onClick={() => handleActivityClick(category.path)}
                    className={`block w-full ${category.color} text-white font-bold px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center text-sm`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

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
                to="/contact"
                className={`text-white hover:text-yellow-100 transition-colors font-semibold px-4 py-2 rounded-lg hover:bg-white/10 ${
                  isActive("/contact") ? "text-yellow-100 bg-white/20" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-yellow-300/30 space-y-3">
                <button
                  onClick={handlePhoneCall}
                  className="flex items-center space-x-3 text-white bg-gradient-to-r from-emerald-600 to-teal-700 px-4 py-3 rounded-lg w-full hover:from-emerald-700 hover:to-teal-800 transition-all duration-300 shadow-lg border border-emerald-500/30"
                >
                  <Phone size={20} className="text-white flex-shrink-0" />
                  <span className="font-semibold whitespace-nowrap">+971 56 872 3633</span>
                </button>
                <button
                  onClick={handleEmailCompose}
                  className="flex items-center space-x-3 text-white bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 rounded-lg w-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg border border-blue-500/30"
                >
                  <Mail size={20} className="text-white flex-shrink-0" />
                  <span className="font-semibold whitespace-nowrap">Send Email</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
