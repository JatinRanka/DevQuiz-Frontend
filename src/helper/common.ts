import { Question } from "../data/quiz/index.types";

export const isUserLoggedIn = (): boolean => {
  return localStorage.getItem("userId") ? true : false;
};

export const getUserId = () => {
  return localStorage.getItem("userId");
}

export const calcluateScore = ({
  questions,
}: {
  questions: Question[];
}): { totalUserScore: number; totalPossibleScore: number } => {
  let totalUserScore = 0,
    totalPossibleScore = 0;

  questions.forEach((question) => {
    totalPossibleScore += question.points;

    if (question.userSelectedAnswerIndex !== undefined) {
      if (question.options[question.userSelectedAnswerIndex].isRight) {
        totalUserScore += question.points;
      } else {
        question.negativePoints &&
          (totalPossibleScore -= question.negativePoints);
      }
    }
  });

  return {
    totalUserScore,
    totalPossibleScore,
  };
};