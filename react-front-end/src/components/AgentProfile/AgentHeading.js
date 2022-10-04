import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aside from "./Aside";

export default function AgentHeading(props) {
  const { data } = props;
  console.log("data", data);
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={12}>
          <img
            alt="agent"
            style={{
              height: "12rem",
              borderRadius: "50%",
            }}
            src={
              data
                ? data.profileDisplay.contactCard.profilePhotoSrc
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </Col>
        <Col xs={12} className="mt-3 ">
          <h4>{data ? data.displayUser.name : null}</h4>
          <h5>{data ? data.displayUser.businessName : null}</h5>
        </Col>
      </Row>
      <Row className="mt-2 ">
        <div>
          {data ? "⭐️⭐️⭐️⭐️⭐️ 5.0 |" : null}{" "}
          {data ? data.reviewsData.reviews.length : null}{" "}
          {data ? "Reviews" : null}
        </div>
      </Row>
    </Container>
  );
}
