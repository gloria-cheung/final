import React from "react";
import classes from "./AgentInfo.module.css";

export default function AgentInfo() {
  return (
    <aside>
      <div className={classes.infoContainer}>
        <h4>Professional Information</h4>
        <div className={classes.brokerContainer}>
          <div>Broker:</div>
          <div>Century 21 Foothills Real Estate</div>
        </div>
        <div className={classes.cellphoneNumberContainer}>
          <div>Cell phone:</div>
          <div>(403) 123-4567</div>
        </div>
        <div className={classes.brokerphoneNumberContainer}>
          <div>Broker phone:</div>
          <div>(403) 123-4567</div>
        </div>
        <div className={classes.websiteContainer}>
          <div>Websites:</div>
          <div>Website, LinkedIn, Facebook</div>
        </div>
        <div className={classes.usernameContainer}>
          <div>Username:</div>
          <div>katrina-warkman</div>
        </div>
        <div className={classes.membersinceContainer}>
          <div>Member since:</div>
          <div>10/18/2018</div>
        </div>
      </div>
    </aside>
  );
}
