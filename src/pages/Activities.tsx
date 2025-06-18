
import { useState } from "react";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const activities = [
    // Attractions
    {
      id: 1,
      title: "Burj Khalifa Experience",
      category: "attractions",
      image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33",
      description: "Visit the world's tallest building and enjoy breathtaking views from the observation deck.",
      duration: "2-3 hours",
      highlights: ["At the Top observation deck", "Level 148 & 125", "Stunning city views", "Fast-track entry"]
    },
    {
      id: 2,
      title: "Dubai Mall & Aquarium",
      category: "attractions",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
      description: "Explore the world's largest shopping mall and walk through the magnificent aquarium.",
      duration: "4-5 hours",
      highlights: ["Shopping experience", "Dubai Aquarium", "Underwater zoo", "Fountain show"]
    },
    {
      id: 3,
      title: "Dubai Frame Experience",
      category: "attractions",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      description: "See Dubai's past and present through this iconic architectural marvel.",
      duration: "1-2 hours",
      highlights: ["Panoramic views", "Historical exhibition", "Sky deck", "Interactive displays"]
    },
    {
      id: 4,
      title: "Global Village",
      category: "attractions",
      image: "https://images.unsplash.com/photo-1583202133508-2b293b2c8e38",
      description: "Experience cultures from around the world in one magical destination.",
      duration: "4-6 hours",
      highlights: ["Cultural pavilions", "International cuisine", "Shopping", "Entertainment shows"]
    },
    {
      id: 5,
      title: "Dubai Garden Glow",
      category: "attractions",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      description: "Magical illuminated garden with stunning light displays and sculptures.",
      duration: "2-3 hours",
      highlights: ["LED art installations", "Glow garden", "Dinosaur park", "Ice sculptures"]
    },
    {
      id: 6,
      title: "Miracle Garden",
      category: "attractions",
      image: "https://images.unsplash.com/photo-1588411288671-09619b017d99",
      description: "World's largest natural flower garden with over 150 million flowers.",
      duration: "2-3 hours",
      highlights: ["Flower displays", "Emirates A380", "Floral sculptures", "Butterfly garden"]
    },

    // Adventure Activities
    {
      id: 7,
      title: "Desert Safari Adventure",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3",
      description: "Experience the thrill of dune bashing followed by traditional Bedouin entertainment.",
      duration: "6 hours",
      highlights: ["Dune bashing", "Camel riding", "BBQ dinner", "Cultural shows"]
    },
    {
      id: 8,
      title: "Helicopter Tour",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
      description: "See Dubai from above with spectacular aerial views of iconic landmarks.",
      duration: "25-40 minutes",
      highlights: ["Aerial photography", "Burj Al Arab views", "Palm Jumeirah", "Professional pilot"]
    },
    {
      id: 9,
      title: "Skydiving Dubai",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9",
      description: "Tandem skydiving over Dubai's stunning skyline and coastline.",
      duration: "4-5 hours",
      highlights: ["Tandem jump", "Professional instructor", "Scenic views", "Certificate"]
    },
    {
      id: 10,
      title: "Jet Ski Adventure",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      description: "High-speed jet skiing along Dubai's beautiful coastline.",
      duration: "1-2 hours",
      highlights: ["Jet ski rental", "Safety briefing", "Coastal tour", "Photo opportunities"]
    },
    {
      id: 11,
      title: "Parasailing Dubai",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
      description: "Soar high above Dubai's beaches with panoramic city views.",
      duration: "1-2 hours",
      highlights: ["Parasailing experience", "Beach views", "Safety equipment", "Professional guide"]
    },
    {
      id: 12,
      title: "Buggy Desert Drive",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
      description: "Self-drive adventure through Dubai's desert dunes in powerful buggies.",
      duration: "2-3 hours",
      highlights: ["Buggy driving", "Desert exploration", "Safety equipment", "Refreshments"]
    },

    // Cruise Activities
    {
      id: 13,
      title: "Dubai Marina Cruise",
      category: "cruise",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
      description: "Sail through Dubai Marina and enjoy stunning views of the modern skyline.",
      duration: "2 hours",
      highlights: ["Marina views", "Dinner cruise", "Live entertainment", "Photography"]
    },
    {
      id: 14,
      title: "Traditional Dhow Cruise",
      category: "cruise",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      description: "Experience Dubai's heritage on a traditional wooden dhow boat.",
      duration: "2.5 hours",
      highlights: ["Traditional dhow", "Creek views", "Arabic buffet", "Cultural show"]
    },
    {
      id: 15,
      title: "Luxury Yacht Charter",
      category: "cruise",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
      description: "Private yacht experience with luxury amenities and stunning views.",
      duration: "4-8 hours",
      highlights: ["Private yacht", "Professional crew", "Water sports", "Gourmet dining"]
    },
    {
      id: 16,
      title: "Sunset Catamaran",
      category: "cruise",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      description: "Watch the spectacular Dubai sunset from a modern catamaran.",
      duration: "2 hours",
      highlights: ["Sunset views", "Refreshments", "Music", "Swimming"]
    },

    // Water Sports
    {
      id: 17,
      title: "Deep Sea Fishing",
      category: "water-sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      description: "Experience deep sea fishing in the Arabian Gulf with professional guides.",
      duration: "4-6 hours",
      highlights: ["Fishing equipment", "Professional guide", "Catch guarantee", "Refreshments"]
    },
    {
      id: 18,
      title: "Scuba Diving",
      category: "water-sports",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      description: "Explore underwater marine life in Dubai's clear waters.",
      duration: "3-4 hours",
      highlights: ["Professional instructor", "Equipment included", "Marine life", "Certification"]
    },
    {
      id: 19,
      title: "Flyboarding Experience",
      category: "water-sports",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635",
      description: "Fly above water with this exciting flyboarding adventure.",
      duration: "1 hour",
      highlights: ["Flyboard training", "Safety equipment", "Professional instructor", "Unique experience"]
    },
    {
      id: 20,
      title: "Banana Boat Ride",
      category: "water-sports",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      description: "Fun-filled banana boat ride perfect for groups and families.",
      duration: "30 minutes",
      highlights: ["Group activity", "Beach fun", "Life jackets", "Photo opportunities"]
    },

    // Theme Parks
    {
      id: 21,
      title: "IMG Worlds of Adventure",
      category: "theme-parks",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620",
      description: "World's largest indoor theme park with thrilling rides and attractions.",
      duration: "Full day",
      highlights: ["Indoor theme park", "Marvel zone", "Cartoon Network", "Dinosaur encounters"]
    },
    {
      id: 22,
      title: "Atlantis Aquaventure",
      category: "theme-parks",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description: "Ultimate water park experience with slides, beaches, and marine encounters.",
      duration: "Full day",
      highlights: ["Water slides", "Private beach", "Dolphin encounter", "Shark safari"]
    },
    {
      id: 23,
      title: "Wild Wadi Water Park",
      category: "theme-parks",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba66906",
      description: "Family-friendly water park with Arabian-themed attractions.",
      duration: "Full day",
      highlights: ["Water rides", "Lazy river", "Family pools", "Arabian theme"]
    },
    {
      id: 24,
      title: "Dubai Parks and Resorts",
      category: "theme-parks",
      image: "https://images.unsplash.com/photo-1567204401-39fbc0c03549",
      description: "Multiple theme parks including Motiongate, Bollywood Parks, and Legoland.",
      duration: "Full day",
      highlights: ["Multiple parks", "Hollywood rides", "Bollywood shows", "LEGO attractions"]
    }
  ];

  const categories = [
    { id: "all", name: "All Activities" },
    { id: "attractions", name: "Attractions" },
    { id: "adventure", name: "Adventure" },
    { id: "cruise", name: "Cruises" },
    { id: "water-sports", name: "Water Sports" },
    { id: "theme-parks", name: "Theme Parks" }
  ];

  const filteredActivities = selectedCategory === "all" 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Dubai Activities & Experiences
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white"
                    : "border-amber-500 text-amber-600 hover:bg-amber-50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-amber-700 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {activity.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-lg mb-6">
              We offer customized packages and can arrange special experiences 
              tailored to your preferences and interests.
            </p>
            <Button className="bg-white text-amber-600 hover:bg-gray-100 font-semibold px-8 py-3">
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
