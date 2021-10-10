import React, { useEffect } from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
const VideoMetaData = () => {
  return (
    <>
      <div className="py-2 videoMetaData">
        <div className="videoMetaData__top">
          <h5>tai</h5>
          <div className="py-1 d-flex justify-content-between align-items-center">
            <span>
              {numeral(1000).format("0.a")} Views •{" "}
              {moment("2021-10-09 ").fromNow()}
            </span>

            <div>
              <span className="mr-3">
                <MdThumbUp size={26} />
              </span>
              <span className="mr-3">
                <MdThumbDown size={26} />
              </span>
            </div>
          </div>
        </div>
        <div className="py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img
              // src={channelSnippet?.thumbnails?.default?.url}
              alt=""
              className="mr-3 rounded-circle"
            />
            <div className="d-flex flex-column">
              <span>asdasd</span>
              <span>Subscribers</span>
            </div>
          </div>
        </div>
        <div className="videoMetaData__description"></div>
      </div>
    </>
  );
};

export default VideoMetaData;
