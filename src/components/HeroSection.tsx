import { Search, Star } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="relative min-h-[500px] md:min-h-[560px]" style={{ background: "var(--hero-gradient)" }}>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/30 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-light-purple/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 py-12 md:py-16">
          {/* Left content */}
          <div className="flex-1 text-primary-foreground z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium">500+ Courses</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-4">
              Learn a New Skill
              <br />
              <span className="text-accent">Everyday, Anytime,</span>
              <br />
              and Anywhere.
            </h1>
            <div className="flex items-center bg-primary-foreground rounded-full p-1.5 pl-4 max-w-md mt-8 mx-auto md:mx-0">
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
            <div className="flex items-center gap-2 mt-6 justify-center md:justify-start">
              <div className="flex items-center gap-1 bg-primary-foreground/15 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-semibold">4.9</span>
                <span className="text-xs opacity-80">Rating</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 relative z-10 hidden md:block">
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground rounded-2xl px-4 py-2 text-center z-20">
              <span className="text-lg font-bold">10k+</span>
              <br />
              <span className="text-xs font-medium">Happy Kids</span>
            </div>
            <img
              src={heroImage}
              alt="Children learning together"
              className="w-full max-w-lg rounded-3xl object-cover shadow-2xl ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
