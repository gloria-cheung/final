import React from "react";
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
      <table className="table table-responsive mt-5 mx-auto">
        {agents && (
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Agent</th>
              <th scope="col">Location</th>
              <th scope="col">Profile</th>
            </tr>
          </thead>
        )}
        <tbody>{agents}</tbody>
      </table>
    </React.Fragment>
  );
}
