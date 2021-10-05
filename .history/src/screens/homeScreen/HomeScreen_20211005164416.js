import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { CategoriesBar, Video } from "../../Import";
const HomeScreen = () => {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
