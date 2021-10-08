import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import logo from "../../images/logo.png";
import { LoginGoogle } from "../../Redux/Action/Authaction";
import "./loginScreen.scss";
const LoginScreen = () => {
  const accessToken,user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = () => {
    dispatch(LoginGoogle());
  };
  useEffect(() => {
    if (user) {
      history.push("./");
    }
  }, [accessToken, history]);
  return (
    <>
      <div className="login">
        <div className="login__container">
          <h2>Web React Clone</h2>
          <img src={logo} alt="logo" />
          <div className="google-btn" onClick={handleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
          <p>Wish you have a good watching 😘</p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
