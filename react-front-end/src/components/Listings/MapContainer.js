import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./MapContainer.scss";

export default function MapContainer(props) {
  const { markers } = props;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
  });

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
            ></Marker>
          ))}
        </GoogleMap>
      ) : (
        ""
      )}
    </>
  );
}
