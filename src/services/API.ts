import { Difficulty, IQuestion, QuestionType } from "../interfaces/IQuestion";
import { suffleArray } from "../utils/utils";

/*export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};*/

export type QuestionState = IQuestion & { answers: string[] };

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  type: QuestionType
) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  const data = await (await fetch(endPoint)).json();
  return data.results.map((question: IQuestion) => ({
    ...question,
    answers: suffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
