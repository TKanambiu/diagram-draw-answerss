import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const handleWhatsAppContact = (service: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${service}. Could you please provide more information?`);
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  const handlePhoneCall = () => {
    window.open("tel:+971568723633", "_self");
  };

  const handleEmailContact = () => {
    window.open("mailto:info@emiratesdubaitravel.com", "_self");
  };

  const handleSocialClick = (platform: string) => {
    switch (platform) {
      case 'facebook':
        window.open("https://www.facebook.com/share/19RHchYsK1/", "_blank");
        break;
      case 'instagram':
        window.open("https://instagram.com/emiratesdubaitravel", "_blank");
        break;
      case 'twitter':
        window.open("https://twitter.com/emiratesdubai", "_blank");
        break;
    }
  };

  return (
    <footer className="bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/a9cb64a3-5cd6-403e-9e5b-ce0057d90590.png" 
                  alt="Emirates Dubai Travel Logo" 
                  className="w-12 h-12 object-contain animate-pulse"
                />
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                    Emirates Dubai Travel
                  </h3>
                  <p className="text-sm text-amber-200">Premium Travel Experience</p>
                </div>
              </div>
              <p className="text-amber-100 mb-4">
                Your gateway to unforgettable Dubai experiences. We create magical moments 
                that last a lifetime with our premium travel services.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleSocialClick('facebook')}
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transform hover:scale-110 transition-all duration-300 hover:shadow-xl"
                >
                  <Facebook size={20} />
                </button>
                <button 
                  onClick={() => handleSocialClick('instagram')}
                  className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transform hover:scale-110 transition-all duration-300 hover:shadow-xl"
                >
                  <Instagram size={20} />
                </button>
                <button 
                  onClick={() => handleSocialClick('twitter')}
                  className="bg-sky-600 hover:bg-sky-700 p-3 rounded-full transform hover:scale-110 transition-all duration-300 hover:shadow-xl"
                >
                  <Twitter size={20} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h4 className="text-lg font-semibold mb-6 text-amber-300">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block">Home</a></li>
                <li><a href="/activities" className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block">Activities</a></li>
                <li><a href="/cruise" className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block">Cruise</a></li>
                <li><a href="/visa" className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block">Visa Services</a></li>
                <li><a href="/hotel" className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block">Hotels</a></li>
                <li><a href="/holiday" className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block">Holiday Packages</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h4 className="text-lg font-semibold mb-6 text-amber-300">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleWhatsAppContact("Desert Safari")}
                    className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block text-left"
                  >
                    Desert Safari
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleWhatsAppContact("City Tours")}
                    className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block text-left"
                  >
                    City Tours
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleWhatsAppContact("Yacht Charters")}
                    className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block text-left"
                  >
                    Yacht Charters
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleWhatsAppContact("Adventure Sports")}
                    className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block text-left"
                  >
                    Adventure Sports
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleWhatsAppContact("Cultural Experiences")}
                    className="text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:translate-x-2 inline-block text-left"
                  >
                    Cultural Experiences
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
              <h4 className="text-lg font-semibold mb-6 text-amber-300">Contact Us</h4>
              <div className="space-y-4">
                <button 
                  onClick={handlePhoneCall}
                  className="flex items-center space-x-3 text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:scale-105"
                >
                  <Phone size={18} />
                  <span>+971 56 872 3633</span>
                </button>
                <button 
                  onClick={handleEmailContact}
                  className="flex items-center space-x-3 text-amber-100 hover:text-amber-300 transition-colors duration-300 transform hover:scale-105"
                >
                  <Mail size={18} />
                  <span>info@emiratesdubaitravel.com</span>
                </button>
                <div className="flex items-center space-x-3 text-amber-100">
                  <MapPin size={18} />
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm mb-4 md:mb-0">
              © 2024 Emirates Dubai Travel. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
