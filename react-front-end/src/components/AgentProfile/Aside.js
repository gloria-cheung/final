import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Aside() {
  return (
    <React.Fragment>
      <Container className="border border-dark mt-3 p-2 d-none d-lg-block">
        <h4>Professional Information</h4>
        <Row>
          <Col xs={4}>Broker:</Col>
          <Col xs={8}>21 Century Real Estate</Col>
        </Row>
        <Row>
          <Col xs={4}>Cell phone:</Col>
          <Col xs={8}>(123) 456-7890</Col>
        </Row>
        <Row>
          <Col xs={4}>Websites:</Col>
          <Col xs={8}>LinkedIn, Facebook</Col>
        </Row>
        <Row>
          <Col xs={4}>Screenname:</Col>
          <Col xs={8}>agentUsername</Col>
        </Row>
        <Row>
          <Col xs={4}>Member since:</Col>
          <Col xs={8}>01/01/2022</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
