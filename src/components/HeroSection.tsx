import { Search, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import studentBoy from "@/assets/student-boy.png";
import studentGirl from "@/assets/student-girl.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="relative min-h-[500px] md:min-h-[560px]" style={{ background: "var(--hero-gradient)" }}>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/30 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-light-purple/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 flex items-center gap-0 py-12 md:py-16 relative">
          {/* Left image - Boy */}
          <div className="hidden md:block flex-shrink-0 z-10 relative">
            <div className="absolute top-2 left-2 bg-green text-primary-foreground rounded-2xl px-3 py-1.5 text-center z-20 shadow-lg">
              <span className="text-sm font-bold">500+</span>
              <br />
              <span className="text-[10px] font-medium">Courses</span>
            </div>
            <img
              src={studentBoy}
              alt="Student boy with magnifying glass"
              className="w-48 lg:w-56 h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Center content */}
          <div className="flex-1 text-primary-foreground z-10 text-center px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight mb-4">
              Learn a New Skill
              <br />
              <span className="text-accent">Everyday, Anytime,</span>
              <br />
              and Anywhere.
            </h1>
            <div className="flex items-center bg-primary-foreground rounded-full p-1.5 pl-4 max-w-md mt-6 mx-auto">
              <Search className="w-5 h-5 text-muted-foreground mr-2 shrink-0" />
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="flex-1 text-sm text-foreground bg-transparent outline-none placeholder:text-muted-foreground"
              />
              <button className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition-all shrink-0">
                Search
              </button>
            </div>
            <div className="flex items-center gap-2 mt-6 justify-center">
              <div className="flex items-center gap-1 bg-primary-foreground/15 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-semibold">4.9</span>
                <span className="text-xs opacity-80">Rating</span>
              </div>
            </div>
          </div>

          {/* Right image - Girl */}
          <div className="hidden md:block flex-shrink-0 z-10 relative">
            <div className="absolute top-2 right-2 bg-accent text-accent-foreground rounded-2xl px-3 py-1.5 text-center z-20 shadow-lg">
              <span className="text-sm font-bold">10k+</span>
              <br />
              <span className="text-[10px] font-medium">Happy Kids</span>
            </div>
            <img
              src={studentGirl}
              alt="Student girl reading a book"
              className="w-48 lg:w-56 h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
