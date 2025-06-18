
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Plane } from "lucide-react";

const Footer = () => {
  const handleServiceClick = (service: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in your ${service} service. Could you please provide more information?`);
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  const handleSocialClick = (platform: string) => {
    // You can replace these with actual social media links
    const socialLinks = {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    };
    window.open(socialLinks[platform as keyof typeof socialLinks], "_blank");
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-2 rounded-full animate-spin" style={{ animationDuration: '3s' }}>
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                Emirates Dubai Travel
              </h3>
            </div>
            <p className="text-gray-300 mb-4 animate-slide-in-right">
              Your premier destination management company for unforgettable Dubai experiences. 
              We create magical journeys that showcase the best of the UAE.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('facebook')}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-bounce"
              >
                <span className="text-sm font-bold">f</span>
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-bounce"
                style={{ animationDelay: '0.2s' }}
              >
                <span className="text-sm font-bold">t</span>
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')}
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-bounce"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="text-sm font-bold">i</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4 animate-pulse">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2">About Us</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2">Activities</Link></li>
              <li><Link to="/visa" className="text-gray-300 hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2">Visa Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold mb-4 animate-pulse">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => handleServiceClick('Dubai City Tours')}
                  className="hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2 text-left"
                >
                  Dubai City Tours
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('Desert Safari')}
                  className="hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2 text-left"
                >
                  Desert Safari
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('Visa Processing')}
                  className="hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2 text-left"
                >
                  Visa Processing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('Group Packages')}
                  className="hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2 text-left"
                >
                  Group Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('Luxury Experiences')}
                  className="hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2 text-left"
                >
                  Luxury Experiences
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('Airport Transfers')}
                  className="hover:text-amber-400 transition-all duration-300 transform hover:translate-x-2 text-left"
                >
                  Airport Transfers
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-lg font-semibold mb-4 animate-pulse">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-amber-400 mt-0.5 animate-pulse" />
                <div>
                  <a href="tel:+971568723633" className="text-gray-300 hover:text-amber-400 transition-colors transform group-hover:scale-105">+971 56 872 3633</a>
                  <br />
                  <a href="tel:+971505988436" className="text-gray-300 hover:text-amber-400 transition-colors transform group-hover:scale-105">+971 50 598 8436</a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-amber-400 mt-0.5 animate-pulse" />
                <div>
                  <a href="mailto:info@emiratesdubaitravel.com" className="text-gray-300 hover:text-amber-400 transition-colors transform group-hover:scale-105">info@emiratesdubaitravel.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 animate-bounce" />
                <div>
                  <p className="text-gray-300">Dubai Marina Walk</p>
                  <p className="text-gray-300">Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 mt-0.5 animate-spin" style={{ animationDuration: '2s' }} />
                <div>
                  <p className="text-gray-300">24/7 WhatsApp Support</p>
                  <p className="text-gray-300">Mon-Fri: 9AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm animate-pulse">
              © 2024 Emirates Dubai Travel. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => handleServiceClick('Privacy Policy')}
                className="text-gray-400 hover:text-amber-400 text-sm transition-all duration-300 transform hover:scale-105"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleServiceClick('Terms of Service')}
                className="text-gray-400 hover:text-amber-400 text-sm transition-all duration-300 transform hover:scale-105"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleServiceClick('Cookie Policy')}
                className="text-gray-400 hover:text-amber-400 text-sm transition-all duration-300 transform hover:scale-105"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
