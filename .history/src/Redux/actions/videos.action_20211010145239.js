import * as types from "../actionType";

import request from "../../api";

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
      type: types.SELECTED_VIDEO_REQUEST,
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

export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({
      type: types.RELATED_VIDEO_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
      },
    });
    dispatch({
      type: types.RELATED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: types.RELATED_VIDEO_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getVideosBySearch = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: types.SEARCHED_VIDEO_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",

        maxResults: 20,
        q: keyword,
        type: "video,channel",
      },
    });

    dispatch({
      type: types.SEARCHED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: types.SEARCHED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const getSubscribedChannels = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.SUBSCRIPTIONS_CHANNEL_REQUEST,
    });
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet,contentDetails",

        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: types.SUBSCRIPTIONS_CHANNEL_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: types.SUBSCRIPTIONS_CHANNEL_FAIL,
      payload: error.response.data,
    });
  }
};

export const getVideosByChannel = (id) => async (dispatch) => {
  try {
    dispatch({
      type: types.CHANNEL_VIDEOS_REQUEST,
    });

    // 1. get upload playlist id
    const {
      data: { items },
    } = await request("/channels", {
      params: {
        part: "contentDetails",
        id: id,
      },
    });
    const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;
    // 2. get the videos using the id
    const { data } = await request("/playlistItems", {
      params: {
        part: "snippet,contentDetails",
        playlistId: uploadPlaylistId,
        maxResults: 30,
      },
    });

    dispatch({
      type: types.CHANNEL_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: types.CHANNEL_DETAILS_FAIL,
      payload: error.response.data,
    });
  }
};
