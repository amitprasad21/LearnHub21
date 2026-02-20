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
        <div className="container mx-auto px-4 pb-2 md:px-6">
          <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Active filters:</span>{" "}
              {searchTerm.trim() && <span>Search “{searchTerm.trim()}” </span>}
              {selectedAge && <span>• Age {selectedAge} years </span>}
              {selectedTimeSlot && <span>• {selectedTimeSlot}</span>}
            </p>
            <button
              onClick={resetFilters}
              className="self-start rounded-lg bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/80 md:self-auto"
            >
              Reset filters
            </button>
          </div>
        </div>
      )}

      <ScrollReveal>
        <CourseSection
          title="New Launches"
          emoji="⭐"
          subtitle="Our most loved courses that kids absolutely adore!"
          courses={filteredCourses.filter((course) => course.badge === "New" || course.badge === "Selling fast")}
        />
      </ScrollReveal>

      <ScrollReveal>
        <CourseSection
          title="Featured Courses"
          emoji="🌟"
          subtitle="Our most loved courses that kids absolutely adore!"
          courses={filteredCourses}
        />
      </ScrollReveal>

      <ScrollReveal>
        <TopTeachers />
      </ScrollReveal>

      <ScrollReveal>
        <CourseSection
          title="Webinar starting within 24 hrs"
          emoji="🔴"
          subtitle="Live sessions starting soon — don't miss out!"
          courses={filteredCourses.filter(
            (course) => course.timeSlot === "Evening" || course.timeSlot === "Late Evening",
          )}
        />
      </ScrollReveal>

      <ScrollReveal>
        <PopularCategories />
      </ScrollReveal>

      <ScrollReveal>
        <FilterByTime selectedTimeSlot={selectedTimeSlot} onSelectTimeSlot={setSelectedTimeSlot} />
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Index;
