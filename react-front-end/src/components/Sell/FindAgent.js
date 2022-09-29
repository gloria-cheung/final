import React, { useState } from "react";

import axios from "axios";
// import classes from "./FindAgent.module.css";
import SearchBarFindAgent from "./SearchBarFindAgent";
import AgentsContainer from "./AgentsContainer";

export default function FindAgent() {
  const [location, setLocation] = useState("");
  const [agentName, setAgentName] = useState();
  const [specialties, setSpecialties] = useState("Any");
  const [language, setLanguage] = useState("English");
  const [data, setData] = useState({});

  const fetchData = () => {
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/search_agents",
      params: {
        location: location,
        name: agentName,
        specialties: specialties,
        language: language,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <SearchBarFindAgent
        setLocation={setLocation}
        setAgentName={setAgentName}
        setSpecialties={setSpecialties}
        setLanguage={setLanguage}
        submitHandler={submitHandler}
      />
      <AgentsContainer data={data} />
    </div>
  );
}
