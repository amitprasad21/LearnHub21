import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Course } from "@/constants";
import CourseCard from "./CourseCard";

interface CourseSectionProps {
  title: string;
  emoji: string;
  subtitle: string;
  courses: Course[];
}

const CourseSection = ({ title, emoji, subtitle, courses }: CourseSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className={`py-12 md:py-16 ${sectionClassName}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {title} {emoji}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">{subtitle}</p>
        </div>

        {courses.length > 0 ? (
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
              {courses.map((course) => (
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
        ) : (
          <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
            No courses match your current filters in this section.
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;
