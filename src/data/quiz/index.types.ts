export type Option = {
  text: string;
  isRight: boolean;
};

export type Question = {
  question: string;
  points: number;
  options: Option[];
  negativePoint?: number;
};

export type Quiz = {
  quizName: string;
  playTime: string;
  questions: Question[];
};
