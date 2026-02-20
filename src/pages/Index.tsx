import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgeSelection from "@/components/AgeSelection";
import CourseSection from "@/components/CourseSection";
import TopTeachers from "@/components/TopTeachers";
import PopularCategories from "@/components/PopularCategories";
import FilterByTime from "@/components/FilterByTime";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ALL_COURSES, type Course } from "@/constants";
import { filterCourses } from "@/services/course-service";

const courseSections: Array<{
  title: string;
  emoji: string;
  subtitle: string;
  filter: (course: Course) => boolean;
}> = [
  {
    title: "New Launches",
    emoji: "⭐",
    subtitle: "Our most loved courses that kids absolutely adore!",
    filter: (course) => course.badge === "New" || course.badge === "Selling fast",
  },
  {
    title: "Featured Courses",
    emoji: "🌟",
    subtitle: "Our most loved courses that kids absolutely adore!",
    filter: () => true,
  },
  {
    title: "Webinar starting within 24 hrs",
    emoji: "🔴",
    subtitle: "Live sessions starting soon — don't miss out!",
    filter: (course) => course.timeSlot === "Evening" || course.timeSlot === "Late Evening",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<Course["timeSlot"] | null>(null);

  const filteredCourses = useMemo(
    () =>
      filterCourses(ALL_COURSES, {
        searchTerm,
        selectedAge,
        selectedTimeSlot,
      }),
    [searchTerm, selectedAge, selectedTimeSlot],
  );

  const hasActiveFilters = Boolean(searchTerm.trim() || selectedAge || selectedTimeSlot);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedAge(null);
    setSelectedTimeSlot(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ScrollReveal>
        <AgeSelection selectedAge={selectedAge} onSelectAge={setSelectedAge} />
      </ScrollReveal>

      {hasActiveFilters && (
        <div className="container mx-auto px-4 md:px-6 pb-2">
          <div className="rounded-2xl border border-border bg-card p-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Active filters:</span>{" "}
              {searchTerm.trim() && <span>Search “{searchTerm.trim()}” </span>}
              {selectedAge && <span>• Age {selectedAge} years </span>}
              {selectedTimeSlot && <span>• {selectedTimeSlot}</span>}
            </p>
            <button
              onClick={resetFilters}
              className="self-start md:self-auto rounded-lg bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              Reset filters
            </button>
          </div>
        </div>
      )}

      <ScrollReveal>
        <FilterByTime selectedTimeSlot={selectedTimeSlot} onSelectTimeSlot={setSelectedTimeSlot} />
      </ScrollReveal>

      {hasActiveFilters && (
        <div className="container mx-auto px-4 md:px-6 pb-2">
          <div className="rounded-2xl border border-border bg-card p-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Active filters:</span>{" "}
              {searchTerm.trim() && <span>Search “{searchTerm.trim()}” </span>}
              {selectedAge && <span>• Age {selectedAge} years </span>}
              {selectedTimeSlot && <span>• {selectedTimeSlot}</span>}
            </p>
            <button
              onClick={resetFilters}
              className="self-start md:self-auto rounded-lg bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              Reset filters
            </button>
          </div>
        </div>
      )}

      {courseSections.map((section) => (
        <ScrollReveal key={section.title}>
          <CourseSection
            title={section.title}
            emoji={section.emoji}
            subtitle={section.subtitle}
            courses={filteredCourses.filter(section.filter)}
          />
        </ScrollReveal>
      ))}

      <ScrollReveal>
        <TopTeachers />
      </ScrollReveal>

      <ScrollReveal>
        <CourseSection
          title="Trending this week"
          emoji="🔥"
          subtitle="Fast-moving classes parents are enrolling in right now"
          courses={filteredCourses.filter((course) => course.rating >= 4.8)}
        />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
