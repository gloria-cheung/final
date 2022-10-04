import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Aside from "./Aside";
import AgentHeading from "./AgentHeading";
import classes from "./AgentProfile.module.css";
import AgentAboutMe from "./AgentAboutMe";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AgentProfile() {
  const { userId } = useParams();
  const [data, setData] = useState();

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
      })

      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Row>
          <Col xs={12}>
            <AgentHeading data={data} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Button variant="primary" size="lg" className="mx-auto">
            Contact Agent
          </Button>
          <Row>
            <Aside data={data} />
          </Row>
        </Row>
        <Row className="mt-5">
          <AgentAboutMe data={data} />
        </Row>
      </Container>
      <Row className="mt-5">
        <h2>Reviews & Ratings</h2>
        <div>Placeholder for Reviews</div>
      </Row>
    </React.Fragment>
  );
}
