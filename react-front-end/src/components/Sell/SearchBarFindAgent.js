import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

export default function SearchBarFindAgent({
  submitHandler,
  setLocation,
  setAgentName,
  setSpecialties,
  setLanguage,
}) {
  return (
    <div className="ms-2 mt-2 pb-2">
      <Form size="sm" onSubmit={submitHandler}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              size="sm"
              type="text"
              placeholder="Location"
              id="location"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Control
              size="sm"
              type="text"
              id="beds"
              name="beds"
              placeholder="Agent Name"
              onChange={(e) => setAgentName(e.target.value)}
            ></Form.Control>
          </Col>
          <Col xs="auto">
            <Form.Select
              size="sm"
              id="specialties"
              name="specialties"
              onChange={(e) => setSpecialties(e.target.value)}
            >
              <option value="Any">Any</option>
              <option value="BuyersAgent">Buyer's Agent</option>
              <option value="ListingAgent">Listing Agent</option>
              <option value="Relocation">Relocation</option>
              <option value="Foreclosure">Foreclosure</option>
              <option value="ShortSale">Short-Sale</option>
              <option value="Consulting">Consulting</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select
              size="sm"
              id="language"
              name="language"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="Bengal">Bengali</option>
              <option value="Cantonese">Cantonese</option>
              <option value="Farsi">Farsi</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Greek">Greek</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Hindi">Hindi</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Korean">Korean</option>
              <option value="Mandarin">Mandarin</option>
              <option value="Polish">Polish</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Russian">Russian</option>
              <option value="Spanish">Spanish</option>
              <option value="Tagalog">Tagalog</option>
              <option value="Thai">Thai</option>
              <option value="Turkish">Turkish</option>
              <option value="Vietnamese">Vietnamese</option>
            </Form.Select>
          </Col>

          <Col xs="auto">
            <Button type="submit" size="sm">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
