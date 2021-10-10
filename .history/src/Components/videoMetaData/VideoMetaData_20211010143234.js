import React, { useEffect } from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  return (
    <>
      <div className="py-2 videoMetaData">
        <div className="videoMetaData__top">
          <h5>tai</h5>
          <div className="py-1 d-flex justify-content-between align-items-center">
            <span>
              {numeral(viewCount).format("0.a")} Views •{" "}
              {moment(publishedAt).fromNow()}
            </span>

            <div>
              <span className="mr-3 like">
                <MdThumbUp size={26} /> {numeral(1000).format("0.a")}
              </span>
              <span className="mr-3 like">
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
            <div className="d-flex flex-column ">
              <span className="title">Tai dep trai</span>
              <span className="title">
                {" "}
                {numeral(1000).format("0.a")} Subscribers
              </span>
            </div>
          </div>

          <button className="p-2 m-2 border-0 btn">Subscribed</button>
        </div>
        <div className="videoMetaData__description">
          <ShowMoreText
            lines={3}
            more="SHOW MORE"
            less="SHOW LESS"
            anchorClass="showMoreText"
            expanded={false}
          >
            Google Dịch là một công cụ dịch thuật trực tuyến do Google phát
            triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di
            động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng
            giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng
            dụng phần mềm. Wikipedia Google Dịch là một công cụ dịch thuật trực
            tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng
            dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao
            diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở
            rộng trình duyệt web và ứng dụng phần mềm. Wikipedia
          </ShowMoreText>
        </div>
      </div>
    </>
  );
};

export default VideoMetaData;
