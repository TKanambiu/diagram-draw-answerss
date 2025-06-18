
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

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-amber-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Emirates Dubai Travel
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group"
              >
                <Button 
                  className={`bg-gradient-to-r ${item.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white font-semibold px-4 py-2 ${
                    isActivePath(item.path) ? "shadow-lg scale-105" : ""
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold px-6 py-2 ml-4">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-200">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    className={`w-full bg-gradient-to-r ${item.color} hover:shadow-lg text-white font-semibold ${
                      isActivePath(item.path) ? "shadow-lg" : ""
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold">
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
