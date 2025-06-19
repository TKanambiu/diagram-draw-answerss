
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const FeaturedTours = () => {
  const tours = [
    {
      id: 1,
      title: "Dubai City Explorer",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      description: "Discover Dubai's iconic landmarks including Burj Khalifa, Dubai Mall, and Dubai Frame",
      duration: "8 hours",
      highlights: ["Burj Khalifa", "Dubai Mall", "Dubai Frame", "Gold Souk"],
      gradient: "from-purple-500 to-pink-500",
      accentColor: "purple"
    },
    {
      id: 2,
      title: "Desert Safari Premium",
      image: "/lovable-uploads/f1060add-de06-497e-9d0f-9ccfc0bf5de0.png",
      description: "Experience the thrill of the Arabian desert with dune bashing and traditional entertainment",
      duration: "6 hours",
      highlights: ["Dune Bashing", "Camel Riding", "BBQ Dinner", "Cultural Shows"],
      gradient: "from-orange-500 to-red-500",
      accentColor: "orange"
    },
    {
      id: 3,
      title: "Marina & Beach Experience",
      image: "/lovable-uploads/e0b69a7c-b75e-4095-885a-ae392b569e79.png",
      description: "Explore Dubai Marina's stunning waterfront and pristine beaches",
      duration: "5 hours",
      highlights: ["Marina Walk", "Beach Access", "Yacht Views", "Waterfront Dining"],
      gradient: "from-cyan-500 to-blue-500",
      accentColor: "cyan"
    }
  ];

  const handleLearnMore = (tourTitle: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${tourTitle}. Could you please provide more details, pricing, and availability?`);
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Home className="text-amber-500 animate-bounce" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-bounce">
              Featured Experiences
            </h2>
            <Home className="text-amber-500 animate-bounce" size={32} />
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-slide-in-right">
            Handpicked tours and experiences that showcase the very best of Dubai's 
            attractions, culture, and adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour, index) => (
            <div 
              key={tour.id} 
              className={`bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in border-2 border-gradient-to-r ${tour.gradient} hover:scale-105`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                  onClick={() => handleLearnMore(tour.title)}
                />
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${tour.gradient} text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg`}>
                  {tour.duration}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-xl animate-bounce bg-black/50 px-4 py-2 rounded-lg">
                    Click for Details!
                  </span>
                </div>
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${tour.gradient}`}></div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                <h3 
                  className={`text-xl font-bold text-gray-900 mb-3 cursor-pointer hover:bg-gradient-to-r hover:${tour.gradient} hover:bg-clip-text hover:text-transparent transition-all duration-300`}
                  onClick={() => handleLearnMore(tour.title)}
                >
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{tour.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className={`w-3 h-3 bg-gradient-to-r ${tour.gradient} rounded-full animate-pulse`}></span>
                    Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <span 
                        key={index} 
                        className={`bg-gradient-to-r ${tour.gradient} text-white text-xs px-3 py-1.5 rounded-full animate-pulse font-medium shadow-md hover:shadow-lg transition-shadow duration-300`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleLearnMore(tour.title)}
                  className={`w-full bg-gradient-to-r ${tour.gradient} hover:from-gray-800 hover:to-gray-900 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl font-semibold py-3 rounded-lg`}
                >
                  Learn More via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/activities">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-12 py-4 text-lg font-bold transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-bounce rounded-xl shadow-lg"
            >
              View All Activities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
