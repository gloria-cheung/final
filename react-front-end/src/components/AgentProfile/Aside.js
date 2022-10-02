import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Aside() {
  return (
    <React.Fragment>
      <Container className="border border-dark mt-3 p-2 w-50 d-none d-sm-block">
        <h4>Professional Information</h4>
        <Row>
          <Col xs={6}>Broker:</Col>
          <Col xs={6}>21 Century Real Estate</Col>
        </Row>
        <Row>
          <Col xs={6}>Cell phone:</Col>
          <Col xs={6}>(123) 456-7890</Col>
        </Row>
        <Row>
          <Col xs={6}>Websites:</Col>
          <Col xs={6}>LinkedIn, Facebook</Col>
        </Row>
        <Row>
          <Col xs={6}>Screenname:</Col>
          <Col xs={6}>agentUsername</Col>
        </Row>
        <Row>
          <Col xs={6}>Member since:</Col>
          <Col xs={6}>01/01/2022</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
