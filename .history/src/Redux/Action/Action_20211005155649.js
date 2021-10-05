import types from "../ActionTypes";
export const completeTodo = (todo) => ({
  type: types.LOGIN_START,
  payload: todo,
});
