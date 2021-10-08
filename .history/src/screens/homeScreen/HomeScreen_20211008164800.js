import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesBar, Video } from "../../Import";
import { getPopularVideos } from "../../Redux/Action/VideoAction";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../Components/skeletons/SkeletonVideo";
const HomeScreen = () => {
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <Container>
      <CategoriesBar />
      {/* <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row> */}

      <InfiniteScroll
        dataLength={videos.length}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
