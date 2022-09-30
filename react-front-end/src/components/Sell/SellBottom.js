import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SellBottom.scss";

export default function SellBottom() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/find-an-agent");
  }
  return (
    <Container>
      <Row>
        <Col className="infoBox" xs={12} lg={6}>
          <h2 className="mt-5 mb-3">Start Selling with an Agent</h2>
          <p className="mb-5">
            When you work with a real estate agent, you'll get selling support
            at every step, from prepping and listing your home to marketing that
            gets buyers in the door.
          </p>
          <Button className="ps-5 pe-5" onClick={clickHandler}>
            Find an Agent
          </Button>
        </Col>
        <Col xs={12} lg={6}>
          <Image
            className="w-100"
            src="https://img.freepik.com/premium-vector/qualified-real-estate-agent-concept-realtor-assistance-help-mortgage-contract-real-estate-vector_566886-1658.jpg?w=2000"
            alt="agent"
          />
        </Col>
      </Row>
    </Container>
  );
}
