
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Activities = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleBookNow = (activityName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in booking ${activityName}. Could you please provide more details about pricing, availability, and what's included?`);
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  const yachtingCruises = [
    { name: "Luxury Yacht Charters", description: "Private luxury yacht experiences with premium amenities", image: "/lovable-uploads/f62de0bf-5a34-4fa0-b24b-d77bebe60be3.png" },
    { name: "Day Cruises", description: "Full day sailing experiences around Dubai coastline", image: "/lovable-uploads/f62de0bf-5a34-4fa0-b24b-d77bebe60be3.png" },
    { name: "Sunset Cruises", description: "Romantic sunset sailing with stunning views", image: "/lovable-uploads/f62de0bf-5a34-4fa0-b24b-d77bebe60be3.png" },
    { name: "Private Parties & Events", description: "Exclusive yacht parties and corporate events", image: "/lovable-uploads/f62de0bf-5a34-4fa0-b24b-d77bebe60be3.png" },
    { name: "Traditional Dhow Cruises", description: "Authentic Arabian dhow boat experiences", image: "/lovable-uploads/f62de0bf-5a34-4fa0-b24b-d77bebe60be3.png" },
    { name: "Dinner Cruise with Live Entertainment", description: "Fine dining with cultural shows aboard", image: "/lovable-uploads/f62de0bf-5a34-4fa0-b24b-d77bebe60be3.png" },
    { name: "Brunch Cruises", description: "Luxury brunch experiences on the water", image: "/lovable-uploads/f62de0bf-5a34-4fa0-b24b-d77bebe60be3.png" }
  ];

  const waterAirAdventures = [
    { name: "Jet-Ski & Flyboard", description: "High-speed water sports and flyboarding thrills", image: "/lovable-uploads/4e84f9cf-38b7-41b6-aa4d-6000217b448d.png" },
    { name: "Wakeboarding & Waterskiing", description: "Professional wakeboarding and skiing experiences", image: "/lovable-uploads/4e84f9cf-38b7-41b6-aa4d-6000217b448d.png" },
    { name: "Parasailing", description: "Soar above Dubai's coastline with parasailing", image: "/lovable-uploads/4e84f9cf-38b7-41b6-aa4d-6000217b448d.png" },
    { name: "Skydive Dubai", description: "Tandem skydiving over iconic Dubai landmarks", image: "/lovable-uploads/ccad2320-aad3-4ac5-91fb-6c58d6bde829.png" },
    { name: "Helicopter Tours", description: "Aerial tours of Dubai's stunning skyline", image: "/lovable-uploads/86dbcc77-2d33-4e6b-80a1-d1c43237d88c.png" }
  ];

  const helicopterImages = [
    "/lovable-uploads/86dbcc77-2d33-4e6b-80a1-d1c43237d88c.png",
    "/lovable-uploads/0260aa58-51ba-4251-ab06-d8cbbcae5016.png",
    "/lovable-uploads/69806259-7038-4ae7-b806-46ba6ea917e9.png",
    "/lovable-uploads/b3851242-8589-4d28-8849-ebd6681e5669.png"
  ];

  const themeParksAttractions = [
    { name: "Ferrari World Abu Dhabi", description: "World's largest indoor theme park", image: "/lovable-uploads/9cebc0ec-daea-4380-bbaa-5bb3376794c4.png" },
    { name: "Formula 1 Grand Prix Tickets", description: "Exclusive F1 race tickets and packages", image: "/lovable-uploads/0ffc5369-38df-4229-9fa5-98cd30c214c0.png" },
    { name: "Dubai Miracle Garden", description: "World's largest natural flower garden", image: "/lovable-uploads/920ef9ad-df29-4c49-a8f1-65ef96250c9a.png" },
    { name: "Museum of the Future", description: "Dubai's most innovative architectural marvel", image: "/lovable-uploads/c21fbecb-d54c-4ce2-b9cb-b9598ecd90b7.png" },
    { name: "Dubai Frame", description: "Iconic golden frame offering panoramic views", image: "/lovable-uploads/c21fbecb-d54c-4ce2-b9cb-b9598ecd90b7.png" },
    { name: "Al Ain Zoo", description: "Wildlife conservation and safari experiences", image: "/lovable-uploads/36e0d889-385e-493b-be74-fd791bcc2e2b.png" }
  ];

  const zooImages = [
    "/lovable-uploads/e8a04597-9b03-4e2c-b4ef-ccef242c38ec.png",
    "/lovable-uploads/93de7177-6f18-4230-889f-66c2449b4ff6.png",
    "/lovable-uploads/7e58d382-d585-464e-8726-68a9cbfe50ae.png",
    "/lovable-uploads/b9036e7d-e4d1-4ba6-ba01-85e146ed9d69.png",
    "/lovable-uploads/36e0d889-385e-493b-be74-fd791bcc2e2b.png"
  ];

  const desertExperiences = [
    { name: "Morning Desert Safari", description: "Early morning dune bashing and camel rides", image: "/lovable-uploads/d0221110-5c8a-4e43-8dfa-1da4ee967acc.png" },
    { name: "Evening Desert Safari", description: "Sunset safari with BBQ dinner and shows", image: "/lovable-uploads/d0221110-5c8a-4e43-8dfa-1da4ee967acc.png" },
    { name: "Overnight Safari with BBQ & Show", description: "Full desert camping experience", image: "/lovable-uploads/d0221110-5c8a-4e43-8dfa-1da4ee967acc.png" },
    { name: "Photo Safaris", description: "Professional photography desert tours", image: "/lovable-uploads/d0221110-5c8a-4e43-8dfa-1da4ee967acc.png" }
  ];

  const groundTransportation = [
    { name: "Self-Drive Luxury Cars", description: "Premium car rentals for self-driving", image: "/lovable-uploads/0ffc5369-38df-4229-9fa5-98cd30c214c0.png" },
    { name: "Chauffeured Limousines & SUVs", description: "Professional chauffeur services", image: "/lovable-uploads/71fba801-a9fc-48c6-8b4c-5729492d59aa.png" }
  ];

  const visasPaperwork = [
    { name: "Tourist Visa", description: "Fast processing for UAE tourist visas", image: "/lovable-uploads/c21fbecb-d54c-4ce2-b9cb-b9598ecd90b7.png" },
    { name: "Residence Visa", description: "Long-term residence visa assistance", image: "/lovable-uploads/c21fbecb-d54c-4ce2-b9cb-b9598ecd90b7.png" }
  ];

  const uniqueStays = [
    { name: "Overnight Yacht Live-Aboard", description: "Sleep under the stars on a luxury yacht", image: "/lovable-uploads/f62de0bf-5a34-4fa0-b24b-d77bebe60be3.png" },
    { name: "Queen Elizabeth II Floating Suite", description: "Exclusive suite on the historic QE2 hotel", image: "/lovable-uploads/f62de0bf-5a34-4fa0-b24b-d77bebe60be3.png" }
  ];

  const renderActivityCard = (activity: any, index: number) => (
    <Card 
      key={index}
      className={`transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
        hoveredCard === index ? 'rotate-2' : ''
      }`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => handleBookNow(activity.name)}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={activity.image} 
            alt={activity.name}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-lg animate-bounce">Book Now!</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
          {activity.name}
        </CardTitle>
        <CardDescription className="text-gray-600 mb-4">
          {activity.description}
        </CardDescription>
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            handleBookNow(activity.name);
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-105 transition-all duration-300"
        >
          Book via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );

  const renderImageSlider = (images: string[], title: string) => (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">{title}</h3>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-80 h-60 relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-left-right"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <img 
              src={image} 
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={() => handleBookNow(title)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg animate-bounce">Click to Book!</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-bounce">
              Dubai Activities & Experiences
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-slide-in-right">
              Discover the best of Dubai with our carefully curated selection of activities, 
              tours, and experiences designed to create unforgettable memories.
            </p>
          </div>

          <Tabs defaultValue="yachting" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 w-full mb-8 bg-white shadow-lg">
              <TabsTrigger value="yachting" className="text-xs md:text-sm">Yachting & Cruises</TabsTrigger>
              <TabsTrigger value="water-air" className="text-xs md:text-sm">Water & Air</TabsTrigger>
              <TabsTrigger value="theme-parks" className="text-xs md:text-sm">Theme Parks</TabsTrigger>
              <TabsTrigger value="desert" className="text-xs md:text-sm">Desert</TabsTrigger>
              <TabsTrigger value="transport" className="text-xs md:text-sm">Transport</TabsTrigger>
              <TabsTrigger value="visas" className="text-xs md:text-sm">Visas</TabsTrigger>
              <TabsTrigger value="unique" className="text-xs md:text-sm">Unique Stays</TabsTrigger>
            </TabsList>

            <TabsContent value="yachting">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yachtingCruises.map((activity, index) => renderActivityCard(activity, index))}
              </div>
            </TabsContent>

            <TabsContent value="water-air">
              {renderImageSlider(helicopterImages, "Helicopter Tours")}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {waterAirAdventures.map((activity, index) => renderActivityCard(activity, index))}
              </div>
            </TabsContent>

            <TabsContent value="theme-parks">
              {renderImageSlider(zooImages, "Zoo & Wildlife Experiences")}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {themeParksAttractions.map((activity, index) => renderActivityCard(activity, index))}
              </div>
            </TabsContent>

            <TabsContent value="desert">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {desertExperiences.map((activity, index) => renderActivityCard(activity, index))}
              </div>
            </TabsContent>

            <TabsContent value="transport">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groundTransportation.map((activity, index) => renderActivityCard(activity, index))}
              </div>
            </TabsContent>

            <TabsContent value="visas">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visasPaperwork.map((activity, index) => renderActivityCard(activity, index))}
              </div>
            </TabsContent>

            <TabsContent value="unique">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uniqueStays.map((activity, index) => renderActivityCard(activity, index))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 animate-bounce">Ready for Your Dubai Adventure?</h3>
              <p className="text-lg mb-6">
                Contact us now to customize your perfect Dubai experience with exclusive packages and expert guidance.
              </p>
              <Button 
                onClick={() => handleBookNow("Custom Dubai Package")}
                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold px-8 py-3 transform hover:scale-110 transition-all duration-300"
              >
                Get Custom Quote via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Activities;
