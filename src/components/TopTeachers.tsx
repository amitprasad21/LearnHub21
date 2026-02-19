import { Star } from "lucide-react";

const TEACHERS = [
  { name: "Anita Sharma", subject: "Robotics & STEM", avatar: "AS", rating: 4.9 },
  { name: "Rahul Verma", subject: "Coding & Game Dev", avatar: "RV", rating: 4.8 },
  { name: "Priya Patel", subject: "Public Speaking", avatar: "PP", rating: 4.9 },
  { name: "Arjun Nair", subject: "Chess Strategy", avatar: "AN", rating: 4.7 },
  { name: "Meera Gupta", subject: "Art & Creativity", avatar: "MG", rating: 4.8 },
];

const TEACHER_COLORS = [
  "bg-primary text-primary-foreground",
  "bg-orange text-primary-foreground",
  "bg-pink text-primary-foreground",
  "bg-green text-primary-foreground",
  "bg-accent text-accent-foreground",
];

const TopTeachers = () => {
  return (
    <section className="py-12 md:py-16 bg-surface-bg">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Learn from Top Teachers 👩‍🏫
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-10">
          Expert instructors who make learning fun and engaging for every child
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {TEACHERS.map((teacher, i) => (
            <div key={teacher.name} className="flex flex-col items-center gap-3 group cursor-pointer">
              <div className={`w-20 h-20 rounded-full ${TEACHER_COLORS[i]} flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform shadow-md`}>
                {teacher.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{teacher.name}</p>
                <p className="text-xs text-muted-foreground">{teacher.subject}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-accent text-accent" />
                  <span className="text-xs font-medium">{teacher.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTeachers;
