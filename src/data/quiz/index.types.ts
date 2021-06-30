export type Option = {
  text: string;
  isRight: boolean;
};

export type Question = {
  questionText: string;
  points: number;
  options: Option[];
  negativePoints?: number;
  userSelectedAnswerIndex?: number;
};

export type Quiz = {
  name: string;
  description: string;
  questions: Question[];
  _id: string;
  leaderboard?: any[];
};

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