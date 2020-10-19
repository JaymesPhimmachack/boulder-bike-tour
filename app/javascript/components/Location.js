import React from "react";
import styled from "styled-components";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import cyclistImage from "../../assets/images/cyclist.png";

const cyclist = new L.Icon({
  iconUrl: cyclistImage,
  iconSize: [25, 25],
});

const StyledLocation = styled.div`
  @media (max-width: 1150px) {
    margin: 0 20px;
  }
`;

const Location = ({ riders }) => {
  return (
    <StyledLocation>
      <Map
        center={[39.98, -105.23]}
        zoom={11}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {riders.map(({ latitude, longitude, id, first_name, last_name }) => (
          <Marker position={[latitude, longitude]} icon={cyclist} key={id}>
            <Popup>
              {first_name} {last_name}
            </Popup>
          </Marker>
        ))}
      </Map>
    </StyledLocation>
  );
};

export default Location;
