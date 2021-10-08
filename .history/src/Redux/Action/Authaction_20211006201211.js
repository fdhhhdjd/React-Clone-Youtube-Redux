import types from "../ActionTypes";
import auth from "../../utils/Firebase";
import firebase from "firebase/compat/app";
export const LoginGoogle = async (dispatch) => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    console.log(res);
  } catch (error) {}
};
