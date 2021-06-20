import React from "react";
import { useHistory } from "react-router";
import { useUsercontext } from "../../context/user.context";
import { Quiz } from "../../data/quiz/index.types";
import { toast } from "../../helper/toast";
import { Oval } from "react-loading-icons";
import "./index.scss";

const QuizzesList = ({
  quizzes,
  isQuizzesLoading,
}: {
  quizzes: Quiz[];
  isQuizzesLoading: Boolean;
}) => {
  const history = useHistory();
  const { isUserLoggedIn } = useUsercontext();

  const handleQuizClick = (event: any) => {
    try {
      if (!isUserLoggedIn) throw new Error("Login to view quiz");

      const quizId =
        event.target?.attributes?.getNamedItem("data-quiz-id")?.value;

      history.push(`/quizzes/${quizId}`);
    } catch (error) {
      toast({ type: "error", message: error.message });
    }
  };

  return (
    <div id="quizzes-list">
      {isQuizzesLoading ? (
        <div>
          <Oval className="loading-icon" stroke="#000000" />
        </div>
      ) : (
        <>
          {quizzes.map((quiz, index) => {
            return (
              <div
                onClick={handleQuizClick}
                data-quiz-id={quiz._id}
                className={`quiz shadow-xl bg-color-${index % 3}`}
                key={quiz._id}
              >
                <p className="heading-4 bold">{quiz.name}</p>
                <p>{quiz.description} </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default QuizzesList;
