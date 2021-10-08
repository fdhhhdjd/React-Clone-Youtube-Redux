import * as types from "../ActionTypes";
const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
};
export const homeVideosReducer = () => {
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
    case type.HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
