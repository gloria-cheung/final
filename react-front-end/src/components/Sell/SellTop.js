import React from "react";
import { Card } from "react-bootstrap/";
import "./SellTop.scss";

export default function SellTop() {
  return (
    <Card>
      <Card.Img
        className="sellTopImage"
        src="https://images.unsplash.com/photo-1631888415289-f54436f81d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80"
        alt="cardBackground"
      />
      <Card.ImgOverlay>
        <Card.Title className="sellTopTitle" as="h1">
          Sell Your Home with Confidence.
        </Card.Title>
        <Card.Text className="sellTopText" as="h5">
          Home Finder makes it easy to sell your home.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
