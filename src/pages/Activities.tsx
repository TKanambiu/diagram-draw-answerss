
import { useState } from "react";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const activities = [
    {
      id: 1,
      title: "Burj Khalifa Experience",
      category: "attractions",
      image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33",
      description: "Visit the world's tallest building and enjoy breathtaking views from the observation deck.",
      duration: "2-3 hours",
      highlights: ["At the Top observation deck", "Level 148 & 125", "Stunning city views"]
    },
    {
      id: 2,
      title: "Desert Safari Adventure",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3",
      description: "Experience the thrill of dune bashing followed by traditional Bedouin entertainment.",
      duration: "6 hours",
      highlights: ["Dune bashing", "Camel riding", "BBQ dinner", "Cultural shows"]
    },
    {
      id: 3,
      title: "Dubai Marina Cruise",
      category: "cruise",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
      description: "Sail through Dubai Marina and enjoy stunning views of the modern skyline.",
      duration: "2 hours",
      highlights: ["Marina views", "Dinner cruise", "Live entertainment", "Photography"]
    },
    {
      id: 4,
      title: "Dubai Mall & Aquarium",
      category: "attractions",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
      description: "Explore the world's largest shopping mall and walk through the magnificent aquarium.",
      duration: "4-5 hours",
      highlights: ["Shopping experience", "Dubai Aquarium", "Underwater zoo", "Fountain show"]
    },
    {
      id: 5,
      title: "Dubai Frame Experience",
      category: "attractions",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      description: "See Dubai's past and present through this iconic architectural marvel.",
      duration: "1-2 hours",
      highlights: ["Panoramic views", "Historical exhibition", "Sky deck", "Interactive displays"]
    },
    {
      id: 6,
      title: "Helicopter Tour",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
      description: "See Dubai from above with spectacular aerial views of iconic landmarks.",
      duration: "25-40 minutes",
      highlights: ["Aerial photography", "Burj Al Arab views", "Palm Jumeirah", "Professional pilot"]
    }
  ];

  const categories = [
    { id: "all", name: "All Activities" },
    { id: "attractions", name: "Attractions" },
    { id: "adventure", name: "Adventure" },
    { id: "cruise", name: "Cruises" }
  ];

  const filteredActivities = selectedCategory === "all" 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dubai Activities & Experiences
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best of Dubai with our carefully curated selection of activities, 
              attractions, and experiences that showcase the city's magnificence.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {activity.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-lg mb-6">
              We offer customized packages and can arrange special experiences 
              tailored to your preferences and interests.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
              Contact Our Experts
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
