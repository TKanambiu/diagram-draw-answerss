
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedTours = () => {
  const tours = [
    {
      id: 1,
      title: "Dubai City Explorer",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      description: "Discover Dubai's iconic landmarks including Burj Khalifa, Dubai Mall, and Dubai Frame",
      duration: "8 hours",
      highlights: ["Burj Khalifa", "Dubai Mall", "Dubai Frame", "Gold Souk"]
    },
    {
      id: 2,
      title: "Desert Safari Premium",
      image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3",
      description: "Experience the thrill of the Arabian desert with dune bashing and traditional entertainment",
      duration: "6 hours",
      highlights: ["Dune Bashing", "Camel Riding", "BBQ Dinner", "Cultural Shows"]
    },
    {
      id: 3,
      title: "Marina & Beach Experience",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
      description: "Explore Dubai Marina's stunning waterfront and pristine beaches",
      duration: "5 hours",
      highlights: ["Marina Walk", "Beach Access", "Yacht Views", "Waterfront Dining"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked tours and experiences that showcase the very best of Dubai's 
            attractions, culture, and adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/activities">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4">
              View All Activities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
