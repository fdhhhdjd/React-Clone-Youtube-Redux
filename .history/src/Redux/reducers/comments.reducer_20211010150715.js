import * as types from "../actionType";

export const commentListReducer = (
  state = {
    loading: true,
    comments: null,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case types.COMMENT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.COMMENT_LIST_SUCCESS:
      return {
        ...state,
        comments: payload,
        loading: false,
      };
    case types.COMMENT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
