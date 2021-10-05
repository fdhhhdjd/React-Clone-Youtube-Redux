import React, { useEffect, useState } from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src="" alt="" />
        <span className="video__top__duration">5:40s</span>
      </div>
      <div className="video__title">Sieu nhan gao</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5 trieu
        </span
        <span>oke </span>
      </div>
    </div>
  );
};

export default Video;
