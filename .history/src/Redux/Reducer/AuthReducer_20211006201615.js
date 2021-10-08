import * as types from "../ActionTypes";
const initialState = {
  auth: [],
  loading: false,
};
const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case types.LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };

    default:
      return prevState;
  }
};
export default authReducer;
