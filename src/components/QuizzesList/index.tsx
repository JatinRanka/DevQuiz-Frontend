import React from "react";
import "./index.scss";

let listOfQuizes = [1, 2, 3];

const QuizzesList = () => {
  return (
    <div id="quizzes-list">
      {listOfQuizes.map((quiz, index) => {
        return (
          <div className={`quiz shadow-xl bg-color-${index % 3}`} key={index}>
            <p className="heading-4 bold">Quiz name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing . </p>
          </div>
        );
      })}
    </div>
  );
};

export default QuizzesList;
