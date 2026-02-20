export interface Teacher {
  name: string;
  subject: string;
  avatar: string;
  rating: number;
}

export const TEACHERS: Teacher[] = [
  { name: "Anita Sharma", subject: "Robotics & STEM", avatar: "AS", rating: 4.9 },
  { name: "Rahul Verma", subject: "Coding & Game Dev", avatar: "RV", rating: 4.8 },
  { name: "Priya Patel", subject: "Public Speaking", avatar: "PP", rating: 4.9 },
  { name: "Arjun Nair", subject: "Chess Strategy", avatar: "AN", rating: 4.7 },
  { name: "Meera Gupta", subject: "Art & Creativity", avatar: "MG", rating: 4.8 },
];

export const TEACHER_COLORS = [
  "bg-primary text-primary-foreground",
  "bg-orange text-primary-foreground",
  "bg-pink text-primary-foreground",
  "bg-green text-primary-foreground",
  "bg-accent text-accent-foreground",
];
