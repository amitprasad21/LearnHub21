import iconCoding from "@/assets/icon-coding.png";
import iconSpeaking from "@/assets/icon-speaking.png";
import iconChess from "@/assets/icon-chess.png";
import iconHomework from "@/assets/icon-homework.png";

export interface Category {
  name: string;
  icon: string;
  color: string;
  accent: string;
  label: string;
}

export const CATEGORIES: Category[] = [
  { name: "Coding", icon: iconCoding, color: "border-primary bg-primary/10", accent: "bg-primary", label: "Coding" },
  { name: "Public Speaking", icon: iconSpeaking, color: "border-orange bg-orange/10", accent: "bg-orange", label: "Public speaking" },
  { name: "Chess", icon: iconChess, color: "border-muted-foreground bg-muted", accent: "bg-muted-foreground", label: "Chess" },
  { name: "Home Work Help", icon: iconHomework, color: "border-pink bg-pink/10", accent: "bg-pink", label: "Home work help" },
  { name: "App Building", icon: iconCoding, color: "border-accent bg-accent/10", accent: "bg-accent", label: "App building" },
];
