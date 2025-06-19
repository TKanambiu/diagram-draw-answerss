
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ActivityCardProps {
  activity: {
    name: string;
    description: string;
    image: string;
  };
  index: number;
  onBookNow: (activityName: string) => void;
}

const ActivityCard = ({ activity, index, onBookNow }: ActivityCardProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Card 
      className={`transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
        hoveredCard === index ? 'rotate-2' : ''
      }`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => onBookNow(activity.name)}
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
            onBookNow(activity.name);
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-105 transition-all duration-300"
        >
          Book via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
