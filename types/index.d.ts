// Define the levels of courses
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

// Define the structure for a course
export interface Course {
  title: string;
  description: string;
  link: string;
}

// Define the structure for a collection of courses at different levels
export interface CoursesByLevel {
  Beginner: Course[];
  Intermediate: Course[];
  Advanced: Course[];
}
