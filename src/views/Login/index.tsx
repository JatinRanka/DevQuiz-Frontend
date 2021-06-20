import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { API_ENDPOINT } from "../../constants";
import { useUsercontext } from "../../context/user.context";
import { toast } from "../../helper/toast";
import "./index.scss";

const Login = () => {
  const history = useHistory();
  const { setIsUserLoggedIn } = useUsercontext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoginButtonLoading, setIsLoginButtonLoading] = useState(false);

  const handleLogin = async (event: any) => {
    try {
      event.preventDefault();
      setIsLoginButtonLoading(true);

      const { data, headers } = await axios.post(`${API_ENDPOINT}/login`, {
        ...formData,
      });

      const { user } = data;

      window.localStorage.setItem("Authorization", headers.authorization);
      window.localStorage.setItem("userId", user._id);
      setIsUserLoggedIn(true);
      history.push("/");
    } catch (error) {
      toast({ type: "error", message: error.message });
    } finally {
      setIsLoginButtonLoading(false);
    }
  };

  const handleInputChange = (event: any) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="login-outer-container">
      <div className="login-inner-container">
        <p className="heading-3 bold login-heading">LOGIN</p>

        <form onSubmit={handleLogin}>
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
            className={`btn primary-btn login-btn ${
              isLoginButtonLoading ? "disabled" : ""
            }`}
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="new-user-text">
          New User?
          <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
