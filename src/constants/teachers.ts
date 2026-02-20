import studentBoy from "@/assets/student-boy.png";
import studentGirl from "@/assets/student-girl.png";

export interface Teacher {
  name: string;
  subject: string;
  rating: number;
  qualification: string;
  experience: string;
  students: string;
  expertise: string;
  image: string;
}

export const TEACHERS: Teacher[] = [
  {
    name: "Andy Brew",
    subject: "M.Sc, B.Ed",
    rating: 4.9,
    qualification: "M.Sc, B.Ed",
    experience: "15+ Years",
    students: "1000+ Students",
    expertise: "Computer science",
    image: studentBoy,
  },
  {
    name: "Andy Brew",
    subject: "M.Sc, B.Ed",
    rating: 4.9,
    qualification: "M.Sc, B.Ed",
    experience: "15+ Years",
    students: "1000+ Students",
    expertise: "English",
    image: studentGirl,
  },
  {
    name: "Andy Brew",
    subject: "M.Sc, B.Ed",
    rating: 4.8,
    qualification: "M.Sc, B.Ed",
    experience: "14+ Years",
    students: "1000+ Students",
    expertise: "Early educator",
    image: studentBoy,
  },
  {
    name: "Andy Brew",
    subject: "M.Sc, B.Ed",
    rating: 4.9,
    qualification: "M.Sc, B.Ed",
    experience: "15+ Years",
    students: "1000+ Students",
    expertise: "Coding",
    image: studentGirl,
  },
  {
    name: "Andy Brew",
    subject: "M.Sc, B.Ed",
    rating: 4.7,
    qualification: "M.Sc, B.Ed",
    experience: "15+ Years",
    students: "1000+ Students",
    expertise: "Computer science",
    image: studentBoy,
  },
  {
    name: "Andy Brew",
    subject: "M.Sc, B.Ed",
    rating: 4.9,
    qualification: "M.Sc, B.Ed",
    experience: "15+ Years",
    students: "1000+ Students",
    expertise: "Computer science",
    image: studentGirl,
  },
];
