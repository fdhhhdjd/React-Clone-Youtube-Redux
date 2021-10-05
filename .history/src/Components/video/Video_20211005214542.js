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
        <img
          src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/c0.80.240.240a/p240x240/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Pu_NxYfQGKQAX-_34BE&_nc_ht=scontent.fsgn2-2.fna&oh=75ceec2e9dca1142c43c0419a7fee27a&oe=6182AD9E"
          alt=""
        />
        <span className="video__top__duration">5:40s</span>
      </div>
      <div className="video__title">Sieu nhan gao</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5 trieu
        </span>
        <span>10ngay </span>
      </div>

      <div className="video__channel">
        <img
          src="https://www.facebook.com/profile.php?id=100013242369598&comment_id=Y29tbWVudDoyMjg1MzU1MTE4MzQ1Nzc0XzIyODUzNjU3MjgzNDQ3MTM%3D&__tn__=R*F"
          alt=" "
        />
        <p>20</p>
      </div>
    </div>
  );
};

export default Video;
