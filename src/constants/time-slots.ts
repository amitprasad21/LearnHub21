import { Sun, Sunset, Moon, CloudMoon, LucideIcon } from "lucide-react";

export interface TimeSlot {
  label: string;
  time: string;
  icon: LucideIcon;
  color: string;
  activeColor: string;
}

export const TIME_SLOTS: TimeSlot[] = [
  { label: "Morning", time: "6 AM – 12 PM", icon: Sun, color: "border-accent bg-accent/10 text-accent-foreground", activeColor: "border-accent bg-accent text-accent-foreground" },
  { label: "Afternoon", time: "12 PM – 5 PM", icon: Sunset, color: "border-orange bg-orange/10 text-foreground", activeColor: "border-orange bg-orange text-primary-foreground" },
  { label: "Evening", time: "5 PM – 9 PM", icon: CloudMoon, color: "border-pink bg-pink/10 text-foreground", activeColor: "border-pink bg-pink text-primary-foreground" },
  { label: "Late Evening", time: "9 PM – 12 AM", icon: Moon, color: "border-primary bg-primary/10 text-foreground", activeColor: "border-primary bg-primary text-primary-foreground" },
];
