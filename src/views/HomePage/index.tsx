import axios from "axios";
import React, { useEffect } from "react";
import homePageImage from "../../assets/images/home-page.svg";
import { QuizzesList } from "../../components";
import "./index.scss";

const HomePage = (): JSX.Element => {
  const fetchQuizzes = async () => {
    try {
      const res = axios;
    } catch (error) {}
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

      <QuizzesList />
    </div>
  );
};

export default HomePage;
