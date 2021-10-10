import request from "../../data/api";
import * as types from "../ActionTypes";
export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "VN",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });
    console.log(data);
    dispatch({
      type: types.HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: types.HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",

        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });

    dispatch({
      type: types.HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: types.HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: types.ELECTED_VIDEO_REQUEST,
    });

    const { data } = await request("/videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });
    dispatch({
      type: types.SELECTED_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: types.SELECTED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
