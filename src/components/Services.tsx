
import { Plane, MapPin, Users, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Visa Processing",
      description: "Fast and reliable UAE visa services with expert guidance through the entire process.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "City Tours",
      description: "Comprehensive guided tours covering all major attractions and hidden gems of Dubai.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Packages",
      description: "Customized group tours and packages for families, friends, and corporate events.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage for peace of mind during your journey.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support available via phone, email, and WhatsApp.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Experiences",
      description: "Exclusive VIP experiences and luxury packages for the ultimate Dubai adventure.",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const handleGetQuote = () => {
    const message = encodeURIComponent("Hi! I'd like to get a custom quote for Dubai travel services. Please provide me with your best packages and pricing.");
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  const handleCallNow = () => {
    window.open("tel:+971568723633", "_self");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-bounce">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right">
            From visa processing to premium experiences, we provide comprehensive 
            travel services to make your Dubai journey seamless and unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl border border-gray-100 animate-fade-in ${
                hoveredService === index ? 'scale-110 rotate-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`inline-flex p-3 rounded-lg ${service.color} mb-4 transform transition-all duration-300 ${
                hoveredService === index ? 'scale-125 rotate-12' : ''
              }`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 animate-pulse">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-8 rounded-lg text-center transform hover:scale-105 transition-all duration-300 animate-pulse">
          <h3 className="text-3xl font-bold mb-4 animate-bounce">Ready to Start Your Dubai Adventure?</h3>
          <p className="text-lg mb-6 animate-fade-in">
            Our expert team is here to help you plan the perfect Dubai experience. 
            Contact us today for personalized recommendations and exclusive packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGetQuote}
              className="bg-white text-amber-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              Get Quote via WhatsApp
            </Button>
            <Button 
              onClick={handleCallNow}
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
