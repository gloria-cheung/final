import React from "react";
import classes from "./AgentsContainerItem.module.css";

export default function AgentsContainerItem(props) {
  return (
    <>
      <hr />
      <div className={classes.container}>
        <div className={classes.agentsContainer}>
          <div className={classes.photo}>photo</div>
          <div className={classes.agentName}>Agent Name - Agent Group</div>
          <div className={classes.phoneNumber}>Agent Phone Number</div>
          <div className={classes.group}>Agent Group</div>
        </div>
        <div className={classes.locationContainer}>
          <div className={classes.map}>Image Of Map</div>
        </div>
        <div className={classes.ProfileContainer}>
          <div className={classes.profile}>View Profile</div>
        </div>
      </div>
      <hr />
    </>
  );
}
