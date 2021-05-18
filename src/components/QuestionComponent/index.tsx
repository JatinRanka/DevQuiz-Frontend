import React from "react";
import { Question } from "../../data/quiz/index.types";
import "./index.scss";

const QuestionComponent = ({ question }: { question: Question }) => {
  return (
    <div id="question-component-container">
      <p className="heading-5">{question.questionText}</p>

      <div className="options-list">
        {question.options.map((option, index) => {
          return (
            <div className="option" key={index}>
              <p>{option.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionComponent;
