
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedTours = () => {
  const activities = [
    { 
      name: "Luxury Yachts & Cruises", 
      path: "/activities#yachting",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
    },
    { 
      name: "Water & Air", 
      path: "/activities#water-air",
      color: "bg-gradient-to-br from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600"
    },
    { 
      name: "Theme Parks", 
      path: "/activities#theme-parks",
      color: "bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    },
    { 
      name: "Desert Safaris", 
      path: "/activities#desert",
      color: "bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
    },
    { 
      name: "Transport", 
      path: "/activities#transport",
      color: "bg-gradient-to-br from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900"
    },
    { 
      name: "Dinner in Sky", 
      path: "/activities#dinner-sky",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
    },
    { 
      name: "Visas", 
      path: "/activities#visas",
      color: "bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Dubai Experiences & Activities
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the magic of Dubai with our curated selection of premium experiences. 
            From luxury yacht cruises to thrilling desert adventures, create memories that last a lifetime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {activities.map((activity, index) => (
            <Link key={index} to={activity.path}>
              <Button
                className={`${activity.color} text-white font-bold px-6 py-4 h-auto min-h-[80px] w-full text-center text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-2 border-white/20`}
              >
                <span className="leading-tight">{activity.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
