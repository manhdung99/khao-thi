import Media from "./media";
export default interface PartQuestion {
  ID: string;
  Description: string | null;
  Media: Media | null;
  Title: string;
  Type: string;
  Questions: Array<any> | null;
}