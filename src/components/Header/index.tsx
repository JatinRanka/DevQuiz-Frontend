import React from "react";
import { useQuizContext, QuizStateType } from "../../context/quiz.context";

type HeaderProps = {
  name: string;
};

const Header = ({ name }: HeaderProps): JSX.Element => {
  const { state, dispatch } = useQuizContext();
  const score = state.score;

  return (
    <div>
      <h1>Welcome: {name}</h1>
      <h3>Score: {score}</h3>
      <button
        onClick={() => {
          dispatch({ type: "UPDATE_SCORE", payload: { score: 4 } });
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Header;
