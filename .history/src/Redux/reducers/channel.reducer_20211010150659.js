import * as types from "../actionType";

export const channelDetailsReducer = (
  state = {
    loading: true,
    channel: {},
    subscriptionStatus: false,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case types.CHANNEL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        channel: payload,
        loading: false,
      };
    case types.CHANNEL_DETAILS_FAIL:
      return {
        ...state,
        channel: null,
        loading: false,
        error: payload,
      };
    case types.SET_SUBSCRIPTION_STATUS:
      return {
        ...state,
        subscriptionStatus: payload,
      };
    default:
      return state;
  }
};
