import React from "react";
import classes from "./AgentsContainerItem.module.css";

export default function AgentsContainerItem(props) {
  const { data, phoneNumber, agentName, agentGroup, mapImg, agentImg } = props;
  console.log(data);
  return (
    <>
      <hr />
      <div className={classes.container}>
        <div className={classes.agentsContainer}>
          <img className={classes.photo} src={agentImg} />
          <div className={classes.agentName}>{agentName}</div>
          <div className={classes.phoneNumber}>{phoneNumber}</div>
          <div className={classes.group}>{agentGroup}</div>
        </div>
        <div className={classes.locationContainer}>
          <img className={classes.map} src={mapImg} />
        </div>
        <div className={classes.ProfileContainer}>
          <div className={classes.profile}>View Profile</div>
        </div>
      </div>
    </>
  );
}
