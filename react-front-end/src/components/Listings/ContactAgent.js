import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

export default function ContactAgent(props) {
  const [state, setState] = useState({
    message: { fullname: "", phone: "", email: "", message: "" },
    submitting: false,
    error: false,
    isSubmitted: false,
  });

  const { zpid, attributionInfo } = props;

  const fetchSMS = () => {
    axios
      .post("http://localhost:8080/api/messages", {
        ...state.message,
        zpid: zpid,
      })
      .then((res) => {
        if (res.data.success) {
          setState({
            error: false,
            submitting: false,
            message: {
              fullname: "",
              phone: "",
              email: "",
              message: "",
            },
            isSubmitted: true,
          });
        } else {
          setState({
            error: true,
            submitting: false,
          });
        }
      });
  };

  const checkFormValidity = () => {
    if (Object.values(state.message).every((val) => val !== "")) {
      fetchSMS();
    } else {
      setState((prev) => ({
        ...prev,
        error: true,
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      submitting: true,
    }));

    //check to see if form is valid
    checkFormValidity();
  };

  const changeHandler = (e) => {
    const name = e.target.getAttribute("name");
    const newState = { ...state };
    newState.message[name] = e.target.value;
    setState(newState);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Contact Agent</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {attributionInfo.agentName}
        </Card.Subtitle>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="fullname"
              value={state.message.fullname}
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              id="phone"
              name="phone"
              value={state.message.phone}
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={state.message.email}
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              value={state.message.message}
              onChange={changeHandler}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Contact Agent
          </Button>
        </Form>
        {state.isSubmitted && (
          <Alert className="mt-4" variant="light">
            Message Sent to Agent!
          </Alert>
        )}
        {state.error && (
          <Alert className="mt-4" variant="warning">
            Please Try Again. Message not Sent
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}
