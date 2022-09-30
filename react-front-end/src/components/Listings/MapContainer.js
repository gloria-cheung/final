import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import ModalContent from "./ModalContent";
import axios from "axios";
import "./MapContainer.scss";

export default function MapContainer(props) {
  const { markers } = props;
  const [reactState, setReactState] = useState({
    show: false,
    data: {},
  });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
  });

  const fetchData = (zpid) => {
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/property",
      params: { zpid: zpid },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setReactState((prev) => ({
          ...prev,
          show: true,
          data: res.data,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClose = () => {
    setReactState((prev) => ({
      ...prev,
      show: false,
    }));
  };

  const handleShow = (zpid) => {
    fetchData(zpid);
  };

  return (
    <>
      {isLoaded && markers.length > 0 ? (
        <GoogleMap
          zoom={8}
          center={{ lat: markers[0].lat, lng: markers[0].lng }}
          mapContainerClassName="map-container"
        >
          {markers.map((item) => (
            <Marker
              key={item.zpid}
              position={{ lat: item.lat, lng: item.lng }}
              onClick={() => {
                handleShow(item.zpid);
              }}
            ></Marker>
          ))}
        </GoogleMap>
      ) : (
        ""
      )}
      <ModalContent
        handleClose={handleClose}
        data={reactState.data}
        show={reactState.show}
      />
    </>
  );
}
