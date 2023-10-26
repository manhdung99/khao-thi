import Lesson from "@/components/type/lesson";
export default interface Unit {
  ID: string;
  Name: string;
  TotalLessons: number;
  Lessons: Array<Lesson> | null;
}
