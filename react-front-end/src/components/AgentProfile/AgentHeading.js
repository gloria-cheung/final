import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function AgentHeading(props) {
  const { data } = props;
  console.log("data", data);
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
          />
        </Col>
        <Col xs={12} className="mt-3 ">
          <h4>Name</h4>
          <h4>{data ? data.about.description : "Not Working"}</h4>
          {/* <div>{data.about.description}</div> */}
          <div>Real Estate Agent</div>
        </Col>
      </Row>
      <Row className="mt-2 ">
        <div>⭐️⭐️⭐️⭐️⭐️ 5.0 | 100 Reviews</div>
      </Row>
    </Container>
  );
}
