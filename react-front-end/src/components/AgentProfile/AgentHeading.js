import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aside from "./Aside";

export default function AgentHeading() {
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={12}>
          <img
            style={{
              height: "12rem",
              borderRadius: "50%",
            }}
            src="https://photos.zillowstatic.com/h_l/IS3jrgiva108c21000000000.jpg"
            alt="agentImage"
          />
        </Col>
        <Col xs={12} className="mt-3 ">
          <h4>John Smith - Real Estate Agent</h4>
          <div>Real Esate Agent</div>
        </Col>
      </Row>
      <Row className="mt-2 ">
        <div>
          <span role="img" aria-label="star">
            ⭐️⭐️⭐️⭐️⭐️
          </span>{" "}
          5.0 | 100 Reviews
        </div>
      </Row>
    </Container>
  );
}
