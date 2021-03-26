export type Category = string;
export type Question = string;
export type Answer = string;

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export enum QuestionType {
  MULTIPLE = "multiple",
  TRUEORFALSE = "boolean",
}

export interface IQuestion {
  category: Category;
  question: Question;
  correct_answer: Answer;
  incorrect_answers: Answer[];
  difficulty: Difficulty;
  type: QuestionType;
}
