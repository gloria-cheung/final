import React from "react";
import classes from "./AgentProfile.module.css";
import AgentProfileHeading from "./AgentProfileHeading";
import AgentInfo from "./AgentInfo";

export default function AgentProfile() {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.col1}>
          <AgentProfileHeading />
          <h4>About me</h4>
        </div>
        <div className={classes.col2}>
          <AgentInfo />
        </div>
      </div>
    </React.Fragment>
  );
}
