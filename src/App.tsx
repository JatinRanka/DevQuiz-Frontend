import React from "react";
import { QuizProvider } from "./context/quiz.context";
import { HomePage, QuizViewPage, Login, SignUp } from "./views";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NavBar } from "./components";
import { ProtectedRoute } from "./helper/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Router>
          <NavBar />

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <ProtectedRoute path="/quizzes/:quizId" component={QuizViewPage} />
          </Switch>
        </Router>
      </QuizProvider>
    </div>
  );
}

export default App;
