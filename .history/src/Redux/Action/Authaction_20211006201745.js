import * as types from "../ActionTypes";
import auth from "../../utils/Firebase";
import firebase from "firebase/compat/app";
export const LoginGoogle = async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();
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
      type: type.LOGIN_FAIL,
      payload: error.message,
    });
  }
};
