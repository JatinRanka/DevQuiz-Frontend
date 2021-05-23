import React from "react";
import { useHistory } from "react-router";
import { Quiz } from "../../data/quiz/index.types";
import "./index.scss";

const QuizzesList = ({ quizzes }: { quizzes: Quiz[] }) => {
  const history = useHistory();

  return (
    <div id="quizzes-list">
      {quizzes.map((quiz, index) => {
        return (
          <div
            onClick={() => {
              history.push(`/quizzes/${quiz._id}`);
            }}
            className={`quiz shadow-xl bg-color-${index % 3}`}
            key={quiz._id}
          >
            <p className="heading-4 bold">{quiz.name}</p>
            <p>{quiz.description} </p>
          </div>
        );
      })}
    </div>
  );
};

export default QuizzesList;
