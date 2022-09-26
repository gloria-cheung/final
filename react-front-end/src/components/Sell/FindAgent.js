import React, { useRef, useState } from "react";
import { Form, Card, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function FindAgent() {
  const locationRef = useRef();
  const agentNameRef = useRef();

  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/search_agents",
      params: { location: locationRef, name: agentNameRef },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Find An Agent</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Location</Form.Label>
              <Form.Control type="email" ref={locationRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Agent Name</Form.Label>
              <Form.Control type="password" ref={agentNameRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3"></div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2"></div>
    </>
  );
}
