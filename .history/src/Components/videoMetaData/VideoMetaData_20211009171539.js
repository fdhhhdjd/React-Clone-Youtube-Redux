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
                <MdThumbUp size={26} /> {numeral(1000).format("0.a")}
              </span>
              <span className="mr-3">
                <MdThumbDown size={26} /> {numeral(1000).format("0.a")}
              </span>
            </div>
          </div>
        </div>
        <div className="py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/c0.80.240.240a/p240x240/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=zdyoRSbXNiUAX9Ns_Nd&_nc_ht=scontent.fsgn2-2.fna&oh=e44e71240603c8a74d059029695adef4&oe=6186A21E"
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
