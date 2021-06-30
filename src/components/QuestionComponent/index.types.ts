import { Question } from "../../data/quiz/index.types";

export type GetOptionStyle = {
  showAnswers: boolean;
  userSelectedAnswerIndex: number;
  currentOptionIndex: number;
  isCorrectAnswer: boolean;
};

export type QuestionComponentType = {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
};