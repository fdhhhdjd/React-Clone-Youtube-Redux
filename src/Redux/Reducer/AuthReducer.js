import * as types from "../ActionTypes";
const initialState = {
  auth: [],
  loading: false,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default authReducer;
