
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Cruise = () => {
  const cruisePackages = [
    {
      id: 1,
      title: "Dubai Marina Premium Dinner Cruise",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
      description: "Experience luxury dining while cruising through Dubai Marina's stunning skyline.",
      duration: "3 hours",
      features: ["5-star buffet dinner", "Live entertainment", "Panoramic views", "Welcome drinks"]
    },
    {
      id: 2,
      title: "Dubai Creek Traditional Dhow Cruise",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      description: "Sail on a traditional wooden dhow and discover Dubai's heritage along the historic creek.",
      duration: "2.5 hours",
      features: ["Traditional dhow boat", "Arabic buffet", "Cultural shows", "Heritage views"]
    },
    {
      id: 3,
      title: "Luxury Yacht Charter - Dubai Coast",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
      description: "Private luxury yacht experience along Dubai's pristine coastline.",
      duration: "4-8 hours",
      features: ["Private yacht", "Professional crew", "Water sports", "Gourmet catering"]
    },
    {
      id: 4,
      title: "Sunset Catamaran Cruise",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      description: "Watch the spectacular Dubai sunset aboard a modern catamaran.",
      duration: "2 hours",
      features: ["Sunset views", "Refreshments", "Music system", "Swimming stop"]
    },
    {
      id: 5,
      title: "Dubai Canal Sightseeing Cruise",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
      description: "Explore Dubai's modern waterways and iconic landmarks from the water.",
      duration: "1.5 hours",
      features: ["Modern landmarks", "Air-conditioned boat", "Commentary", "Photo opportunities"]
    },
    {
      id: 6,
      title: "Fishing Trip & Cruise Combo",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      description: "Combine deep-sea fishing with a relaxing cruise experience.",
      duration: "6 hours",
      features: ["Fishing equipment", "Professional guide", "Fresh catch BBQ", "Cruise experience"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Dubai Cruise Experiences
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover Dubai's magnificent skyline and coastline from the water. 
              Choose from our selection of luxury cruise experiences, from traditional dhows to modern yachts.
            </p>
          </div>

          {/* Cruise Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cruisePackages.map((cruise) => (
              <div key={cruise.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={cruise.image} 
                    alt={cruise.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {cruise.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cruise.title}</h3>
                  <p className="text-gray-600 mb-4">{cruise.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-amber-700 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {cruise.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold">
                    Book This Cruise
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Special Offers Section */}
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-8 rounded-xl mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Special Cruise Packages</h2>
              <p className="text-lg mb-6">
                Book multiple cruise experiences and save! Perfect for extended stays in Dubai.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-bold mb-2">Marina Explorer</h3>
                  <p className="text-sm">Marina Dinner + Canal Cruise</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-bold mb-2">Heritage & Modern</h3>
                  <p className="text-sm">Creek Dhow + Marina Cruise</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-bold mb-2">Ultimate Luxury</h3>
                  <p className="text-sm">Yacht Charter + Sunset Cruise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg border border-amber-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Set Sail?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Contact our cruise specialists to customize your perfect Dubai water experience.
            </p>
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold px-8 py-3">
              Plan My Cruise Experience
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Cruise;
