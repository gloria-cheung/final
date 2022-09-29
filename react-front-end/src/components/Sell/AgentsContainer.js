import React, { Fragment } from "react";
import classes from "./AgentsContainer.module.css";
import AgentsContainerItem from "./AgentsContainerItem";

export default function AgentsContainer() {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.agent}>Agents</div>
          <div className={classes.location}>Location</div>
          <div className={classes.profile}>Profile</div>
        </div>
        <AgentsContainerItem />
        <AgentsContainerItem />
        <AgentsContainerItem />
        <AgentsContainerItem />
        <AgentsContainerItem />
        <AgentsContainerItem />
        <AgentsContainerItem />
        <AgentsContainerItem />
        <AgentsContainerItem />
        <AgentsContainerItem />
      </div>
    </React.Fragment>
  );
}
