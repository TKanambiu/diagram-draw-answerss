
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleCall = () => {
    window.open("tel:+971568723633", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:info@emiratedubaitours.com", "_self");
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to inquire about your Dubai travel packages and services.");
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/share/19RHchYsK1/", "_blank");
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/5c36784f-b200-45b7-acb2-9aa53be582c0.png" 
                alt="Emirates Dubai Tours & Travel Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  Emirates Dubai Tours & Travel
                </h3>
                <p className="text-sm text-gray-300">Premium Travel Experience</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for unforgettable Dubai experiences. From luxury yacht charters 
              to desert safaris, we create memories that last a lifetime.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/activities" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Activities</a></li>
              <li><a href="/cruise" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Cruise Packages</a></li>
              <li><a href="/visa" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Visa Services</a></li>
              <li><a href="/hotel" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Hotel Bookings</a></li>
              <li><a href="/holiday" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Holiday Packages</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Popular Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Desert Safari Tours</li>
              <li className="text-gray-300">Luxury Yacht Charters</li>
              <li className="text-gray-300">Helicopter Tours</li>
              <li className="text-gray-300">City Sightseeing</li>
              <li className="text-gray-300">Airport Transfers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span 
                  className="text-gray-300 cursor-pointer hover:text-amber-400 transition-colors duration-300"
                  onClick={handleCall}
                >
                  +971 56 872 3633
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span 
                  className="text-gray-300 cursor-pointer hover:text-amber-400 transition-colors duration-300"
                  onClick={handleEmail}
                >
                  info@emiratedubaitours.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">Dubai, United Arab Emirates</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-amber-400">Follow Us</h5>
              <div className="flex space-x-4">
                <button 
                  onClick={handleFacebook}
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors duration-300 transform hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Emirates Dubai Tours & Travel. All rights reserved. | 
            <span className="text-amber-400 ml-2">Creating Unforgettable Dubai Experiences</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
