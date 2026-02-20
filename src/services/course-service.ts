import { type Course } from "@/constants";

export interface CourseFilters {
  searchTerm: string;
  selectedAge: string | null;
  selectedTimeSlot: Course["timeSlot"] | null;
}

const normalize = (value: string) => value.trim().toLowerCase();

const getAgeBounds = (value: string): [number, number] | null => {
  const matches = value.match(/(\d+)\s*-\s*(\d+)/);
  if (!matches) {
    return null;
  }

  return [Number(matches[1]), Number(matches[2])];
};

const courseMatchesSearch = (course: Course, searchTerm: string) => {
  if (!searchTerm) {
    return true;
  }

  const term = normalize(searchTerm);

  return [course.title, course.description, course.teacher.name, course.teacher.subject].some((value) =>
    normalize(value).includes(term),
  );
};

const courseMatchesAge = (course: Course, selectedAge: string | null) => {
  if (!selectedAge) {
    return true;
  }

  const selectedBounds = getAgeBounds(selectedAge);
  const courseBounds = getAgeBounds(course.ageRange);

  if (!selectedBounds || !courseBounds) {
    return false;
  }

  const [selectedMin, selectedMax] = selectedBounds;
  const [courseMin, courseMax] = courseBounds;

  return selectedMax >= courseMin && selectedMin <= courseMax;
};

const courseMatchesTimeSlot = (course: Course, selectedTimeSlot: Course["timeSlot"] | null) => {
  if (!selectedTimeSlot) {
    return true;
  }

  return course.timeSlot === selectedTimeSlot;
};

export const filterCourses = (courses: Course[], filters: CourseFilters) => {
  return courses.filter((course) => {
    return (
      courseMatchesSearch(course, filters.searchTerm) &&
      courseMatchesAge(course, filters.selectedAge) &&
      courseMatchesTimeSlot(course, filters.selectedTimeSlot)
    );
  });
};
