import { Question, GetOptionStyle } from "../data/quiz/index.types";
import { toast } from "./toast";
import { History } from 'history';
import { UserContextType } from "../context/user.context";
import axios, { AxiosError } from "axios";

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

export const getErrorMessage = (error:  Error | AxiosError): String => {
  let message;
  
  if (axios.isAxiosError(error))  
    message = error?.response?.data?.message
  
  message = message || error?.message || 'Some error occurred. Try again after some time.';

  return message;
};

export const getOptionStyle = ({
  showAnswers,
  userSelectedAnswerIndex,
  currentOptionIndex,
  isCorrectAnswer,
}: GetOptionStyle): string => {
  let style = "";

  if (!showAnswers) return style;
  if (isCorrectAnswer) {
    style = "success";
  }
  if (userSelectedAnswerIndex === currentOptionIndex && !isCorrectAnswer) {
    style = "danger";
  }

  return style;
};