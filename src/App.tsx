import React from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./context/quiz.context";

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Header name="jatin" />
        <Quiz />
      </QuizProvider>
    </div>
  );
}

export default App;
