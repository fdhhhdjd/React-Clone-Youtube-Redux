import types from "../ActionTypes";
import auth from "../../utils/Firebase";
export const LoginGoogle = async (dispatch) => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    console.log(res);
  } catch (error) {}
};
