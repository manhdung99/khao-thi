import Answer from "./answer";
import Media from "./media";
export default interface PartQuestion {
  ID: string;
  Content: string;
  Media: Media | null;
  CloneAnswers: string;
  Type: string;
  Answers: Array<Answer> | null;
}
