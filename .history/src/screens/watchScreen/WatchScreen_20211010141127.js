import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { VideoHorizontal, VideoMetaData, Comments } from "../../Import";

const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  return (
    <>
      <Row>
        <Helmet>
          <title>{video?.snippet?.title}</title>
        </Helmet>
        <Col lg={8}>
          <div className="watchScreen__player">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </div>

          <VideoMetaData video="" videoId={id} />

          <Comments
            videoId={id}
            // totalComments={video?.statistics?.commentCount}
          />
        </Col>
        <Col lg={4}>
          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="130px" count={15} />
          </SkeletonTheme>
        </Col>
      </Row>
    </>
  );
};

export default WatchScreen;
