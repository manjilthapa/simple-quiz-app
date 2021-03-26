import { Answer } from "../interfaces/IQuestion";

export const suffleArray = (array: Answer[]) =>
  [...array].sort(() => Math.random() - 0.5);
