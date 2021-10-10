import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { VideoHorizontal, VideoMetaData } from "../../Import";

const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  return (
    <>
      <Row>
        <Col lg={8}>
          <div className="watchScreen__player">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              title=""
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <VideoMetaData />
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
