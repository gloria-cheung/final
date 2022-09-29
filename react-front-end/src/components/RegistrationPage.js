import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    // If password and confirmation password don't match, set an error
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login");
    } catch (e) {
      console.log(e);
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <Container className="w-50">
      <h2 className="text-center mb-4 mt-2">Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
          <Form.Label className="d-flex">Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label className="d-flex">Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} required />
        </Form.Group>
        <Form.Group id="password-confirm">
          <Form.Label className="d-flex">Password Confirmation</Form.Label>
          <Form.Control type="password" ref={passwordConfirmRef} required />
        </Form.Group>
        <Button disabled={loading} className="mt-3 w-100" type="submit">
          Sign Up
        </Button>
      </Form>

      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </Container>
  );
}
