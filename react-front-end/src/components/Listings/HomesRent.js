import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Loading from "../Loading";
import MapContainer from "./MapContainer";
import ListingContainer from "./ListingContainer";
import { Row, Container, Col } from "react-bootstrap";
import axios from "axios";

export default function Homes_Rent() {
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("0");
  const [baths, setBaths] = useState("0");
  const [data, setData] = useState({});
  const [homeType, setHomeType] = useState({
    isSingleFamily: true,
    isMultiFamily: true,
    isApartment: true,
    isCondo: true,
    isTownhouse: true,
  });
  const [loading, setLoading] = useState(false);
  const [markers, setMarkers] = useState([]);

  const fetchData = () => {
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/search",
      params: {
        location: location,
        beds_min: beds,
        baths_min: baths,
        ...homeType,
        status: "forRent",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        // filter out from API any data that has no long and lat values
        let filteredMarkersArr = res.data.results.filter(
          (listing) => listing.latitude && listing.longitude
        );
        let markersArr = filteredMarkersArr.map((listing) => ({
          lat: listing.latitude,
          lng: listing.longitude,
          zpid: listing.zpid,
        }));
        setMarkers(markersArr);
        setData(res.data.results);
        setLoading(false);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };

  return (
    <Container>
      <SearchBar
        submitHandler={submitHandler}
        setBaths={setBaths}
        setBeds={setBeds}
        setLocation={setLocation}
        setHomeType={setHomeType}
      />
      <Row className="p-0 m-0 border-top">
        {loading && <Loading />}
        <Col>{markers.length > 0 && <MapContainer markers={markers} />}</Col>
        <Col>
          <ListingContainer data={data} />
        </Col>
      </Row>
    </Container>
  );
}
