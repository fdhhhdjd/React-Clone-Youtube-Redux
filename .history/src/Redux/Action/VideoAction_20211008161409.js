import request from "../../data/api";
import * as types from "../ActionTypes";
export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.HOME_VIDEOS_REQUEST,
    });
    const { data } = request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });
    console.log("sieu nhan", data);

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
