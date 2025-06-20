
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import TourCard from "./tours/TourCard";
import CategoryButton from "./tours/CategoryButton";
import { tours, categories } from "@/data/tours";

const FeaturedTours = () => {
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

        {/* Enhanced Activity Category Navigation */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <CategoryButton key={index} category={category} index={index} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
          {tours.map((tour, index) => (
            <TourCard 
              key={tour.id} 
              tour={tour} 
              index={index} 
              onLearnMore={handleLearnMore} 
            />
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
