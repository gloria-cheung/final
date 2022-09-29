import React, { Fragment } from "react";
import classes from "./AgentsContainer.module.css";
import AgentsContainerItem from "./AgentsContainerItem";
import { v4 as uuidv4 } from "uuid";

export default function AgentsContainer({ data }) {
  let agents;

  if (Object.values(data).length !== 0) {
    agents = data.map((agent) => (
      <AgentsContainerItem
        key={uuidv4()}
        phoneNumber={agent.contact.summary.phone}
        agentName={agent.profileLink.text}
        agentGroup={agent.map.businessName}
        mapImg={agent.map.image.src}
        agentImg={agent.contact.graphic.image.src}
      />
    ));
  }
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.agent}>Agents</div>
          <div className={classes.location}>Location</div>
          <div className={classes.profile}>Profile</div>
        </div>
        {agents}
      </div>
    </React.Fragment>
  );
}
