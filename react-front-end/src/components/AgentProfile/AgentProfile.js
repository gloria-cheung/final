import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Aside from "./Aside";
import AgentHeading from "./AgentHeading";
import classes from "./AgentProfile.module.css";
import AgentAboutMe from "./AgentAboutMe";
import AgentForSale from "./AgentForSale";
// import AgentReviewsContainer from "./AgentReviewsContainer";
// import AgentReview from "./AgentReview";

export default function AgentProfile() {
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Row>
          <Col xs={12}>
            <AgentHeading />
          </Col>
          {/* <Col xs={6}>
            <Aside />
          </Col> */}
        </Row>
        <Row className="mt-3">
          <Button variant="primary" size="lg" className="mx-auto">
            Contact Agent
          </Button>
          <Row>
            <Aside />
          </Row>
        </Row>
        <Row className="mt-5">
          <AgentAboutMe />
        </Row>
        <Row className="mt-5">
          <AgentForSale />
        </Row>
        {/* <Row className="mt-5">
          <AgentReviewsContainer />
          <AgentReview />
        </Row> */}
      </Container>
      <Row className="mt-5">
        <h2>Reviews & Ratings</h2>
        <div>Placeholder for Reviews</div>
      </Row>
    </React.Fragment>
  );
}
