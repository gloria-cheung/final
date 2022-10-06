import React from "react";

import "./AgentReview.scss";

export default function AgentReview(props) {
  const { name, workDone, reviewBody, reviewBodyExtra } = props;
  return (
    <>
      <div className="reviewContainer">
        <h5>
          Highly likely to recommend | 5.0{" "}
          <span role="img" aria-labelledby="star">
            ⭐️
          </span>{" "}
        </h5>
        <div>{name}</div>
        <div>{workDone}</div>
        <br />
        <div>
          <span role="img" aria-labelledby="star">
            ⭐️⭐️⭐️⭐️⭐️
          </span>
          - Local Knowledge
        </div>
        <div>
          <span role="img" aria-labelledby="star">
            ⭐️⭐️⭐️⭐️⭐️
          </span>
          - Process Expertise
        </div>
        <div>
          <span role="img" aria-labelledby="star">
            ⭐️⭐️⭐️⭐️⭐️
          </span>
          - Responsiveness
        </div>
        <div>
          <span role="img" aria-labelledby="star">
            ⭐️⭐️⭐️⭐️⭐️
          </span>
          - Negotiation Skills
        </div>
        <br />
        <div className="reviewBody">
          {reviewBody}
          {reviewBodyExtra}
        </div>
      </div>
    </>
  );
}
