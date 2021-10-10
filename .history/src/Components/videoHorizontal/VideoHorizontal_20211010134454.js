import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <>
      <Row className="py-2 m-1 videoHorizontal align-items-center">
        <Col xs={6} md={4} className="videoHorizontal__left">
          <LazyLoadImage
            src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/c0.80.240.240a/p240x240/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=zdyoRSbXNiUAX9Ns_Nd&_nc_ht=scontent.fsgn2-2.fna&oh=e44e71240603c8a74d059029695adef4&oe=6186A21E"
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

          <p className="mt-1 videoHorizontal__desc">15</p>

          <div className="my-1 videoHorizontal__channel d-flex align-items-center">
            <LazyLoadImage
              src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/c0.80.240.240a/p240x240/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=zdyoRSbXNiUAX9Ns_Nd&_nc_ht=scontent.fsgn2-2.fna&oh=e44e71240603c8a74d059029695adef4&oe=6186A21E"
              effect="blur"
            />
            <p className="mb-0">25</p>
          </div>

          <p className="mt-2"> Videos</p>
        </Col>
      </Row>
    </>
  );
};

export default VideoHorizontal;
