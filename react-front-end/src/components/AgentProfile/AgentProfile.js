import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Aside from "./Aside";
import AgentHeading from "./AgentHeading";
import AgentAboutMe from "./AgentAboutMe";
import ContactAgent from "../Listings/ContactAgent";
import axios from "axios";
import { useParams } from "react-router-dom";
import AgentReview from "./AgentReview";
import { v4 as uuidv4 } from "uuid";

export default function AgentProfile() {
  const { userId } = useParams();
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [reviewData, setReviewData] = useState();

  function fetchData() {
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/agent",
      params: { username: userId },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((res) => {
        setData(res.data);
        setReviewData(res.data.reviewsData.reviews);
      })

      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  let reviews;

  if (reviewData) {
    reviews = reviewData.map((review) => (
      <AgentReview
        key={uuidv4()}
        name={review.reviewerDisplayName}
        workDone={review.revieweeWorkDone}
        reviewBody={review.reviewBodyMain}
        reviewBodyExtra={review.reviewBodyExtra}
      />
    ));
  }

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  console.log(data);
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={12}>
            <AgentHeading data={data} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Button
            variant="primary"
            size="lg"
            className="mx-auto"
            onClick={handleShow}
          >
            Contact Agent
          </Button>
          <Row>
            <Aside data={data} />
          </Row>
        </Row>
        <Row className="mt-5">
          <AgentAboutMe data={data} />
        </Row>

        <Row className="mt-5">
          <h2>Reviews & Ratings</h2>
          {reviews}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        {data && <ContactAgent agentName={data.displayUser.name} />}
      </Modal>
    </React.Fragment>
  );
}
