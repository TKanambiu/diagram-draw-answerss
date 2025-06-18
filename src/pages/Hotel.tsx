
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Hotel = () => {
  const hotelCategories = [
    {
      id: 1,
      category: "Luxury Resorts",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      hotels: [
        "Atlantis The Palm",
        "Burj Al Arab Jumeirah",
        "Emirates Palace",
        "One&Only Royal Mirage"
      ]
    },
    {
      id: 2,
      category: "Business Hotels",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      hotels: [
        "JW Marriott Marquis",
        "Conrad Dubai",
        "Hilton Dubai Creek",
        "Radisson Blu Hotel Dubai"
      ]
    },
    {
      id: 3,
      category: "Desert Resorts",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      hotels: [
        "Al Maha Desert Resort",
        "Bab Al Shams Desert Resort",
        "Desert Palm Dubai",
        "Lapita Hotel Autograph Collection"
      ]
    },
    {
      id: 4,
      category: "Beach Resorts",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      hotels: [
        "Jumeirah Beach Hotel",
        "Le Royal Meridien Beach Resort",
        "Nikki Beach Resort",
        "The Ritz-Carlton Dubai"
      ]
    },
    {
      id: 5,
      category: "Budget Friendly",
      image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570",
      hotels: [
        "Premier Inn Dubai",
        "Citymax Hotels",
        "Rove Hotels",
        "ibis Styles Dubai"
      ]
    },
    {
      id: 6,
      category: "Boutique Hotels",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      hotels: [
        "XVA Art Hotel",
        "The Oberoi Dubai",
        "FIVE Palm Jumeirah",
        "25hours Hotel One Central"
      ]
    }
  ];

  const handleViewHotels = (category: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${category} in Dubai. Could you please show me available options and pricing?`);
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  const handleGetQuote = () => {
    const message = encodeURIComponent("Hi! I'd like to get a custom quote for Dubai hotel bookings. Please provide me with your best packages and pricing.");
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4 animate-bounce">
              Dubai Hotel Bookings
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-slide-in-right">
              From world-class luxury resorts to budget-friendly stays, we'll help you find 
              the perfect accommodation for your Dubai experience.
            </p>
          </div>

          {/* Hotel Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {hotelCategories.map((category, index) => (
              <div 
                key={category.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.category}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2 animate-pulse">{category.category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-amber-700 mb-3">Featured Hotels:</h4>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    {category.hotels.map((hotel, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                        {hotel}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleViewHotels(category.category)}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-bounce"
                  >
                    View Hotels via WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-200 animate-scale-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Hotel Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  Best Rate Guarantee
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  Free Hotel Transfers
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  24/7 Customer Support
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-3 animate-pulse"></span>
                  Flexible Cancellation
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-8 rounded-xl animate-scale-in">
              <h3 className="text-2xl font-bold mb-4">Special Packages</h3>
              <ul className="space-y-3">
                <li>• Hotel + Activities Combo</li>
                <li>• Extended Stay Discounts</li>
                <li>• Family Package Deals</li>
                <li>• Business Travel Rates</li>
              </ul>
              <Button 
                onClick={handleGetQuote}
                className="mt-6 bg-white text-amber-600 hover:bg-gray-100 font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Hotel;
