import courseCoding from "@/assets/course-coding.jpg";
import courseSpeaking from "@/assets/course-speaking.jpg";
import courseChess from "@/assets/course-chess.jpg";
import courseRobotics from "@/assets/course-robotics.jpg";

const CATEGORIES = [
  { name: "Coding", image: courseCoding, color: "border-primary bg-primary/5" },
  { name: "Public Speaking", image: courseSpeaking, color: "border-orange bg-orange/5" },
  { name: "Chess", image: courseChess, color: "border-green bg-green/5" },
  { name: "Homework Help", image: courseRobotics, color: "border-pink bg-pink/5" },
  { name: "App Building", image: courseCoding, color: "border-accent bg-accent/10" },
];

const PopularCategories = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Popular Categories 🎨
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-10">
          Pick what you love most! These categories have everything you need to learn something awesome
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className={`flex flex-col items-center gap-3 p-4 rounded-2xl border-2 ${cat.color} hover:shadow-md transition-all cursor-pointer group`}
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="text-sm font-semibold text-foreground">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
