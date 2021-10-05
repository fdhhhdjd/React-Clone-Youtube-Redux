import React from "react";
import logo from "../../images/logo1.png";
const LoginScreen = () => {
  return (
    <>
      <div className="login">
        <div className="login_container">
          <img src={logo} alt="logo" />
          <button>Login</button>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
