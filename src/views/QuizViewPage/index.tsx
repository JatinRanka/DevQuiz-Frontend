import React from "react";
import { QuestionComponent } from "../../components";
import { useQuizContext } from "../../context/quiz.context";
import { quiz } from "../../data/quiz";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./index.scss";

const QuizViewPage = () => {
  const { state, dispatch } = useQuizContext();

  return (
    <div id="quiz-view-page">
      <div className="header">
        <p className="heading-5 bold"> Qn: {1}/10 </p>
        <CountdownCircleTimer
          size={50}
          isPlaying
          duration={30}
          strokeWidth={7}
          colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
      <QuestionComponent question={quiz.questions[0]} />

      <div className="action-btns">
        <button className="btn primary-btn icon-only-btn icon-only-btn-sm">
          <span className="icon material-icons"> arrow_back_ios_new </span>
        </button>

        <button className="btn primary-btn icon-only-btn icon-only-btn-sm">
          <span className="icon material-icons"> arrow_forward_ios </span>
        </button>
      </div>
    </div>
  );
};

export default QuizViewPage;
