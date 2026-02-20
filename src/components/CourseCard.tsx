import { Star, Users, Clock, ShoppingCart } from "lucide-react";
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
      className="bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group min-w-[260px] max-w-[300px] flex-shrink-0 cursor-pointer flex flex-col overflow-hidden"
    >
      {/* Rating row — above image */}
      <div className="flex items-center gap-1 px-3 pt-3 pb-1">
        <Star className="w-3.5 h-3.5 fill-accent text-accent" />
        <span className="text-xs font-semibold text-foreground">{rating}</span>
        <span className="text-xs text-muted-foreground">| {learners} learners</span>
      </div>

      {/* Image */}
      <div className="relative mx-3 rounded-xl overflow-hidden h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <span className="absolute top-2.5 left-2.5 bg-orange text-primary-foreground text-[11px] font-bold px-3 py-1 rounded-full shadow">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        {/* Pill tags */}
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          <span className="text-[11px] border border-primary/30 text-primary px-2.5 py-0.5 rounded-full bg-primary/5">
            {language}
          </span>
          <span className="text-[11px] border border-pink/40 text-pink px-2.5 py-0.5 rounded-full bg-pink/5">
            {level}
          </span>
          <span className="text-[11px] border border-accent/50 text-accent-foreground px-2.5 py-0.5 rounded-full bg-accent/10">
            {classes} classes
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-foreground leading-snug mb-1 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span className="text-[11px]">{ageRange}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[11px]">{classes * 45} min</span>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="text-[11px] font-semibold text-foreground">₹{salePrice}</span>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(`/course/${id}`); }}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
