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
  salePrice,
  badge,
}: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/course/${id}`)}
      className="group flex min-w-[280px] max-w-[300px] flex-shrink-0 cursor-pointer flex-col overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative mb-3 h-44 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {badge && (
          <span className="absolute left-2 top-2 rounded-r-xl rounded-bl-xl bg-orange px-3 py-1 text-sm font-bold text-primary-foreground shadow">
            {badge}
          </span>
        )}

        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span>{rating}</span>
          <span className="text-muted-foreground">| {learners} learners</span>
        </div>
      </div>

      <div className="mb-2 flex flex-wrap gap-1.5">
        <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-[11px] text-primary">
          {language}
        </span>
        <span className="rounded-full border border-pink/40 bg-pink/5 px-2.5 py-0.5 text-[11px] text-pink">
          {level}
        </span>
        <span className="rounded-full border border-accent/50 bg-accent/10 px-2.5 py-0.5 text-[11px] text-accent-foreground">
          {classes} classes
        </span>
      </div>

      <h3 className="mb-1 line-clamp-2 text-lg font-bold leading-snug text-foreground">
        {title}
      </h3>
      <p className="mb-3 line-clamp-2 flex-1 text-xs text-muted-foreground">{description}</p>

      <div className="flex items-center justify-between border-t border-border pt-2">
        <div className="flex items-center gap-3 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span className="text-sm">{ageRange}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-sm">45</span>
          </div>
          <div className="text-sm font-semibold text-foreground">₹ {salePrice}</div>
        </div>

        <button
          onClick={(event) => {
            event.stopPropagation();
            navigate(`/course/${id}`);
          }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
