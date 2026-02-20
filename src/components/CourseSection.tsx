import CourseCard from "./CourseCard";
import { ALL_COURSES } from "@/pages/CourseDetail";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface CourseSectionProps {
  title: string;
  emoji: string;
  subtitle: string;
}

const CourseSection = ({ title, emoji, subtitle }: CourseSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {title} {emoji}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">{subtitle}</p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card shadow-lg rounded-full flex items-center justify-center hover:bg-secondary transition-colors -ml-2"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {ALL_COURSES.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card shadow-lg rounded-full flex items-center justify-center hover:bg-secondary transition-colors -mr-2"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
