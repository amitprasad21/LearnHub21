import { Search, Star, BookOpen } from "lucide-react";
import studentBoy from "@/assets/student-boy.png";
import studentGirl from "@/assets/student-girl.png";

const HeroSection = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Compact banner — fixed height matching image 1 */}
      <div
        className="relative h-[220px] md:h-[260px] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(120deg, hsl(268,55%,32%) 0%, hsl(258,52%,40%) 100%)" }}
      >
        {/* Glow */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-light-purple/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left student + badges */}
        <div className="hidden md:block absolute left-0 bottom-0 h-full w-52 lg:w-64 z-10">
          {/* 500+ Courses badge */}
          <div className="absolute top-6 left-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-3 py-1.5 z-20 shadow-lg flex items-center gap-1.5">
            <div>
              <span className="text-primary-foreground text-xs font-bold block leading-none">500+</span>
              <span className="text-primary-foreground/70 text-[9px]">Courses</span>
            </div>
          </div>
          {/* 4.9 Rating badge */}
          <div className="absolute bottom-6 left-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-3 py-1.5 z-20 shadow-lg flex items-center gap-1.5">
            <Star className="w-3 h-3 fill-accent text-accent shrink-0" />
            <div>
              <span className="text-primary-foreground text-xs font-bold block leading-none">4.9</span>
              <span className="text-primary-foreground/70 text-[9px]">Rating</span>
            </div>
          </div>
          <img
            src={studentBoy}
            alt="Student boy with magnifying glass"
            className="absolute bottom-0 left-6 h-[90%] w-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Center content */}
        <div className="w-full text-primary-foreground text-center px-4 md:px-0 md:mx-auto z-10 relative">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-1">
            Learn a New Skill
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-accent mb-5">
            Everyday, Anytime, and Anywhere.
          </p>

          {/* Search bar */}
          <div className="flex items-center bg-background rounded-full p-1 pl-4 max-w-sm md:max-w-md mx-auto shadow-xl">
            <Search className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="flex-1 text-xs md:text-sm text-foreground bg-transparent outline-none placeholder:text-muted-foreground min-w-0"
            />
            <button className="bg-primary text-primary-foreground text-xs md:text-sm font-semibold px-5 py-2 rounded-full hover:brightness-110 transition-all shrink-0">
              Search
            </button>
          </div>
        </div>

        {/* Right student + badge */}
        <div className="hidden md:block absolute right-0 bottom-0 h-full w-44 lg:w-52 z-10">
          {/* 10k+ Happy Kids badge */}
          <div className="absolute top-6 right-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-3 py-1.5 z-20 shadow-lg flex items-center gap-1.5">
            <BookOpen className="w-3 h-3 text-accent shrink-0" />
            <div>
              <span className="text-primary-foreground text-xs font-bold block leading-none">10k+</span>
              <span className="text-primary-foreground/70 text-[9px]">Happy Kids</span>
            </div>
          </div>
          <img
            src={studentGirl}
            alt="Student girl reading a book"
            className="absolute bottom-0 right-4 h-[85%] w-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
