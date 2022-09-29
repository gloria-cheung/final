import React from "react";
import classes from "./SellBottom.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SellBottom() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/find-an-agent");
  }
  return (
    <div className={classes.container}>
      <h1>Start Selling with an Agent</h1>
      <Button onClick={clickHandler}>Find an Agent</Button>
    </div>
  );
}
