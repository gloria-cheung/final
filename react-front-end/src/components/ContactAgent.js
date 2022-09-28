import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function ContactAgent() {
  const [state, setState] = useState({
    message: { fullname: "", phone: "", email: "", message: "" },
    submitting: false,
    error: false,
  });

  const fetchSMS = () => {
    axios
      .post("http://localhost:8080/api/messages", state.message)
      .then((res) => {
        console.log(res);
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
          });
        } else {
          setState({
            error: true,
            submitting: false,
          });
        }
      });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      submitting: true,
    }));

    fetchSMS();
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
        <Card.Subtitle className="mb-2 text-muted">agent name</Card.Subtitle>
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
      </Card.Body>
    </Card>
  );
}
