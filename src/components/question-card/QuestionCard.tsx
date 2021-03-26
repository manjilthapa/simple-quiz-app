import React from "react";
import { IAnswerObject } from "../../interfaces/IAnswerObject";
import { Answer, Question } from "../../interfaces/IQuestion";
// styles
import { GameContainer, ButtonGameContainer } from "./QuestionCard.styles";

type Props = {
  question: Question;
  answers: Answer[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: IAnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <GameContainer>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonGameContainer
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonGameContainer>
      ))}
    </div>
  </GameContainer>
);

export default QuestionCard;
