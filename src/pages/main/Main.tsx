import React, { Fragment, useState } from "react";

import { fetchQuizQuestions, QuestionState } from "../../services/API";

import QuestionCard from "../../components/question-card/QuestionCard";

import { IAnswerObject } from "../../interfaces/IAnswerObject";
import { Difficulty, QuestionType } from "../../interfaces/IQuestion";

import { GlobalStyle, Wrapper } from "./Main.styles";

const TOTAL_QUESTIONS = 10;

const Main: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<IAnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      QuestionType.MULTIPLE
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user answer
      const answer = e.currentTarget.value;
      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // add score if answer is correct
      if (correct) {
        setScore((prev) => prev + 1);
      }

      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // move on to the next question if not the last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz</h1>
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <button className="start" onClick={startTrivia}>
            Start Game
          </button>
        )}
        {!gameOver && <p className="score">Score:{score}</p>}
        {loading && <p>Loading Questions ...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers && userAnswers[number]}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next question
          </button>
        ) : null}
      </Wrapper>
    </Fragment>
  );
};

export default Main;
