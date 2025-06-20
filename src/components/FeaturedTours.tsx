import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Plane } from "lucide-react";

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
      title: "Luxury Yacht Charter",
      image: "/lovable-uploads/1af48b16-d1b5-4745-8dd2-a85b6abe177b.png",
      description: "Premium yacht experiences with luxury amenities, day cruises, sunset trips, and private events",
      duration: "4-8 hours",
      highlights: ["Luxury Yacht", "Day Cruises", "Sunset Trips", "Private Events"],
      gradient: "from-cyan-500 to-blue-500",
      accentColor: "cyan"
    },
    {
      id: 4,
      title: "Helicopter Tours",
      image: "/lovable-uploads/86dbcc77-2d33-4e6b-80a1-d1c43237d88c.png",
      description: "Aerial tours of Dubai's stunning skyline with breathtaking views of iconic landmarks",
      duration: "15-45 mins",
      highlights: ["Aerial Views", "Burj Al Arab", "Palm Jumeirah", "Professional Pilot"],
      gradient: "from-emerald-500 to-teal-500",
      accentColor: "emerald"
    },
    {
      id: 5,
      title: "Ferrari World & Formula 1",
      image: "/lovable-uploads/bbd8c5c4-b26f-42a4-bcc3-b35307f3d80a.png",
      description: "World's largest indoor theme park and exclusive F1 race tickets and packages",
      duration: "Full Day",
      highlights: ["Ferrari World", "F1 Tickets", "Theme Park", "Racing Experience"],
      gradient: "from-red-500 to-rose-500",
      accentColor: "red"
    },
    {
      id: 6,
      title: "Skydiving Dubai",
      image: "/lovable-uploads/9caf94b8-8bcc-4060-abac-55a1a674319a.png",
      description: "Tandem skydiving over iconic Dubai landmarks with professional instructors",
      duration: "3-4 hours",
      highlights: ["Tandem Jump", "Professional Guide", "Dubai Views", "Safety First"],
      gradient: "from-sky-500 to-indigo-500",
      accentColor: "sky"
    },
    {
      id: 7,
      title: "Luxury Transportation",
      image: "/lovable-uploads/aede6175-4086-428d-893b-2f52c27c187e.png",
      description: "Professional chauffeur services with luxury vehicles and premium car rentals",
      duration: "Flexible",
      highlights: ["Luxury Cars", "Professional Chauffeur", "Airport Transfer", "City Tours"],
      gradient: "from-amber-500 to-yellow-500",
      accentColor: "amber"
    },
    {
      id: 8,
      title: "Dinner in the Sky",
      image: "/lovable-uploads/9296ae66-1b17-46a2-a081-80ad85c65585.png",
      description: "Experience fine dining 50 meters above ground with breathtaking views of Dubai's skyline",
      duration: "90 minutes",
      highlights: ["Sky Dining", "Panoramic Views", "Gourmet Menu", "Unique Experience"],
      gradient: "from-violet-500 to-purple-500",
      accentColor: "violet"
    },
    {
      id: 9,
      title: "Dubai Miracle Garden",
      image: "/lovable-uploads/9b715064-256b-45c6-967f-6c43c71d0859.png",
      description: "World's largest natural flower garden with stunning floral displays and artistic arrangements",
      duration: "3-4 hours",
      highlights: ["Flower Garden", "Artistic Displays", "Photo Spots", "Seasonal Blooms"],
      gradient: "from-pink-500 to-rose-500",
      accentColor: "pink"
    },
    {
      id: 10,
      title: "Visa Services",
      image: "/lovable-uploads/6dc7fb8d-1bf4-4abb-b15c-e96b7e003eef.png",
      description: "Fast processing for UAE tourist visas and residence visa assistance",
      duration: "2-7 days",
      highlights: ["Tourist Visa", "Residence Visa", "Fast Processing", "Expert Assistance"],
      gradient: "from-slate-500 to-gray-500",
      accentColor: "slate"
    },
    {
      id: 11,
      title: "Traditional Dhow Cruises",
      image: "/lovable-uploads/fb8187fb-18f1-45b9-8453-f1468ba9aed8.png",
      description: "Authentic Arabian dhow boat experiences with dinner and entertainment",
      duration: "2-3 hours",
      highlights: ["Traditional Dhow", "Dubai Creek", "Buffet Dinner", "Live Shows"],
      gradient: "from-teal-500 to-cyan-500",
      accentColor: "teal"
    },
    {
      id: 12,
      title: "Water Sports Adventures",
      image: "/lovable-uploads/345c54d1-791a-4801-b153-5c532a91639a.png",
      description: "Jet-ski, flyboard, wakeboarding and parasailing thrills on Dubai's waters",
      duration: "2-4 hours",
      highlights: ["Jet-Ski", "Flyboard", "Wakeboarding", "Parasailing"],
      gradient: "from-blue-500 to-indigo-500",
      accentColor: "blue"
    },
    {
      id: 13,
      title: "Museum & Cultural Tours",
      image: "/lovable-uploads/9d408d3e-f1ac-484e-9e8a-c35e3318f2df.png",
      description: "Explore Dubai's culture at Museum of the Future, Dubai Frame and heritage sites",
      duration: "4-6 hours",
      highlights: ["Museum of Future", "Dubai Frame", "Heritage Sites", "Cultural Experience"],
      gradient: "from-green-500 to-emerald-500",
      accentColor: "green"
    },
    {
      id: 14,
      title: "Wildlife & Zoo Experiences",
      image: "/lovable-uploads/36e0d889-385e-493b-be74-fd791bcc2e2b.png",
      description: "Al Ain Zoo and wildlife conservation experiences with safari adventures",
      duration: "Full Day",
      highlights: ["Al Ain Zoo", "Safari Experience", "Wildlife Conservation", "Educational Tours"],
      gradient: "from-yellow-500 to-orange-500",
      accentColor: "yellow"
    },
    {
      id: 15,
      title: "Unique Luxury Stays",
      image: "/lovable-uploads/ce9bca36-9216-4d50-9f7d-431a7d3b7aa1.png",
      description: "Overnight yacht live-aboard and Queen Elizabeth II floating suite experiences",
      duration: "Overnight",
      highlights: ["Yacht Live-Aboard", "QE2 Hotel", "Luxury Suite", "Unique Experience"],
      gradient: "from-indigo-500 to-purple-500",
      accentColor: "indigo"
    },
    {
      id: 16,
      title: "Jet-Ski & Flyboard",
      image: "/lovable-uploads/345c54d1-791a-4801-b153-5c532a91639a.png",
      description: "High-speed water sports and flyboarding thrills on Dubai's pristine waters",
      duration: "2-3 hours",
      highlights: ["Jet-Ski", "Flyboard", "Water Thrills", "Professional Guide"],
      gradient: "from-blue-400 to-cyan-500",
      accentColor: "blue"
    },
    {
      id: 17,
      title: "Wakeboarding & Waterskiing",
      image: "/lovable-uploads/deabe26b-4e4a-409d-b086-db43fce48ac4.png",
      description: "Professional wakeboarding and skiing experiences for all skill levels",
      duration: "2-4 hours",
      highlights: ["Wakeboarding", "Waterskiing", "Professional Instruction", "Equipment Included"],
      gradient: "from-cyan-400 to-blue-600",
      accentColor: "cyan"
    },
    {
      id: 18,
      title: "Parasailing Adventures",
      image: "/lovable-uploads/87a3db89-65d0-4a98-8888-47a3a3daa437.png",
      description: "Soar above Dubai's coastline with breathtaking parasailing experiences",
      duration: "1-2 hours",
      highlights: ["Parasailing", "Coastal Views", "Safe Equipment", "Photo Opportunities"],
      gradient: "from-sky-400 to-blue-500",
      accentColor: "sky"
    },
    {
      id: 19,
      title: "Self-Drive Luxury Cars",
      image: "/lovable-uploads/5d821699-e1b1-4c7c-a66b-04792d07becb.png",
      description: "Premium car rentals for self-driving adventures around Dubai",
      duration: "Flexible",
      highlights: ["Luxury Vehicles", "Self-Drive", "Insurance Included", "24/7 Support"],
      gradient: "from-red-400 to-orange-500",
      accentColor: "red"
    },
    {
      id: 20,
      title: "Photo Safaris",
      image: "/lovable-uploads/8cae6130-34d5-4166-99ab-1c080c5dbe11.png",
      description: "Professional photography desert tours capturing Dubai's natural beauty",
      duration: "4-6 hours",
      highlights: ["Photography Tour", "Professional Guide", "Equipment Provided", "Scenic Locations"],
      gradient: "from-amber-400 to-yellow-600",
      accentColor: "amber"
    },
    {
      id: 21,
      title: "Breakfast in the Air",
      image: "/lovable-uploads/fcf70f1e-696a-4ac2-9208-c20a1ba4b358.png",
      description: "Unique dining experience suspended high above Dubai with panoramic views",
      duration: "2 hours",
      highlights: ["Aerial Dining", "Gourmet Breakfast", "City Views", "Unique Experience"],
      gradient: "from-orange-400 to-red-500",
      accentColor: "orange"
    },
    {
      id: 22,
      title: "Lunch in the Sky",
      image: "/lovable-uploads/c5419099-2fda-4d98-91a1-810430d3cf23.png",
      description: "Enjoy a gourmet lunch experience high above Dubai with panoramic city views",
      duration: "2 hours",
      highlights: ["Sky Dining", "Gourmet Lunch", "Panoramic Views", "Professional Service"],
      gradient: "from-purple-400 to-pink-500",
      accentColor: "purple"
    },
    {
      id: 23,
      title: "Sky High Celebration",
      image: "/lovable-uploads/dd99814d-7824-484a-8bf3-9fec4e8f69cf.png",
      description: "Celebrate special occasions with an unforgettable dining experience in the sky",
      duration: "2-3 hours",
      highlights: ["Special Events", "Customized Menu", "Celebration Package", "Memorable Experience"],
      gradient: "from-violet-400 to-purple-600",
      accentColor: "violet"
    },
    {
      id: 24,
      title: "Tourist Visa Processing",
      image: "/lovable-uploads/6dc7fb8d-1bf4-4abb-b15c-e96b7e003eef.png",
      description: "Fast and reliable UAE tourist visa processing with expert guidance",
      duration: "2-7 days",
      highlights: ["Fast Processing", "Expert Guidance", "Document Support", "Multiple Entry Options"],
      gradient: "from-gray-400 to-slate-600",
      accentColor: "gray"
    },
    {
      id: 25,
      title: "Residence Visa Assistance",
      image: "/lovable-uploads/6dc7fb8d-1bf4-4abb-b15c-e96b7e003eef.png",
      description: "Comprehensive assistance for UAE residence visa applications and renewals",
      duration: "1-2 weeks",
      highlights: ["Residence Visa", "Application Support", "Document Preparation", "Follow-up Service"],
      gradient: "from-slate-400 to-gray-600",
      accentColor: "slate"
    }
  ];

  const handleLearnMore = (tourTitle: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${tourTitle}. Could you please provide more details, pricing, and availability?`);
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Home className="text-amber-500 animate-bounce" size={32} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent animate-bounce">
              Dubai Experiences & Activities
            </h2>
            <Home className="text-amber-500 animate-bounce" size={32} />
          </div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-slide-in-right">
            Discover the complete collection of Dubai's most exciting tours, adventures, and luxury experiences.
          </p>
        </div>

        {/* Activity Category Navigation - Moved to top */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: "Luxury Yachts & Cruises", tab: "yachting", gradient: "from-cyan-500 to-blue-500" },
              { name: "Water & Air", tab: "water-air", gradient: "from-blue-500 to-indigo-500" },
              { name: "Theme Parks", tab: "theme-parks", gradient: "from-red-500 to-orange-500" },
              { name: "Desert", tab: "desert", gradient: "from-orange-500 to-yellow-500" },
              { name: "Transport", tab: "transport", gradient: "from-amber-500 to-red-500" },
              { name: "Dinner in Sky", tab: "dinner-sky", gradient: "from-purple-500 to-pink-500" },
              { name: "Visas", tab: "visas", gradient: "from-slate-500 to-gray-500" },
              { name: "Unique", tab: "unique", gradient: "from-indigo-500 to-purple-500" }
            ].map((category, index) => (
              <Link key={index} to={`/activities#${category.tab}`}>
                <Button 
                  className={`w-full bg-gradient-to-r ${category.gradient} hover:shadow-xl text-white font-semibold py-3 px-4 rounded-lg transform hover:scale-105 transition-all duration-300 text-sm`}
                >
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
          {tours.map((tour, index) => (
            <div 
              key={tour.id} 
              className={`bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in border-2 border-gradient-to-r ${tour.gradient} hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                  onClick={() => handleLearnMore(tour.title)}
                />
                <div className={`absolute top-2 md:top-4 right-2 md:right-4 bg-gradient-to-r ${tour.gradient} text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold animate-pulse shadow-lg`}>
                  {tour.duration}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg md:text-xl animate-bounce bg-black/50 px-4 py-2 rounded-lg">
                    Click for Details!
                  </span>
                </div>
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${tour.gradient}`}></div>
              </div>
              <div className="p-4 md:p-6 bg-gradient-to-br from-white to-gray-50">
                <h3 
                  className={`text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 cursor-pointer hover:bg-gradient-to-r hover:${tour.gradient} hover:bg-clip-text hover:text-transparent transition-all duration-300`}
                  onClick={() => handleLearnMore(tour.title)}
                >
                  {tour.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed line-clamp-3">{tour.description}</p>
                
                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                    <span className={`w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r ${tour.gradient} rounded-full animate-pulse`}></span>
                    Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <span 
                        key={index} 
                        className={`bg-gradient-to-r ${tour.gradient} text-white text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-full animate-pulse font-medium shadow-md hover:shadow-lg transition-shadow duration-300`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleLearnMore(tour.title)}
                  className={`w-full bg-gradient-to-r ${tour.gradient} hover:from-gray-800 hover:to-gray-900 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl font-semibold py-2 md:py-3 rounded-lg text-sm md:text-base`}
                >
                  Book via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/activities">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400 hover:from-yellow-700 hover:via-amber-600 hover:to-yellow-500 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-bounce rounded-xl shadow-lg"
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
