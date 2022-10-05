import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function AgentsContainerItem(props) {
  const { phoneNumber, agentName, agentGroup, mapImg, agentImg, agentUserName } = props;

  return (
    <tr>
      <th scope="row">

        <img src={agentImg} style={{ borderRadius: "50%" }} alt="agentImage" />

      </th>
      <td className="text-center">
        <h6 className="mt-5">{agentName}</h6>
        <div>{phoneNumber}</div>
        <div>{agentGroup}</div>
      </td>
      <td>

        <img src={mapImg} alt="location" className="mt-2" />

      </td>
      <td>
        <h1 className="mt-5">
          <a href={agentUserName}><FaLongArrowAltRight /></a>
        </h1>
      </td>
    </tr>
  );
}
