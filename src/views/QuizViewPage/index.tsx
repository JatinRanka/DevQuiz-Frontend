import React, { useEffect, useState } from "react";
import { Oval } from "react-loading-icons";
import { QuestionComponent } from "../../components";
import { useQuizContext } from "../../context/quiz.context";
import { useParams } from "react-router";
import axios from "axios";

import "./index.scss";
import { Quiz } from "../../data/quiz/index.types";

const LoadingComponent = () => {
  return (
    <div className="loading-icon-container">
      <Oval className="loading-icon" stroke="#000000" />
    </div>
  );
};

const QuizViewPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useQuizContext();
  const { quizId }: { quizId: string } = useParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [showScoreBoard, setShowScoreBoard] = useState<boolean>(false);

  const fetchQuiz = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "http://localhost:5000/api/quizzes/60a8ed855d84b7291faabdbd"
      );
      const { quiz }: { quiz: Quiz } = data;
      setQuiz(quiz);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const incrementQuestionIndex = () => {
    setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  if (!quiz)
    return (
      <div>
        <p className="heading-4">Quiz not found</p>
      </div>
    );

  return (
    <div id="quiz-view-page">
      {isLoading ? (
        <LoadingComponent />
      ) : showScoreBoard ? (
        <span>score</span>
      ) : (
        <>
          <QuestionComponent
            question={quiz.questions[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={quiz.questions.length}
          />
          <div className="action-btns">
            {currentQuestionIndex < quiz.questions.length - 1 ? (
              <button
                className="btn primary-btn"
                onClick={incrementQuestionIndex}
              >
                Next
                <span className="icon material-icons"> arrow_forward_ios </span>
              </button>
            ) : (
              <button
                className="btn primary-btn"
                onClick={() => {
                  setShowScoreBoard(true);
                }}
              >
                View Score
              </button>
            )}{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizViewPage;
