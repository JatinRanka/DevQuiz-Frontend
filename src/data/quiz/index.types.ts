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
