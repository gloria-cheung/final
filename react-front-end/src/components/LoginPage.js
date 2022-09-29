import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
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

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <Container className="w-50">
      <h2 className="text-center mb-4 mt-2">Log In</h2>
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
        <Button disabled={loading} className="mt-3 w-100" type="submit">
          Log In
        </Button>
      </Form>
      <div className="w-100 text-center mt-3">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/register">Sign up</Link>
      </div>
    </Container>
  );
}
