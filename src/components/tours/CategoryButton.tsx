
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  tab: string;
  icon: string;
}

interface CategoryButtonProps {
  category: Category;
  index: number;
}

const CategoryButton = ({ category, index }: CategoryButtonProps) => {
  return (
    <Link to={`/activities#${category.tab}`}>
      <Button 
        className="w-full group relative overflow-hidden bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 text-white font-bold py-4 px-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300 hover:border-yellow-200"
        style={{
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #b45309 75%, #92400e 100%)',
          boxShadow: '0 8px 32px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col items-center space-y-1">
          <span className="text-2xl">{category.icon}</span>
          <span className="text-xs md:text-sm font-extrabold text-center leading-tight drop-shadow-sm">
            {category.name}
          </span>
        </div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Button>
    </Link>
  );
};

export default CategoryButton;
