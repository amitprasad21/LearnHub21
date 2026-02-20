import { Star } from "lucide-react";
import { TEACHERS } from "@/constants";

const TopTeachers = () => {
  return (
    <section className="bg-surface-bg py-12 md:py-16">
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="mb-2 text-2xl font-bold text-foreground md:text-5xl">Learn from Top Teachers</h2>
        <p className="mb-10 text-sm text-muted-foreground md:text-2xl">
          Expert instructors who make learning fun and engaging for every child
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {TEACHERS.map((teacher, i) => (
            <div
              key={`${teacher.name}-${i}`}
              className="group relative rounded-2xl border border-border bg-card px-3 pb-3 pt-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -top-6 left-1/2 h-12 w-12 -translate-x-1/2 overflow-hidden rounded-full border-2 border-background shadow-md">
                <img src={teacher.image} alt={teacher.name} className="h-full w-full object-cover" />
              </div>
              <p className="text-sm font-semibold text-foreground">{teacher.name}</p>
              <p className="mt-1 text-[10px] text-muted-foreground">{teacher.qualification}</p>
              <p className="text-[10px] text-muted-foreground">{teacher.experience}</p>
              <p className="mb-2 text-[10px] text-muted-foreground">{teacher.students}</p>
              <div className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium text-foreground">
                <Star className="h-3 w-3 fill-accent text-accent" />
                <span>{teacher.expertise}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTeachers;
