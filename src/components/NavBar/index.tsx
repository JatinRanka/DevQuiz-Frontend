import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <p className="heading-2 navbar__logo">DevQuiz</p>

        <ul className="navbar__link-container">
          <li>
            <a className="navbar__link" href="/">
              Link 1
            </a>
          </li>
          <li>
            <a className="navbar__link" href="/">
              Link 2
            </a>
          </li>
          <li>
            <a className="navbar__link" href="/">
              Link 3
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar__right">
        <div
          style={{ lineHeight: 0 }} //should revisit (move to component lib)
          className="icon-with-badge mh-1"
        >
          <span className="icon-with-badge__icon material-icons-outlined">
            account_circle
          </span>
          {/* <span className="badge secondary-badge">24</span> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
