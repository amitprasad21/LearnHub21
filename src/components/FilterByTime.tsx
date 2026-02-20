import { useState } from "react";
import { Sun, Sunset, Moon, CloudMoon } from "lucide-react";

const TIME_SLOTS = [
  { label: "Morning", time: "6 AM – 12 PM", icon: Sun, color: "border-accent bg-accent/10 text-accent-foreground" , activeColor: "border-accent bg-accent text-accent-foreground" },
  { label: "Afternoon", time: "12 PM – 5 PM", icon: Sunset, color: "border-orange bg-orange/10 text-foreground", activeColor: "border-orange bg-orange text-primary-foreground" },
  { label: "Evening", time: "5 PM – 9 PM", icon: CloudMoon, color: "border-pink bg-pink/10 text-foreground", activeColor: "border-pink bg-pink text-primary-foreground" },
  { label: "Late Evening", time: "9 PM – 12 AM", icon: Moon, color: "border-primary bg-primary/10 text-foreground", activeColor: "border-primary bg-primary text-primary-foreground" },
];

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
