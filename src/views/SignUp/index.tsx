import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./index.scss";

const SignUp = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignUpButtonLoading, setIsSignUpButtonLoading] = useState(false);

  const handleSignUp = async (event: any) => {
    try {
      event.preventDefault();
      setIsSignUpButtonLoading(true);

      const { data } = await axios.post("http://localhost:5000/api/users/", {
        ...formData,
      });

      const { user } = data;
      console.log("signed up");
      window.localStorage.setItem("userId", user._id);
      history.push("/");
    } catch (error) {
      console.log(error);
      setIsSignUpButtonLoading(false);

      // toast({ type: "error", message: error.message });
    }
  };

  const handleInputChange = (event: any) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="signup-outer-container">
      <div className="signup-inner-container">
        <p className="heading-3 bold signup-heading">Sign Up</p>

        <form onSubmit={handleSignUp}>
          <div className="input-container">
            <input
              className="input-container__input-field"
              required={true}
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              type="text"
            />
            <label
              className={`input-container__heading ${
                formData.name ? " input-container__heading-filled" : ""
              }`}
            >
              Name
            </label>

            <span className="input-container__icon material-icons">
              perm_identity
            </span>
          </div>

          <div className="input-container">
            <input
              className="input-container__input-field"
              required={true}
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              type="email"
            />
            <label
              className={`input-container__heading ${
                formData.email ? " input-container__heading-filled" : ""
              }`}
            >
              E-Mail
            </label>

            <span className="input-container__icon material-icons">
              perm_identity
            </span>
          </div>

          <div className="input-container">
            <input
              className="input-container__input-field"
              required={true}
              value={formData.password}
              name="password"
              onChange={handleInputChange}
              type="password"
            />
            <label
              className={`input-container__heading ${
                formData.password ? " input-container__heading-filled" : ""
              }`}
            >
              Password
            </label>

            <span className="input-container__icon material-icons">lock</span>
          </div>

          <button
            className={`btn primary-btn signup-btn ${
              isSignUpButtonLoading ? "disabled" : ""
            }`}
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p className="existing-user-text">
          Existing User?
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
