import React from "react";
import logo from "../../images/logo.png";
import "./loginScreen.scss";
const LoginScreen = () => {
  return (
    <>
      <div className="login">
        <div className="login__container">
          <h2>Web React Clone</h2>
          <img src={logo} alt="" />
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p class="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
          <p>Hope you have a good time watching</p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
