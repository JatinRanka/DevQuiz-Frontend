import React from "react";
import { QuizProvider } from "./context/quiz.context";
import { HomePage, QuizViewPage } from "./views";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/quizzes/:quizId" component={QuizViewPage} />
          </Switch>
        </Router>
      </QuizProvider>
    </div>
  );
}

export default App;
