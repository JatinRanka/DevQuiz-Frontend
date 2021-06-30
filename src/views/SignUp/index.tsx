import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { API_ENDPOINT } from "../../constants";
import { useUsercontext } from "../../context/user.context";
import { getErrorMessage } from "../../helper/common";
import { toast } from "../../helper/toast";
import "./index.scss";

const SignUp = () => {
  const history = useHistory();
  const { setIsUserLoggedIn } = useUsercontext();
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

      const { data, headers } = await axios.post(`${API_ENDPOINT}/users`, {
        ...formData,
      });

      const { user } = data;

      window.localStorage.setItem("Authorization", headers.authorization);
      window.localStorage.setItem("userId", user._id);
      setIsUserLoggedIn(true);

      history.push("/");
    } catch (error) {
      toast({ type: "error", message: getErrorMessage(error) });
    } finally {
      setIsSignUpButtonLoading(false);
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
