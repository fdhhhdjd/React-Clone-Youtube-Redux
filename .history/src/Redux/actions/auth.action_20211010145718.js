import firebase from "firebase/compat/app";

import auth from "../../Firebase";
import * as types from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: types.LOGIN_REQUEST,
    });

    // const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    const res = await auth.signInWithPopup(provider);
    const accessToken = res.credential.accessToken;

    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: types.LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: types.LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const log_out = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: types.LOG_OUT,
  });

  sessionStorage.removeItem("ytc-access-token");
  sessionStorage.removeItem("ytc-user");
};
