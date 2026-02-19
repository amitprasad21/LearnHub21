import { useState } from "react";

const AGE_RANGES = [
  "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10",
  "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20",
];

const PILL_COLORS = [
  "bg-accent border-accent",
  "bg-orange/10 border-orange",
  "bg-pink/10 border-pink",
  "bg-green/10 border-green",
  "bg-light-purple/20 border-primary",
  "bg-accent border-accent",
  "bg-orange/10 border-orange",
  "bg-pink/10 border-pink",
  "bg-green/10 border-green",
  "bg-light-purple/20 border-primary",
  "bg-accent border-accent",
  "bg-orange/10 border-orange",
  "bg-pink/10 border-pink",
  "bg-green/10 border-green",
  "bg-light-purple/20 border-primary",
  "bg-accent border-accent",
  "bg-orange/10 border-orange",
  "bg-pink/10 border-pink",
  "bg-green/10 border-green",
];

const SELECTED_COLORS = [
  "bg-accent border-accent text-accent-foreground",
  "bg-orange border-orange text-primary-foreground",
  "bg-pink border-pink text-primary-foreground",
  "bg-green border-green text-primary-foreground",
  "bg-primary border-primary text-primary-foreground",
  "bg-accent border-accent text-accent-foreground",
  "bg-orange border-orange text-primary-foreground",
  "bg-pink border-pink text-primary-foreground",
  "bg-green border-green text-primary-foreground",
  "bg-primary border-primary text-primary-foreground",
  "bg-accent border-accent text-accent-foreground",
  "bg-orange border-orange text-primary-foreground",
  "bg-pink border-pink text-primary-foreground",
  "bg-green border-green text-primary-foreground",
  "bg-primary border-primary text-primary-foreground",
  "bg-accent border-accent text-accent-foreground",
  "bg-orange border-orange text-primary-foreground",
  "bg-pink border-pink text-primary-foreground",
  "bg-green border-green text-primary-foreground",
];

const AgeSelection = () => {
  const [selected, setSelected] = useState(6); // default 7-8

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          How Old Are You? 🎯
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-8">
          Pick your age and find the perfect courses just for you! ✨
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
          {AGE_RANGES.map((range, i) => (
            <button
              key={range}
              onClick={() => setSelected(i)}
              className={`flex flex-col items-center px-3 py-2 rounded-xl border-2 transition-all text-xs font-medium hover:scale-105 ${
                selected === i ? SELECTED_COLORS[i] : PILL_COLORS[i]
              }`}
            >
              <span className="font-semibold text-sm">{range}</span>
              <span className="opacity-70">Years</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeSelection;
