
import { Button } from "@/components/ui/button";

interface Tour {
  id: number;
  title: string;
  image: string;
  description: string;
  duration: string;
  highlights: string[];
  gradient: string;
  accentColor: string;
}

interface TourCardProps {
  tour: Tour;
  index: number;
  onLearnMore: (title: string) => void;
}

const TourCard = ({ tour, index, onLearnMore }: TourCardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in border-2 border-gradient-to-r ${tour.gradient} hover:scale-105`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-40 md:h-48 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
          onClick={() => onLearnMore(tour.title)}
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
          onClick={() => onLearnMore(tour.title)}
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
          onClick={() => onLearnMore(tour.title)}
          className={`w-full bg-gradient-to-r ${tour.gradient} hover:from-gray-800 hover:to-gray-900 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl font-semibold py-2 md:py-3 rounded-lg text-sm md:text-base`}
        >
          Book via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default TourCard;
