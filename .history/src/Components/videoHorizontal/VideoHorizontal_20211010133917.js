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
        <Col
          xs={6}
          md={searchScreen || subScreen ? 4 : 6}
          className="videoHorizontal__left"
        >
          <LazyLoadImage
            src={medium.url}
            effect="blur"
            className={`videoHorizontal__thumbnail ${thumbnail} `}
            wrapperClassName="videoHorizontal__thumbnail-wrapper"
          />
          {isVideo && (
            <span className="videoHorizontal__duration">{_duration}</span>
          )}
        </Col>
        <Col
          xs={6}
          md={searchScreen || subScreen ? 8 : 6}
          className="p-0 videoHorizontal__right"
        >
          <p className="mb-1 videoHorizontal__title">{title}</p>

          {isVideo && (
            <div className="videoHorizontal__details">
              <AiFillEye /> {numeral(views).format("0.a")} Views •
              {moment(publishedAt).fromNow()}
            </div>
          )}

          {(searchScreen || subScreen) && (
            <p className="mt-1 videoHorizontal__desc">{description}</p>
          )}

          <div className="my-1 videoHorizontal__channel d-flex align-items-center">
            {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}
            <p className="mb-0">{channelTitle}</p>
          </div>
          {subScreen && (
            <p className="mt-2">{video.contentDetails.totalItemCount} Videos</p>
          )}
        </Col>
      </Row>
    </>
  );
};

export default VideoHorizontal;
