import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { GetOptionStyle, QuestionComponentType } from "./index.types";
import "./index.scss";
const TIMER_DURATION = 30;

// Helper function
const getOptionStyle = ({
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

// Component
const QuestionComponent = ({
  question,
  currentQuestionIndex,
  totalQuestions,
}: QuestionComponentType) => {
  const [timerDuration, setTimerDuration] = useState<number>(TIMER_DURATION);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [userSelectedAnswerIndex, setUserSelectedAnswerIndex] =
    useState<number>(-1);

  const handleOptionSelect = (event: any) => {
    if (showAnswers || isTimeUp) return; // If already answers are shown or time is up.

    const selectedAnswer = parseInt(event.target.getAttribute("data-index"));
    question.userSelectedAnswerIndex = selectedAnswer;
    setUserSelectedAnswerIndex(selectedAnswer);
    setShowAnswers(true);
  };

  // Reset values for every question
  useEffect(() => {
    setShowAnswers(false);
    setUserSelectedAnswerIndex(-1);
    setIsTimeUp(false);
    setTimerDuration(TIMER_DURATION);
  }, [question]);

  useEffect(() => {
    if (isTimeUp) setShowAnswers(true);
  }, [isTimeUp]);

  return (
    <div id="question-component-container">
      <div className="header">
        <p className="heading-5 bold">
          {/* +1 since indexing starts from 0  */}
          Qn: {currentQuestionIndex + 1}/{totalQuestions}{" "}
        </p>
        <CountdownCircleTimer
          size={50}
          isPlaying={userSelectedAnswerIndex === -1}
          duration={timerDuration}
          strokeWidth={7}
          key={question.questionText}
          onComplete={() => setIsTimeUp(true)}
          colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>

      <p className="heading-5">{question.questionText}</p>

      <div className="options-list">
        {question.options.map((option, index) => {
          const optionStyle = getOptionStyle({
            showAnswers,
            userSelectedAnswerIndex,
            currentOptionIndex: index,
            isCorrectAnswer: option.isRight,
          });

          return (
            <div
              className={`option ${optionStyle}`}
              key={index}
              onClick={handleOptionSelect}
              data-index={index}
            >
              <p>{option.text}</p>
            </div>
          );
        })}
      </div>

      {isTimeUp && <p>Oops! Time up.</p>}
    </div>
  );
};

export default QuestionComponent;
