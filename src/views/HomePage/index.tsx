import axios from "axios";
import React, { useEffect, useState } from "react";
import homePageImage from "../../assets/images/home-page.svg";
import { QuizzesList } from "../../components";
import { Quiz } from "../../data/quiz/index.types";
import "./index.scss";

const HomePage = (): JSX.Element => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const fetchQuizzes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/quizzes/");
      const { quizzes }: { quizzes: Quiz[] } = data;
      setQuizzes(quizzes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div id="home-page">
      <div className="cover-container">
        <div className="description">
          <p className="heading-3">Welcome to DevQuiz</p>
          <p className="heading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing . Lorem ipsum
            dolor sit amet, consectetur adipiscing .{" "}
          </p>

          <button className="btn primary-btn">Explore Quizzes</button>
        </div>
        <img src={homePageImage} className="home-page-cover-img" alt="Quiz" />
      </div>

      <hr className="my-1" />

      <p className="heading-3 my-1 quizzes-heading">Quizzes</p>

      <QuizzesList quizzes={quizzes} />
    </div>
  );
};

export default HomePage;
