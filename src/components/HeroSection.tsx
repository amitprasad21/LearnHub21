import { Search, Star, BookOpen } from "lucide-react";
import studentBoy from "@/assets/student-boy.png";
import studentGirl from "@/assets/student-girl.png";

const HeroSection = () => {
  return (
    /* pt-16 = navbar offset; overflow-visible so students can peek above the banner */
    <section className="relative pt-16">
      <div
        className="relative flex items-center"
        style={{
          background: "hsl(268, 52%, 36%)",
          minHeight: "230px",
          overflow: "visible",
        }}
      >
        {/* Left column — boy + badges, students overflow the top */}
        <div className="hidden md:flex flex-col absolute left-0 bottom-0 z-10" style={{ width: "220px" }}>
          {/* 500+ badge top */}
          <div
            className="absolute bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl px-3 py-2 z-20 shadow-lg"
            style={{ top: "-30px", left: "16px" }}
          >
            <span className="text-primary-foreground text-sm font-bold block leading-none">500+</span>
            <span className="text-primary-foreground/70 text-[10px]">Courses</span>
          </div>

          {/* Student boy image — overflows above the banner */}
          <img
            src={studentBoy}
            alt="Student boy with magnifying glass"
            className="object-contain object-bottom drop-shadow-2xl w-full"
            style={{ height: "270px", marginBottom: 0 }}
          />

          {/* 4.9 Rating badge bottom */}
          <div
            className="absolute bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl px-3 py-2 z-20 shadow-lg flex items-center gap-2"
            style={{ bottom: "12px", left: "16px" }}
          >
            <Star className="w-3.5 h-3.5 fill-accent text-accent shrink-0" />
            <div>
              <span className="text-primary-foreground text-sm font-bold block leading-none">4.9</span>
              <span className="text-primary-foreground/70 text-[10px]">Rating</span>
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="flex-1 text-primary-foreground text-center z-10 relative py-10 px-6 md:px-0 md:mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold leading-tight mb-1">
            Learn a New Skill
          </h1>
          <p className="text-xl md:text-2xl lg:text-[2rem] font-bold text-accent mb-6">
            Everyday, Anytime, and Anywhere.
          </p>

          {/* Search bar */}
          <div className="flex items-center bg-background rounded-full py-1.5 pl-4 pr-1.5 max-w-xs md:max-w-md mx-auto shadow-xl">
            <Search className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="flex-1 text-xs md:text-sm text-foreground bg-transparent outline-none placeholder:text-muted-foreground min-w-0"
            />
            <button
              className="text-primary-foreground text-xs md:text-sm font-semibold px-5 py-2 rounded-full hover:brightness-110 transition-all shrink-0"
              style={{ background: "linear-gradient(135deg, hsl(285,80%,55%), hsl(260,80%,60%))" }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Right column — girl overflows top and is flush right */}
        <div className="hidden md:flex flex-col absolute right-0 bottom-0 z-10" style={{ width: "240px" }}>
          {/* 10k+ badge top right */}
          <div
            className="absolute bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl px-3 py-2 z-20 shadow-lg flex items-center gap-2"
            style={{ top: "-24px", right: "16px" }}
          >
            <BookOpen className="w-3.5 h-3.5 text-accent shrink-0" />
            <div>
              <span className="text-primary-foreground text-sm font-bold block leading-none">10k+</span>
              <span className="text-primary-foreground/70 text-[10px]">Happy Kids</span>
            </div>
          </div>

          {/* Student girl — taller, flush to right edge */}
          <img
            src={studentGirl}
            alt="Student girl reading a book"
            className="object-contain object-bottom drop-shadow-2xl w-full self-end"
            style={{ height: "290px", marginBottom: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
