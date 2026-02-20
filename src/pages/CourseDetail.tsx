import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Clock, Users, ArrowLeft, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import courseRobotics from "@/assets/course-robotics.jpg";
import courseCoding from "@/assets/course-coding.jpg";
import courseChess from "@/assets/course-chess.jpg";
import courseSpeaking from "@/assets/course-speaking.jpg";

const ALL_COURSES = [
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

export { ALL_COURSES };

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = ALL_COURSES.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 text-center">
          <h1 className="text-2xl font-bold text-foreground">Course not found</h1>
          <Button onClick={() => navigate("/")} className="mt-4">Go Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-72 md:h-96 object-cover" />
          </div>

          {/* Info */}
          <div>
            {course.badge && (
              <span className="inline-block bg-orange text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">{course.badge}</span>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{course.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded-full">{course.language}</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{course.level}</span>
              <span className="text-xs bg-green/10 text-green px-2 py-1 rounded-full">{course.classes} classes</span>
              <span className="text-xs bg-pink/10 text-pink px-2 py-1 rounded-full">{course.ageRange}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="font-semibold">{course.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Users className="w-4 h-4" /> {course.learners} learners
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{course.description}</p>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-muted-foreground line-through text-lg">₹{course.originalPrice}</span>
              <span className="text-3xl font-bold text-foreground">₹{course.salePrice}</span>
            </div>
            <Button size="lg" className="w-full md:w-auto rounded-full px-10">
              Enroll Now
            </Button>
          </div>
        </div>

        {/* Teacher & Syllabus */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-surface-bg rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-primary" /> Instructor</h3>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                {course.teacher.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-foreground">{course.teacher.name}</p>
                <p className="text-sm text-muted-foreground">{course.teacher.subject}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-accent text-accent" />
                  <span className="text-xs font-medium">{course.teacher.rating}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-bg rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" /> Syllabus</h3>
            <ol className="space-y-2">
              {course.syllabus.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
