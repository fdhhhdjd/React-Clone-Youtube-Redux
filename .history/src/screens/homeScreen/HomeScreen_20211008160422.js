import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CategoriesBar, Video } from "../../Import";
import { getPopularVideos } from "../../Redux/Action/VideoAction";
const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos);
  }, [dispatch]);
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
