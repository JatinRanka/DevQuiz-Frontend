import { useState } from "react";
import { useQuizContext } from "../../context/quiz.context";
import { quiz } from "../../data/quiz";
import { Question } from "../../data/quiz/index.types";

const QuestionComponent = ({
  currentQuestion,
}: {
  currentQuestion: Question;
}) => {
  return (
    <div>
      <h4>{currentQuestion.questionText}</h4>
      {currentQuestion.options.map((option) => {
        return (
          <p style={{ border: "solid 0.5px black", margin: "0.5rem" }}>
            {option.text}
          </p>
        );
      })}
    </div>
  );
};

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { state, dispatch } = useQuizContext();

  return (
    <div>
      <QuestionComponent
        currentQuestion={quiz.questions[currentQuestionIndex]}
      />

      {currentQuestionIndex !== quiz.questions.length - 1 && (
        <button
          onClick={() => {
            setCurrentQuestionIndex(
              (currentQuestionIndex) => currentQuestionIndex + 1
            );
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Quiz;
