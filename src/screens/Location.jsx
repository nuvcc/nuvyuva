import React, { useState } from "react";
import { LocationBody, LocationCard, LText } from "../styles/Home/Styles";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  OverlayView,
  useJsApiLoader,
  
} from "@react-google-maps/api";


const Location = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  //22.294675, 73.118827
  const center = {
    position: { lat: 22.294675, lng: 73.118827 },
    label: "Concert Ground",
    link: "https://goo.gl/maps/2cWuZvLZkUgviSX7A",
  };

  const nuv = {
    position: { lat: 22.2925777, lng: 73.1220663 },
    label: "Navrachna University",
    link: "https://goo.gl/maps/S1vgHq82GhJqzwNa8",
  };
  const [centers, setCenter] = useState({...nuv});
  const onLoad = (infoWindow) => {
    // console.log("infoWindow: ", infoWindow);
  };
  return (
    <LocationBody>
      <LText>Location</LText>
      <LoadScript googleMapsApiKey={"AIzaSyDPK4W-mdjPmzRnJAgB63bHm9KiiyZ6bJM"}>
        <GoogleMap  mapContainerStyle={{height: "500px", borderRadius: "30px"}} center={nuv.position} zoom={15}>
           <OverlayView mapPaneName="floatPane"  position={{lat: 22.2925777, lng: 73.1220663}}>
            <InfoWindow position={centers.position}>
            <LocationCard>
              <p>{nuv.label}</p>
              <a target={"_blank"} href={nuv.link}>Get Direction</a>
            <Marker onLoad={onLoad} position={centers.position} />
            </LocationCard>
            </InfoWindow>
            </OverlayView >
        </GoogleMap>
      </LoadScript>
    </LocationBody>
  );
};

export default Location;
