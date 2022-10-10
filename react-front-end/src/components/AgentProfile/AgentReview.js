import React from "react";

import "./AgentReview.scss";

export default function AgentReview(props) {
  const {
    name,
    workDone,
    reviewBody,
    reviewBodyExtra,
    overallRatingDescription,
    overallRating,
    localKnowledgeRating,
    processExpertiseRating,
    responsivenessRating,
    negotiationSkillsRating,
  } = props;

  const subRatings = (amount) => {
    if (amount === "500") return "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
    if (amount === "400") return "⭐️⭐️⭐️⭐️";
    if (amount === "300") return "⭐️⭐️⭐️";
    if (amount === "200") return "⭐️⭐️";
    if (amount === "100") return "⭐️";
  };

  return (
    <>
      <hr />
      <div className="reviewContainer">
        <h5>
          {overallRatingDescription} | {overallRating.slice(0, 1)}.0
          <span role="img" aria-labelledby="star">
            ⭐️
          </span>{" "}
        </h5>
        <div>{name}</div>
        <div>{workDone}</div>
        <div className="starsContainer">
          <div className="localKnowledge">
            <span role="img" aria-labelledby="star">
              {subRatings(localKnowledgeRating)}
            </span>
            <div className="heading"> Local Knowledge</div>
          </div>
          <div className="localKnowledge">
            <span role="img" aria-labelledby="star">
              {subRatings(processExpertiseRating)}
            </span>
            <div className="heading"> Process Expertise</div>
          </div>
          <div className="localKnowledge">
            <span role="img" aria-labelledby="star">
              {subRatings(responsivenessRating)}
            </span>
            <div className="heading"> Responsiveness</div>
          </div>
          <div className="localKnowledge">
            <span role="img" aria-labelledby="star">
              {subRatings(negotiationSkillsRating)}
            </span>
            <div className="heading"> Negotiation Skills</div>
          </div>
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
