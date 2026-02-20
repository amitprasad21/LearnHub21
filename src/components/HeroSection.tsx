import { FormEvent, useEffect, useState } from "react";
import { Search, Star, BookOpen } from "lucide-react";
import studentBoy from "@/assets/student-boy.png";
import studentGirl from "@/assets/student-girl.png";

interface HeroSectionProps {
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
}

const HeroSection = ({ searchTerm, onSearch }: HeroSectionProps) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="relative flex h-[260px] items-center overflow-hidden md:h-[330px]"
        style={{ background: "linear-gradient(120deg, hsl(268,55%,32%) 0%, hsl(258,52%,40%) 100%)" }}
      >
        <div className="float-soft absolute left-[28%] top-4 hidden h-24 w-24 rounded-full bg-light-purple/15 blur-2xl md:block" />
        <div className="float-slow absolute right-[30%] top-10 hidden h-12 w-12 rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm md:block" />
        <div className="float-soft absolute left-[46%] bottom-8 hidden h-10 w-10 rounded-full bg-accent/30 md:block" />

        <div className="absolute bottom-0 left-0 z-10 hidden h-full w-56 md:block lg:w-72">
          <div className="float-soft absolute left-4 top-7 z-20 flex items-center gap-1.5 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 shadow-lg backdrop-blur-sm">
            <div>
              <span className="block text-xs font-bold leading-none text-primary-foreground">500+</span>
              <span className="text-[9px] text-primary-foreground/70">Courses</span>
            </div>
          </div>
          <div className="float-slow absolute bottom-8 left-3 z-20 flex items-center gap-1.5 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 shadow-lg backdrop-blur-sm">
            <Star className="h-3 w-3 shrink-0 fill-accent text-accent" />
            <div>
              <span className="block text-xs font-bold leading-none text-primary-foreground">4.9</span>
              <span className="text-[9px] text-primary-foreground/70">Rating</span>
            </div>
          </div>
          <img
            src={studentBoy}
            alt="Student boy with magnifying glass"
            className="absolute bottom-0 left-4 h-[95%] w-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        <div className="relative z-10 w-full px-4 text-center text-primary-foreground md:mx-auto md:px-0">
          <h1 className="mb-1 text-2xl font-bold leading-tight md:text-4xl">Learn a New Skill</h1>
          <p className="mb-5 text-xl font-bold text-accent md:text-4xl">Everyday, Anytime, and Anywhere.</p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-sm items-center rounded-full bg-background p-1 pl-4 shadow-xl md:max-w-xl"
          >
            <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="What do you want to learn today?"
              className="min-w-0 flex-1 bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-primary px-6 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110 md:text-sm"
            >
              Search
            </button>
          </form>
        </div>

        <div className="absolute bottom-0 right-0 z-10 hidden h-full w-56 md:block lg:w-72">
          <div className="float-soft absolute right-4 top-7 z-20 flex items-center gap-1.5 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 shadow-lg backdrop-blur-sm">
            <BookOpen className="h-3 w-3 shrink-0 text-accent" />
            <div>
              <span className="block text-xs font-bold leading-none text-primary-foreground">10k+</span>
              <span className="text-[9px] text-primary-foreground/70">Happy Kids</span>
            </div>
          </div>
          <img
            src={studentGirl}
            alt="Student girl reading a book"
            className="absolute bottom-0 right-0 h-[112%] w-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
