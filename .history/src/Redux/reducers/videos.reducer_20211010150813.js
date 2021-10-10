import * as types from "../actionType";

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case types.HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,

        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };

    case types.HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const selectedVideoReducer = (
  state = {
    loading: true,
    video: null,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case types.SELECTED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        video: payload,
        loading: false,
      };
    case types.SELECTED_VIDEO_FAIL:
      return {
        ...state,
        video: null,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const relatedVideoReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case types.RELATED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.RELATED_VIDEO_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case types.RELATED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const searchedVideosReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case types.SEARCHED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SEARCHED_VIDEO_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case types.SEARCHED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const subscriptionsChannelReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case types.SUBSCRIPTIONS_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SUBSCRIPTIONS_CHANNEL_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case types.SUBSCRIPTIONS_CHANNEL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const channelVideosReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case types.CHANNEL_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CHANNEL_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case types.CHANNEL_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
