import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";

import axios from "axios";
import SearchBarFindAgent from "./SearchBarFindAgent";
import AgentsContainer from "./AgentsContainer";
import Loading from "../Loading";

export default function FindAgent() {
  const [location, setLocation] = useState("");
  const [agentName, setAgentName] = useState();
  const [specialties, setSpecialties] = useState("Any");
  const [language, setLanguage] = useState("English");
  const [data, setData] = useState({});
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
        if (error) {
          setError(false);
        }
        setData(res.data);
        setLoading(false);
      })
      .then(setShow(true))
      .then(console.log(data))
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    fetchData();
  };

  return (
    <Container>
      <SearchBarFindAgent
        setLocation={setLocation}
        setAgentName={setAgentName}
        setSpecialties={setSpecialties}
        setLanguage={setLanguage}
        submitHandler={submitHandler}
        show={show}
      />
      {loading && <Loading />}
      {error ? (
        <Alert className="mt-3" variant="primary">
          Error. Please Try Again
        </Alert>
      ) : (
        <AgentsContainer data={data} />
      )}
    </Container>
  );
}
