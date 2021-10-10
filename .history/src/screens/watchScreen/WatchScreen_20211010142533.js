import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { VideoHorizontal, VideoMetaData, Comments } from "../../Import";
import "./watchScreen.scss";
import { getVideoById } from "../../Redux/Action/VideoAction";
const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  );

  const { video, loading } = useSelector((state) => state.selectedVideo);

  return (
    <>
      <Row>
        <Helmet>
          <title>sieu nhan</title>
        </Helmet>
        <Col lg={8}>
          <div className="watchScreen__player">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              title={video?.snippet?.title}
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <VideoMetaData />
          <Comments />
        </Col>
        <Col lg={4}>
          {[...Array(10)].map((item) => (
            <VideoHorizontal />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default WatchScreen;
