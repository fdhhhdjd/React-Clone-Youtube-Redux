import React, { useEffect, useState } from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
const Video = ({ video, key }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;
  return (
    <div className="video">
      <div className="video__top">
        {/* <img src={medium.url} alt='' /> */}
        <LazyLoadImage src={medium.url} effect="blur" />
        {/* <span className="video__top__duration">{_duration}</span> */}
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          {/* <AiFillEye /> {numeral(views).format("0.a")} Views •{" "} */}
        </span>{" "}
        <span> {moment(publishedAt).fromNow()} </span>
      </div>
      =
      <div className="video__channel">
        {/* <LazyLoadImage src={channelIcon?.url} effect="blur" /> */}

        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
