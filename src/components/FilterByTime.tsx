import { useState } from "react";
import { TIME_SLOTS } from "@/constants";

const FilterByTime = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-12 md:py-16 bg-surface-bg">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Filter with Time ⏰
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-8">
          Choose a time slot that works best for your schedule
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {TIME_SLOTS.map((slot, i) => {
            const Icon = slot.icon;
            const isActive = selected === i;
            return (
              <button
                key={slot.label}
                onClick={() => setSelected(i)}
                className={`flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all hover:scale-105 ${
                  isActive ? slot.activeColor : slot.color
                }`}
              >
                <Icon className="w-7 h-7" />
                <span className="text-sm font-semibold">{slot.label}</span>
                <span className="text-xs opacity-70">{slot.time}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FilterByTime;
