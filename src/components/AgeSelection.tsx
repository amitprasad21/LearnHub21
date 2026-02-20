import { useState } from "react";
import { AGE_RANGES, PILL_COLORS, SELECTED_COLORS } from "@/constants";

const AgeSelection = () => {
  const [selected, setSelected] = useState(6);

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
