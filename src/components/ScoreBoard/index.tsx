import { Quiz } from "../../data/quiz/index.types";
import { calcluateScore } from "../../helper/common";
import "./index.scss";

const ScoreBoard = ({ quiz }: { quiz: Quiz }) => {
  const { totalUserScore, totalPossibleScore } = calcluateScore({
    questions: quiz.questions,
  });

  return (
    <div id="scoreboard">
      <p className="heading-2 score-heading">Score 🎯</p>
      <div className="score">
        <p className="heading-1 user-score bold">{totalUserScore}</p>
        <hr />
        <p className="heading-2 total-score">{totalPossibleScore}</p>
      </div>

      <div className="leaderboard">
        <p className="heading-2 ">Leaderboard 🏆</p>

        <table className="styled-table">
          <thead>
            <tr className="heading-5">
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {quiz.leaderboard?.map((row) => {
              return (
                <tr key={row._id}>
                  <td>{row.user.name}</td>
                  <td>{row.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreBoard;
