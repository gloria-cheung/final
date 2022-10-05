import React from "react";
import parse from "html-react-parser";
import "./AgentAboutMe.scss";

export default function AgentAboutMe({ data }) {
  return (
    <>
      <h2>Bio</h2>
      <div className="agentBio">
        {data ? parse(data.about.description) : null}
      </div>
    </>
  );
}
