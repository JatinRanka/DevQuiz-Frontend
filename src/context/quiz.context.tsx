import {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from "react";
import { Quiz } from "../data/quiz/index.types";

export type QuizStateType = {
  score: number;
  quizzes: Quiz[];
};

const quizInitialState: QuizStateType = {
  score: 0,
  quizzes: [],
};

type ACTIONTYPE =
  | { type: "RESET" }
  | { type: "UPDATE_SCORE"; payload: { score: number } };

const quizReducer = (state: typeof quizInitialState, action: ACTIONTYPE) => {
  // const { type } = action; TS error after using `type` directly in switch block instead of action.type

  switch (action.type) {
    case "UPDATE_SCORE": {
      const { payload } = action;

      return {
        ...state,
        score: state.score + payload.score,
      };
    }

    case "RESET": {
      return {
        ...quizInitialState,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

const QuizContext = createContext<{
  state: QuizStateType;
  dispatch: Dispatch<ACTIONTYPE>;
}>({
  state: quizInitialState,
  dispatch: () => {},
});

export const useQuizContext = () => {
  return useContext(QuizContext);
};

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, quizInitialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
