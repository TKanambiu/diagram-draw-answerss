
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Utensils } from "lucide-react";
import ActivitySection from "@/components/activities/ActivitySection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  yachtingCruises,
  waterAirAdventures,
  themeParksAttractions,
  desertExperiences,
  groundTransportation,
  visasPaperwork,
  uniqueStays,
  dinnerInTheSkyExperiences,
  helicopterImages,
  yachtImages,
  formulaOneImages,
  limousineImages,
  desertImages,
  miracleGardenImages,
  museumFrameImages,
  zooImages,
  queenElizabethImages,
  marinaImages,
  ferrariImages,
  waterSportsImages,
  skydivingImages,
  newDesertImages,
  newFormulaOneImages,
  newMiracleGardenImages,
  visaImages,
  additionalDesertImages,
  additionalFormulaOneImages,
  dinnerInTheSkyImages
} from "@/data/activities";

const Activities = () => {
  const location = useLocation();

  // Scroll to top when component mounts or when coming from homepage links
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleBookNow = (activityName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in booking ${activityName}. Could you please provide more details about pricing, availability, and what's included?`);
    window.open(`https://wa.me/971568723633?text=${message}`, "_blank");
  };

  // Map hash fragments to tab values
  const getDefaultTab = () => {
    const hash = location.hash.replace('#', '');
    const tabMapping: { [key: string]: string } = {
      'yachting': 'yachting',
      'water-air': 'water-air',
      'theme-parks': 'theme-parks',
      'desert': 'desert',
      'transport': 'transport',
      'dinner-sky': 'dinner-sky',
      'visas': 'visas',
      'unique': 'unique'
    };
    return tabMapping[hash] || 'yachting';
  };

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

          <Tabs defaultValue={getDefaultTab()} className="w-full">
            <TabsList className="grid grid-cols-4 md:grid-cols-8 w-full mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg rounded-lg">
              <TabsTrigger value="yachting" className="text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 font-semibold">Yachts Luxury Cruises</TabsTrigger>
              <TabsTrigger value="water-air" className="text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 font-semibold">Water & Air</TabsTrigger>
              <TabsTrigger value="theme-parks" className="text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 font-semibold">Theme Parks</TabsTrigger>
              <TabsTrigger value="desert" className="text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 font-semibold">Desert Safaris</TabsTrigger>
              <TabsTrigger value="transport" className="text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 font-semibold">Transport</TabsTrigger>
              <TabsTrigger value="dinner-sky" className="text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 font-semibold flex items-center gap-1">
                <Utensils size={16} />
                Dinner in Sky
              </TabsTrigger>
              <TabsTrigger value="visas" className="text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 font-semibold flex items-center gap-1">
                <Plane size={16} />
                Visas
              </TabsTrigger>
              <TabsTrigger value="unique" className="text-xs md:text-sm text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 font-semibold">Unique Stays</TabsTrigger>
            </TabsList>

            <TabsContent value="yachting">
              <ActivitySection 
                activities={yachtingCruises} 
                imageSliders={[
                  { images: yachtImages, title: "Luxury Yacht Experiences" },
                  { images: marinaImages, title: "Marina & Beach Experience" }
                ]}
                onBookNow={handleBookNow} 
              />
            </TabsContent>

            <TabsContent value="water-air">
              <ActivitySection 
                activities={waterAirAdventures} 
                imageSliders={[
                  { images: helicopterImages, title: "Helicopter Tours" },
                  { images: waterSportsImages, title: "Water Sports Adventures" },
                  { images: skydivingImages, title: "Skydiving Experiences" }
                ]}
                onBookNow={handleBookNow} 
              />
            </TabsContent>

            <TabsContent value="theme-parks">
              <ActivitySection 
                activities={themeParksAttractions} 
                imageSliders={[
                  { images: [...formulaOneImages, ...newFormulaOneImages, ...additionalFormulaOneImages], title: "Formula 1 Grand Prix" },
                  { images: [...miracleGardenImages, ...newMiracleGardenImages], title: "Dubai Miracle Garden" },
                  { images: museumFrameImages, title: "Museum of the Future & Dubai Frame" },
                  { images: zooImages, title: "Zoo & Wildlife Experiences" }
                ]}
                onBookNow={handleBookNow} 
              />
            </TabsContent>

            <TabsContent value="desert">
              <ActivitySection 
                activities={desertExperiences} 
                imageSliders={[{ images: [...desertImages, ...newDesertImages, ...additionalDesertImages], title: "Desert Safari Adventures" }]}
                onBookNow={handleBookNow} 
              />
            </TabsContent>

            <TabsContent value="transport">
              <ActivitySection 
                activities={groundTransportation} 
                imageSliders={[
                  { images: limousineImages, title: "Luxury Transportation" },
                  { images: ferrariImages, title: "Premium Ferrari Collection" }
                ]}
                onBookNow={handleBookNow} 
              />
            </TabsContent>

            <TabsContent value="dinner-sky">
              <ActivitySection 
                activities={dinnerInTheSkyExperiences} 
                imageSliders={[{ images: dinnerInTheSkyImages, title: "Dinner in the Sky Dubai" }]}
                onBookNow={handleBookNow} 
              />
            </TabsContent>

            <TabsContent value="visas">
              <ActivitySection 
                activities={visasPaperwork} 
                imageSliders={[{ images: visaImages, title: "Visa Services" }]}
                onBookNow={handleBookNow} 
              />
            </TabsContent>

            <TabsContent value="unique">
              <ActivitySection 
                activities={uniqueStays} 
                imageSliders={[{ images: queenElizabethImages, title: "Queen Elizabeth II Floating Suite" }]}
                onBookNow={handleBookNow} 
              />
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
