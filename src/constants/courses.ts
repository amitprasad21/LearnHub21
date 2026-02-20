import courseRobotics from "@/assets/course-robotics.jpg";
import courseCoding from "@/assets/course-coding.jpg";
import courseChess from "@/assets/course-chess.jpg";
import courseSpeaking from "@/assets/course-speaking.jpg";

export interface Course {
  id: string;
  image: string;
  title: string;
  description: string;
  rating: number;
  learners: string;
  language: string;
  level: string;
  classes: number;
  ageRange: string;
  originalPrice: number;
  salePrice: number;
  badge?: string;
  teacher: { name: string; subject: string; rating: number };
  syllabus: string[];
}

export const ALL_COURSES: Course[] = [
  {
    id: "robotics-summer-camp",
    image: courseRobotics,
    title: "Summer robotics camp: fun projects with Arduino, TinkerCAD coding and 3D printing",
    description: "Build circuits & smart projects like alarms, weather stations, etc. This hands-on course teaches kids how to combine hardware and software to create real-world projects. Students will learn Arduino programming, 3D design with TinkerCAD, and basic electronics.",
    rating: 4.9,
    learners: "200+",
    language: "English",
    level: "Intermediate",
    classes: 4,
    ageRange: "7-10 yrs",
    originalPrice: 299,
    salePrice: 45,
    badge: "Selling fast",
    teacher: { name: "Anita Sharma", subject: "Robotics & STEM", rating: 4.9 },
    syllabus: ["Introduction to Arduino", "Basic Circuits & Sensors", "TinkerCAD 3D Design", "Final Smart Project"],
  },
  {
    id: "creative-coding-scratch",
    image: courseCoding,
    title: "Creative coding for kids: build your first game with Scratch",
    description: "Learn programming fundamentals through fun game building exercises. Students will create their own interactive stories, animations, and games while learning computational thinking and problem-solving skills.",
    rating: 4.8,
    learners: "350+",
    language: "English",
    level: "Beginner",
    classes: 6,
    ageRange: "5-8 yrs",
    originalPrice: 399,
    salePrice: 59,
    teacher: { name: "Rahul Verma", subject: "Coding & Game Dev", rating: 4.8 },
    syllabus: ["Meet Scratch", "Sprites & Motion", "Events & Loops", "Conditionals", "Variables & Score", "Final Game Project"],
  },
  {
    id: "chess-masterclass",
    image: courseChess,
    title: "Chess masterclass: strategy and tactics for young minds",
    description: "Master openings, tactics and endgame strategies with expert coaches. This comprehensive course covers everything from basic rules to advanced positional play, helping young players develop strategic thinking skills.",
    rating: 4.9,
    learners: "150+",
    language: "English",
    level: "Beginner",
    classes: 8,
    ageRange: "6-12 yrs",
    originalPrice: 499,
    salePrice: 79,
    teacher: { name: "Arjun Nair", subject: "Chess Strategy", rating: 4.7 },
    syllabus: ["Chess Basics & Rules", "Opening Principles", "Tactical Patterns", "Pin & Fork", "Discovered Attack", "Endgame Basics", "Positional Play", "Tournament Prep"],
  },
  {
    id: "public-speaking",
    image: courseSpeaking,
    title: "Public speaking & communication skills for confident kids",
    description: "Build confidence, learn storytelling, and present like a pro. This course transforms shy speakers into confident communicators through interactive exercises, storytelling techniques, and regular practice sessions.",
    rating: 4.7,
    learners: "180+",
    language: "English",
    level: "All Levels",
    classes: 5,
    ageRange: "8-14 yrs",
    originalPrice: 349,
    salePrice: 55,
    badge: "New",
    teacher: { name: "Priya Patel", subject: "Public Speaking", rating: 4.9 },
    syllabus: ["Finding Your Voice", "Storytelling Techniques", "Body Language", "Handling Stage Fright", "Final Presentation"],
  },
  {
    id: "advanced-robotics-iot",
    image: courseRobotics,
    title: "Advanced robotics: IoT projects with sensors and motors",
    description: "Create smart home projects and learn about Internet of Things. Dive deep into sensor integration, motor control, and wireless communication to build sophisticated IoT devices.",
    rating: 4.9,
    learners: "120+",
    language: "English",
    level: "Advanced",
    classes: 6,
    ageRange: "10-15 yrs",
    originalPrice: 599,
    salePrice: 99,
    teacher: { name: "Anita Sharma", subject: "Robotics & STEM", rating: 4.9 },
    syllabus: ["IoT Fundamentals", "Advanced Sensors", "Motor Control", "Wireless Communication", "Smart Home Project", "Final Showcase"],
  },
];
