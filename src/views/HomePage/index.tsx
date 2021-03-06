import axios from "axios";
import { useEffect, useState } from "react";
import homePageImage from "../../assets/images/home-page.svg";
import { QuizzesList } from "../../components";
import { API_ENDPOINT } from "../../constants";
import { Quiz } from "../../data/quiz/index.types";
import { getErrorMessage } from "../../helper/common";
import { toast } from "../../helper/toast";
import "./index.scss";

const HomePage = (): JSX.Element => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isQuizzesLoading, setIsQuizzesLoading] = useState<Boolean>(false);

  const fetchQuizzes = async () => {
    try {
      setIsQuizzesLoading(true);
      const { data } = await axios.get(`${API_ENDPOINT}/quizzes`);
      const { quizzes }: { quizzes: Quiz[] } = data;
      setQuizzes(quizzes);
    } catch (error) {
      toast({ type: "error", message: getErrorMessage(error) });
    } finally {
      setIsQuizzesLoading(false);
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
            DevQuiz is a quiz application to test your Programming skills, with
            a timer for added pressure. Have fun testing your skills :)
          </p>

          <button className="btn primary-btn">Explore Quizzes</button>
        </div>
        <img src={homePageImage} className="home-page-cover-img" alt="Quiz" />
      </div>

      <hr className="my-1" />

      <p className="heading-3 my-1 quizzes-heading">Quizzes</p>

      <QuizzesList isQuizzesLoading={isQuizzesLoading} quizzes={quizzes} />
    </div>
  );
};

export default HomePage;
