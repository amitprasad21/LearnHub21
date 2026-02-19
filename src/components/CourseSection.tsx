import CourseCard from "./CourseCard";
import courseRobotics from "@/assets/course-robotics.jpg";
import courseCoding from "@/assets/course-coding.jpg";
import courseChess from "@/assets/course-chess.jpg";
import courseSpeaking from "@/assets/course-speaking.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const COURSES = [
  {
    image: courseRobotics,
    title: "Summer robotics camp: fun projects with Arduino, TinkerCAD coding and 3D printing",
    description: "Build circuits & smart projects like alarms, weather stations, etc",
    rating: 4.9,
    learners: "200+",
    language: "English",
    level: "Intermediate",
    classes: 4,
    ageRange: "7-10 yrs",
    originalPrice: 299,
    salePrice: 45,
    badge: "Selling fast",
  },
  {
    image: courseCoding,
    title: "Creative coding for kids: build your first game with Scratch",
    description: "Learn programming fundamentals through fun game building exercises",
    rating: 4.8,
    learners: "350+",
    language: "English",
    level: "Beginner",
    classes: 6,
    ageRange: "5-8 yrs",
    originalPrice: 399,
    salePrice: 59,
  },
  {
    image: courseChess,
    title: "Chess masterclass: strategy and tactics for young minds",
    description: "Master openings, tactics and endgame strategies with expert coaches",
    rating: 4.9,
    learners: "150+",
    language: "English",
    level: "Beginner",
    classes: 8,
    ageRange: "6-12 yrs",
    originalPrice: 499,
    salePrice: 79,
  },
  {
    image: courseSpeaking,
    title: "Public speaking & communication skills for confident kids",
    description: "Build confidence, learn storytelling, and present like a pro",
    rating: 4.7,
    learners: "180+",
    language: "English",
    level: "All Levels",
    classes: 5,
    ageRange: "8-14 yrs",
    originalPrice: 349,
    salePrice: 55,
    badge: "New",
  },
  {
    image: courseRobotics,
    title: "Advanced robotics: IoT projects with sensors and motors",
    description: "Create smart home projects and learn about Internet of Things",
    rating: 4.9,
    learners: "120+",
    language: "English",
    level: "Advanced",
    classes: 6,
    ageRange: "10-15 yrs",
    originalPrice: 599,
    salePrice: 99,
  },
];

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
            {COURSES.map((course, i) => (
              <CourseCard key={i} {...course} />
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
