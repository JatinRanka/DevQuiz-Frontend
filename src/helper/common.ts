import { Question } from "../data/quiz/index.types";
import { toast } from "./toast";
import { History } from 'history';
import { UserContextType } from "../context/user.context";

export const isUserLoggedIn = (): boolean => {
  return localStorage.getItem("userId") ? true : false;
};

export const getUserId = () => localStorage.getItem("userId");

export const getAuthorizationToken = () => localStorage.getItem("Authorization");

export const redirectToHomePage = (history: History) => history.push('/');

export const redirectToLoginPage = (history: History) => history.push('/login')

export const handleLogoutUser = (setIsUserLoggedIn: UserContextType["setIsUserLoggedIn"], history: History) => {
  localStorage.clear();
  setIsUserLoggedIn(false);
  redirectToHomePage(history);
  toast({type: 'success', message: 'Logout successful.'})
  
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