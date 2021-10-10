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
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zdyoRSbXNiUAX9Ns_Nd&_nc_ht=scontent.fsgn2-2.fna&oh=270aa91b555a1f3b6c7494579f878ca0&oe=6188A4B1"
              alt=""
              className="mr-3 rounded-circle"
            />
            <div className="d-flex flex-column">
              <span>Tai dep trai</span>
              <span> {numeral(1000).format("0.a")} Subscribers</span>
            </div>
          </div>

          <button className="p-2 m-2 border-0 btn">Subscribed</button>
        </div>
        <div className="videoMetaData__description"></div>
      </div>
    </>
  );
};

export default VideoMetaData;
