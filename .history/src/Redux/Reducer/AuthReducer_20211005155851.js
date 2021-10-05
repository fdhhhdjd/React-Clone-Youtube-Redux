import * as types from "./Actiontypes";
const initialState = {
  basket: [],
  cart: [],
  loading: false,
  users: null,
  error: null,
  currentItem: null,
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
