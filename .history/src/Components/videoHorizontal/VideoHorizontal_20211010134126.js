import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const VideoHorizontal = () => {
  return (
    <>
      <Row className="py-2 m-1 videoHorizontal align-items-center">
        <Col xs={6} md={4} className="videoHorizontal__left">
          <LazyLoadImage
            effect="blur"
            className="videoHorizontal__thumbnail "
            wrapperClassName="videoHorizontal__thumbnail-wrapper"
          />

          <span className="videoHorizontal__duration">tai</span>
        </Col>
        <Col xs={6} md={8} className="p-0 videoHorizontal__right">
          <p className="mb-1 videoHorizontal__title">heo</p>

          <div className="videoHorizontal__details">
            <AiFillEye /> {numeral(1000).format("0.a")} Views •
            {moment(1000).fromNow()}
          </div>

          <p className="mt-1 videoHorizontal__desc">{description}</p>

          <div className="my-1 videoHorizontal__channel d-flex align-items-center">
            <LazyLoadImage src="" effect="blur" />}
            <p className="mb-0">{channelTitle}</p>
          </div>

          <p className="mt-2"> Videos</p>
        </Col>
      </Row>
    </>
  );
};

export default VideoHorizontal;
