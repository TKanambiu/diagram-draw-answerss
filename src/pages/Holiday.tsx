
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Holiday = () => {
  const holidayPackages = [
    {
      id: 1,
      title: "Dubai Family Adventure",
      image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33",
      duration: "5 Days / 4 Nights",
      highlights: ["Dubai Mall & Aquarium", "Desert Safari", "Burj Khalifa", "Beach Day", "Theme Parks"],
      description: "Perfect family getaway with kid-friendly activities and luxury accommodation."
    },
    {
      id: 2,
      title: "Romantic Dubai Honeymoon",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
      duration: "7 Days / 6 Nights",
      highlights: ["Luxury Resort", "Private Dinner Cruise", "Couple's Spa", "Sunset Views", "Fine Dining"],
      description: "Romantic escape with luxury experiences and intimate moments in Dubai."
    },
    {
      id: 3,
      title: "Dubai Business & Leisure",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      duration: "4 Days / 3 Nights",
      highlights: ["Business Hotel", "City Tours", "Shopping", "Networking Events", "Airport Transfers"],
      description: "Combine business with pleasure in Dubai's dynamic commercial environment."
    },
    {
      id: 4,
      title: "Luxury Dubai Experience",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      duration: "6 Days / 5 Nights",
      highlights: ["7-Star Hotel", "Private Tours", "Helicopter Ride", "Yacht Charter", "VIP Services"],
      description: "Ultimate luxury experience with exclusive access to Dubai's finest offerings."
    },
    {
      id: 5,
      title: "Dubai Adventure Seeker",
      image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3",
      duration: "5 Days / 4 Nights",
      highlights: ["Skydiving", "Dune Bashing", "Water Sports", "Rock Climbing", "Adventure Tours"],
      description: "Adrenaline-packed holiday for thrill-seekers and adventure enthusiasts."
    },
    {
      id: 6,
      title: "Cultural Dubai Discovery",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      duration: "4 Days / 3 Nights",
      highlights: ["Heritage Sites", "Traditional Souks", "Cultural Shows", "Local Cuisine", "Art Galleries"],
      description: "Immerse yourself in Dubai's rich culture and traditional heritage."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Dubai Holiday Packages
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover Dubai with our carefully crafted holiday packages. From family adventures 
              to romantic getaways, we have the perfect Dubai experience waiting for you.
            </p>
          </div>

          {/* Holiday Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {holidayPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-amber-700 mb-2">Package Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold">
                    Book Package
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Our Holiday Packages?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">✓</span>
                </div>
                <h3 className="font-semibold mb-2">All-Inclusive</h3>
                <p className="text-sm text-gray-600">Everything included - no hidden costs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">★</span>
                </div>
                <h3 className="font-semibold mb-2">Expert Guides</h3>
                <p className="text-sm text-gray-600">Professional local guides</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">24</span>
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Round-the-clock assistance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">♦</span>
                </div>
                <h3 className="font-semibold mb-2">Customizable</h3>
                <p className="text-sm text-gray-600">Tailor-made experiences</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Start Planning Your Dream Holiday</h2>
            <p className="text-lg mb-6">
              Let our travel experts create the perfect Dubai holiday package just for you.
            </p>
            <Button className="bg-white text-amber-600 hover:bg-gray-100 font-semibold px-8 py-3">
              Get Custom Package Quote
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Holiday;
