import React from "react";
import { useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import { LoginGoogle } from "../../Redux/Action/Authaction";
import "./loginScreen.scss";
const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(LoginGoogle());
  };
  return (
    <>
      <div className="login">
        <div className="login__container">
          <h2>Web React Clone</h2>
          <img src={logo} alt="logo" />
          <button className="google-btn" onClick={handleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </button>
          <p>Wish you have a good watching 😘</p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
