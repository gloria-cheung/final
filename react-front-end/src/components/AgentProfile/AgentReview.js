import React from "react";

import "./AgentReview.scss";

export default function AgentReview(props) {
  const { name, workDone, reviewBody, reviewBodyExtra } = props;
  return (
    <>
      <div className="reviewContainer">
        <h5>Highly likely to recommend | 5.0 ⭐️ </h5>
        <div>{name}</div>
        <div>{workDone}</div>
        <br />
        <div>⭐️⭐️⭐️⭐️⭐️ - Local Knowledge</div>
        <div>⭐️⭐️⭐️⭐️⭐️ - Process Expertise</div>
        <div>⭐️⭐️⭐️⭐️⭐️ - Responsiveness</div>
        <div>⭐️⭐️⭐️⭐️⭐️ - Negotiation Skills</div>
        <br />
        <div className="reviewBody">
          {reviewBody}
          {reviewBodyExtra}
        </div>
      </div>
    </>
  );
}

{
  /* <React.Fragment>
      <hr />
      <Row>
        <h5>Highly likely to recommend | 5.0 ⭐️</h5>
      </Row>
      <Row>
        <div>"reviewerDisplayName"</div>
      </Row>
      <Row>
        <div>"revieweeWorkDone"</div>
      </Row>
      <Row className="mt-2">
        <div>⭐️⭐️⭐️⭐️⭐️ - Local Knowledge</div>
      </Row>
      <Row>
        <div>⭐️⭐️⭐️⭐️⭐️ - Process Expertise</div>
      </Row>
      <Row>
        <div>⭐️⭐️⭐️⭐️⭐️ - Responsiveness</div>
      </Row>
      <Row>
        <div>⭐️⭐️⭐️⭐️⭐️ - Negotiation Skills</div>
      </Row>
      <Row>
        <div>
          This is my second time I have sold a house with Katrina. She did an
          outstanding job once again with communication, representation, and
          marketing to ensure I had good exposure. By keeping a finger on the
          pulse of our area real estate activity, she was able provide me with
          professional sound advice to optimize the sale of my home. Would
          highly recommend her services.
        </div>
      </Row>
      <hr className="mt-2" />
    </React.Fragment> */
}
