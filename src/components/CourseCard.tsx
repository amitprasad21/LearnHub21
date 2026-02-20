import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  rating: number;
  learners: string;
  language: string;
  level: string;
  classes: number;
  ageRange: string;
  originalPrice: number;
  salePrice: number;
  badge?: string;
}

const CourseCard = ({
  id,
  image,
  title,
  description,
  rating,
  learners,
  language,
  level,
  classes,
  ageRange,
  originalPrice,
  salePrice,
  badge,
}: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/course/${id}`)}
      className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group min-w-[280px] max-w-[320px] flex-shrink-0 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-orange text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="w-3 h-3 fill-accent text-accent" />
          <span className="text-xs font-semibold">{rating}</span>
          <span className="text-xs text-muted-foreground">| {learners} learners</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="text-xs bg-secondary text-foreground px-2 py-0.5 rounded-full">{language}</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{level}</span>
          <span className="text-xs bg-green/10 text-green px-2 py-0.5 rounded-full">{classes} classes</span>
        </div>

        <h3 className="text-sm font-semibold text-foreground leading-snug mb-1.5 line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{ageRange}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground line-through">₹{originalPrice}</span>
            <span className="text-base font-bold text-foreground">₹{salePrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
