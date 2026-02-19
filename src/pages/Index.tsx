import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgeSelection from "@/components/AgeSelection";
import CourseSection from "@/components/CourseSection";
import TopTeachers from "@/components/TopTeachers";
import PopularCategories from "@/components/PopularCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AgeSelection />
      <CourseSection
        title="New Launches"
        emoji="⭐"
        subtitle="Our most loved courses that kids absolutely adore!"
      />
      <CourseSection
        title="Featured Courses"
        emoji="🌟"
        subtitle="Our most loved courses that kids absolutely adore!"
      />
      <TopTeachers />
      <PopularCategories />
      <CourseSection
        title="Webinar starting within 24 hrs"
        emoji="🔴"
        subtitle="Live sessions starting soon — don't miss out!"
      />
      <Footer />
    </div>
  );
};

export default Index;
