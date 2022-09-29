import React from "react";
import classes from "./AgentProfileHeading.module.css";

export default function AgentProfileHeading() {
  return (
    <div className={classes.container}>
      <img
        className={classes.photo}
        src="https://photos.zillowstatic.com/h_l/ISegxgknuttqcw0000000000.jpg"
        alt="agent"
      />
      <div className={classes.info}>
        <div className={classes.heading}>Katrina Warkman - Associate</div>
        <div className={classes.group}>Century 21 Foothills Real Estate</div>
        <div className={classes.rating}>
          <span role="img" aria-labelledby="stars">
            ⭐⭐⭐⭐⭐
          </span>{" "}
          5.0 | 3 Reviews
        </div>
      </div>
    </div>
  );
}
