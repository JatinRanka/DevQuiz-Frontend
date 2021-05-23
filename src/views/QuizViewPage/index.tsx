import React, { useEffect, useState } from "react";
import { Oval } from "react-loading-icons";
import { QuestionComponent } from "../../components";
import { useQuizContext } from "../../context/quiz.context";
import { useParams } from "react-router";
import axios from "axios";

import "./index.scss";
import { Quiz } from "../../data/quiz/index.types";
import ScoreBoard from "../../components/ScoreBoard";
import { calcluateScore } from "../../helper/common";

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
  const { quizId }: { quizId: string } = useParams();
  console.log({ quizId });
  console.log(useParams());
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [showScoreBoard, setShowScoreBoard] = useState<boolean>(false);

  const fetchQuiz = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/api/quizzes/${quizId}`
      );
      const { quiz }: { quiz: Quiz } = data;
      setQuiz(quiz);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const submitUserScore = async ({
    totalUserScore,
  }: {
    totalUserScore: number;
  }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/quizzes/${quizId}/leaderboard`,
        {
          userId: "60a9456db2fc9b4c3808b4a7",
          score: totalUserScore,
        }
      );

      const {
        quiz: { leaderboard },
      }: { quiz: Quiz } = data;

      setQuiz((prevQuiz) => {
        if (prevQuiz) {
          return {
            ...prevQuiz,
            leaderboard,
          };
        }

        return null;
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const incrementQuestionIndex = () => {
    setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  const handleShowScoreBoard = async () => {
    try {
      setIsLoading(true);

      if (quiz?.questions) {
        const { totalUserScore } = calcluateScore({
          questions: quiz.questions,
        });

        // Update score only if it is not 0.
        totalUserScore && (await submitUserScore({ totalUserScore }));
      }

      setShowScoreBoard(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

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
        <ScoreBoard quiz={quiz} />
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
                onClick={handleShowScoreBoard}
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
