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
          <button>Login With google</button>
          <p>Hope you have a good time watching</p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
