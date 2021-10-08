import React, { useEffect, useState } from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
const Video = ({ video }) => {
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
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
      console.log(items);
    };
    get_video_details();
  }, [_videoId]);
  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt="" />
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
          src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/47436234_2285355071679112_2652963430012551168_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=R4iGmMXX89YAX9t4tVX&_nc_ht=scontent.fsgn2-1.fna&oh=e3addc3964ee58a236577acc1f9cfbe8&oe=61804255"
          alt=" "
        />
        <p>tai dep trai</p>
      </div>
    </div>
  );
};

export default Video;
