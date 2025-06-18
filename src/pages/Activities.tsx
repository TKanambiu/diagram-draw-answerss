
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Activities = () => {
  const [hoveredActivity, setHoveredActivity] = useState<number | null>(null);

  const activities = [
    {
      id: 1,
      name: "Desert Safari Adventure",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      description: "Experience the thrill of dune bashing, camel riding, and traditional Bedouin entertainment under the stars.",
      highlights: ["Dune Bashing", "Camel Riding", "BBQ Dinner", "Cultural Show"]
    },
    {
      id: 2,
      name: "Burj Khalifa Experience",
      image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33",
      description: "Visit the world's tallest building and enjoy breathtaking views from the observation decks.",
      highlights: ["At the Top SKY", "Level 148 & 125", "Dubai Fountain", "VIP Access"]
    },
    {
      id: 3,
      name: "Dubai Marina Yacht Tour",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description: "Cruise through Dubai Marina and see the city's stunning skyline from the water.",
      highlights: ["Luxury Yacht", "Marina Views", "Atlantis Views", "Refreshments"]
    },
    {
      id: 4,
      name: "Dubai Aquarium & Underwater Zoo",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description: "Walk through one of the world's largest suspended aquariums in Dubai Mall.",
      highlights: ["Tunnel Experience", "Shark Dive", "Glass Boat Ride", "Penguin Cove"]
    },
    {
      id: 5,
      name: "Ski Dubai Snow Experience",
      image: "https://images.unsplash.com/photo-1551524164-6cf2ac92c602",
      description: "Enjoy snow activities in the middle of the desert at Mall of the Emirates.",
      highlights: ["Skiing & Snowboarding", "Penguin Encounter", "Snow Park", "Chairlift Rides"]
    },
    {
      id: 6,
      name: "Dubai Frame & City Views",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      description: "See old and new Dubai from the world's largest picture frame structure.",
      highlights: ["Panoramic Views", "Sky Deck", "Museum Experience", "Glass Bridge"]
    },
    {
      id: 7,
      name: "Hot Air Balloon Adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      description: "Soar above the Dubai desert and witness a spectacular sunrise from the sky.",
      highlights: ["Sunrise Flight", "Desert Views", "Wildlife Spotting", "Champagne Breakfast"]
    },
    {
      id: 8,
      name: "Dubai Miracle Garden",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      description: "Explore the world's largest natural flower garden with over 50 million flowers.",
      highlights: ["Floral Displays", "Butterfly Garden", "Heart Pathway", "Airbus A380"]
    },
    {
      id: 9,
      name: "Global Village Cultural Tour",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
      description: "Experience cultures from around the world in one spectacular location.",
      highlights: ["Cultural Pavilions", "International Cuisine", "Live Shows", "Shopping"]
    },
    {
      id: 10,
      name: "Dubai Parks & Resorts",
      image: "https://images.unsplash.com/photo-1594736797933-d0b22e7d5132",
      description: "Enjoy thrilling rides and attractions at the Middle East's largest theme park.",
      highlights: ["Motiongate Dubai", "Bollywood Parks", "Legoland Dubai", "Water Parks"]
    },
    {
      id: 11,
      name: "Atlantis Aquaventure",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      description: "Experience one of the world's largest waterparks with thrilling slides and marine life.",
      highlights: ["Water Slides", "Shark Lagoon", "Dolphin Bay", "Private Beach"]
    },
    {
      id: 12,
      name: "Dubai Creek Heritage Tour",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      description: "Discover Dubai's rich heritage and traditional culture in the historic Creek area.",
      highlights: ["Abra Rides", "Gold Souk", "Spice Souk", "Heritage Village"]
    }
  ];

  const handleBookNow = (activityName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in booking the ${activityName}. Could you please provide more details and pricing?`);
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Enhanced Header with animations */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6 animate-bounce">
              Dubai Adventures
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto animate-slide-in-right">
              Discover the magic of Dubai with our exclusive collection of experiences. 
              From desert safaris to sky-high adventures, create memories that last a lifetime.
            </p>
          </div>

          {/* Activities Grid with enhanced animations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={activity.id} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl border border-amber-200 animate-fade-in ${
                  hoveredActivity === activity.id ? 'scale-105 rotate-1' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredActivity(activity.id)}
                onMouseLeave={() => setHoveredActivity(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.name}
                    className={`w-full h-48 object-cover transition-all duration-700 ${
                      hoveredActivity === activity.id ? 'scale-125 rotate-3' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white animate-pulse">{activity.name}</h3>
                  </div>
                  {hoveredActivity === activity.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 animate-pulse"></div>
                  )}
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{activity.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-amber-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 text-xs px-3 py-1 rounded-full animate-pulse">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleBookNow(activity.name)}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-bounce"
                  >
                    Book Now via WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-12 rounded-xl text-center transform hover:scale-105 transition-all duration-300 animate-pulse">
            <h3 className="text-4xl font-bold mb-6 animate-bounce">Ready for the Adventure of a Lifetime?</h3>
            <p className="text-xl mb-8 animate-fade-in">
              Join thousands of satisfied customers who have experienced the magic of Dubai with us.
              Book your perfect Dubai adventure today!
            </p>
            <Button 
              onClick={() => handleBookNow("Custom Dubai Package")}
              className="bg-white text-amber-600 hover:bg-gray-100 font-bold px-12 py-4 text-lg transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-bounce"
            >
              Get Custom Package via WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Activities;
