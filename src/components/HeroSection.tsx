import { Search, Star, BookOpen } from "lucide-react";
import studentBoy from "@/assets/student-boy.png";
import studentGirl from "@/assets/student-girl.png";

const HeroSection = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Deep purple background matching reference */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(268,60%,30%) 0%, hsl(258,55%,38%) 60%, hsl(268,60%,28%) 100%)" }}
      >
        {/* Subtle glow blobs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-light-purple/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-light-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex items-end gap-0">

            {/* Left image - Boy */}
            <div className="hidden md:flex flex-col flex-shrink-0 relative w-52 lg:w-64 self-end">
              {/* 500+ Courses badge - top left of boy */}
              <div className="absolute top-6 left-0 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-2 text-center z-20 shadow-lg">
                <span className="text-white text-sm font-bold block">500+</span>
                <span className="text-white/80 text-[10px] font-medium">Courses</span>
              </div>
              {/* 4.9 Rating badge - bottom left */}
              <div className="absolute bottom-16 left-0 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-2 z-20 shadow-lg flex items-center gap-2">
                <Star className="w-4 h-4 fill-accent text-accent shrink-0" />
                <div>
                  <span className="text-white text-sm font-bold block leading-none">4.9</span>
                  <span className="text-white/80 text-[10px]">Rating</span>
                </div>
              </div>
              <img
                src={studentBoy}
                alt="Student boy with magnifying glass"
                className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
              />
            </div>

            {/* Center content */}
            <div className="flex-1 text-primary-foreground z-10 text-center px-4 md:px-10 py-14 md:py-20">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-2">
                Learn a New Skill
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-8">
                Everyday, Anytime, and Anywhere.
              </p>

              {/* Search bar */}
              <div className="flex items-center bg-background rounded-full p-1.5 pl-5 max-w-lg mx-auto shadow-xl">
                <Search className="w-5 h-5 text-muted-foreground mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  className="flex-1 text-sm text-foreground bg-transparent outline-none placeholder:text-muted-foreground min-w-0"
                />
                <button className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition-all shrink-0">
                  Search
                </button>
              </div>
            </div>

            {/* Right image - Girl */}
            <div className="hidden md:flex flex-col flex-shrink-0 relative w-44 lg:w-56 self-end">
              {/* 10k+ Happy Kids badge - top right */}
              <div className="absolute top-6 right-0 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-2 text-center z-20 shadow-lg flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <span className="text-white text-sm font-bold block leading-none">10k+</span>
                  <span className="text-white/80 text-[10px]">Happy Kids</span>
                </div>
              </div>
              <img
                src={studentGirl}
                alt="Student girl reading a book"
                className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

