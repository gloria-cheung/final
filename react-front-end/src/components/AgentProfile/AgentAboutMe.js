import React from "react";

export default function AgentAboutMe({ data }) {
  return (
    <>
      <h2>Bio</h2>
      <div>{data ? data.about.description : null}</div>
    </>
  );
}
