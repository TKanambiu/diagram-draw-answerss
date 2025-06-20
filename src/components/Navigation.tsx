
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const activityCategories = [
    { name: "Yachting & Cruises", path: "/activities#yachting" },
    { name: "Water & Air", path: "/activities#water-air" },
    { name: "Theme Parks", path: "/activities#theme-parks" },
    { name: "Desert", path: "/activities#desert" },
    { name: "Transport", path: "/activities#transport" },
    { name: "Dinner in Sky", path: "/activities#dinner-sky" },
    { name: "Visas", path: "/activities#visas" }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dubai Tours
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive("/") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive("/about") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              About
            </Link>
            
            {/* Activity Categories Dropdown */}
            <div className="relative group">
              <Link
                to="/activities"
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive("/activities") ? "text-blue-600 font-semibold" : ""
                }`}
              >
                Activities
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {activityCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive("/contact") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>+971 56 872 3633</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail size={16} />
              <span>info@dubaitours.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive("/") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive("/about") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/activities"
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive("/activities") ? "text-blue-600 font-semibold" : ""
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
                    className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive("/contact") ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone size={16} />
                  <span>+971 56 872 3633</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail size={16} />
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
