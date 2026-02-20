import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgeSelection from "@/components/AgeSelection";
import CourseSection from "@/components/CourseSection";
import TopTeachers from "@/components/TopTeachers";
import PopularCategories from "@/components/PopularCategories";
import FilterByTime from "@/components/FilterByTime";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <AgeSelection />
      </ScrollReveal>
      <ScrollReveal>
        <FilterByTime />
      </ScrollReveal>
      <ScrollReveal>
        <CourseSection
          title="New Launches"
          emoji="⭐"
          subtitle="Our most loved courses that kids absolutely adore!"
        />
      </ScrollReveal>
      <ScrollReveal>
        <CourseSection
          title="Featured Courses"
          emoji="🌟"
          subtitle="Our most loved courses that kids absolutely adore!"
        />
      </ScrollReveal>
      <ScrollReveal>
        <TopTeachers />
      </ScrollReveal>
      <ScrollReveal>
        <PopularCategories />
      </ScrollReveal>
      <ScrollReveal>
        <CourseSection
          title="Webinar starting within 24 hrs"
          emoji="🔴"
          subtitle="Live sessions starting soon — don't miss out!"
        />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
