import React from "react";
import logo from "../../images/logo1.png";
import "./loginScreen.scss";
const LoginScreen = () => {
  return (
    <>
      <div className="login">
        <div className="login__container">
          <h2>Youtube Clone</h2>
          <img src={logo} alt="" />
          <button>Login With google</button>
          <p>This Project is made using YOUTUBE DATA API</p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
