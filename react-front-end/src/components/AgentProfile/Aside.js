import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Aside({ data }) {
  return (
    <React.Fragment>
      <Container className="border border-dark mt-3 p-2 w-50 d-none d-sm-block">
        <h4>Professional Information</h4>
        <Row>
          <Col xs={6}>Broker:</Col>
          <Col xs={6}>{data ? data.displayUser.businessName : null}</Col>
        </Row>
        <Row>
          <Col xs={6}>Cell phone:</Col>
          <Col xs={6}>
            {data ? data.professionalInformation[1].description : null}
          </Col>
        </Row>

        <Row>
          <Col xs={6}>Screenname:</Col>
          <Col xs={6}>{data ? data.displayUser.screenName : null}</Col>
        </Row>
        <Row>
          <Col xs={6}>Member since: </Col>
          <Col xs={6}>{data ? data.about.yearsExperience : null}</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
