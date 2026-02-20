import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Users, ArrowLeft, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ALL_COURSES } from "@/constants";

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
          <div className="rounded-2xl overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-72 md:h-96 object-cover" />
          </div>

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
