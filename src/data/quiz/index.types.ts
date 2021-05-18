export type Option = {
  text: string;
  isRight: boolean;
};

export type Question = {
  questionText: string;
  points: number;
  options: Option[];
  negativePoints?: number;
};

export type Quiz = {
  quizName: string;
  playTime: string;
  questions: Question[];
};
