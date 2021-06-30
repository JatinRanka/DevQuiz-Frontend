import { Link, useHistory } from "react-router-dom";
import { useUsercontext } from "../../context/user.context";
import { handleLogoutUser, redirectToLoginPage } from "../../helper/common";
import "./index.scss";

const NavBar = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useUsercontext();
  const history = useHistory();

  const handleAccountClick = () => {
    isUserLoggedIn
      ? handleLogoutUser(setIsUserLoggedIn, history)
      : redirectToLoginPage(history);
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <p className="heading-2 navbar__logo reset-link-styles">DevQuiz</p>
        </Link>
      </div>

      <div className="navbar__right">
        <div onClick={handleAccountClick} className="account">
          <p className="bold">{isUserLoggedIn ? "Logout" : "Login"}</p>
          <div
            style={{ lineHeight: 0 }} //should revisit (move to component lib)
            className="icon-with-badge"
          >
            <span className="icon-with-badge__icon material-icons-outlined">
              account_circle
            </span>
            {/* <span className="badge secondary-badge">24</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
