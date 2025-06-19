
import ActivityCard from "./ActivityCard";
import ImageSlider from "./ImageSlider";

interface Activity {
  name: string;
  description: string;
  image: string;
}

interface ActivitySectionProps {
  activities: Activity[];
  imageSliders?: { images: string[]; title: string }[];
  onBookNow: (activityName: string) => void;
}

const ActivitySection = ({ activities, imageSliders, onBookNow }: ActivitySectionProps) => {
  return (
    <div>
      {imageSliders && imageSliders.map((slider, index) => (
        <ImageSlider 
          key={index}
          images={slider.images} 
          title={slider.title} 
          onBookNow={onBookNow}
        />
      ))}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <ActivityCard 
            key={index}
            activity={activity} 
            index={index} 
            onBookNow={onBookNow}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
