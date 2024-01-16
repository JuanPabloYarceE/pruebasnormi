import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const [clickedLocation, setClickedLocation] = useState(null);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setClickedLocation({ lat, lng });
    console.log(`Latitud: ${lat}, Longitud: ${lng}`);
  };

  const center = [40.7128, -74.006];

  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div>
      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          onClick={handleMapClick}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {clickedLocation && (
            <Marker position={clickedLocation} icon={customIcon}>
              <Popup>
                <b>Lugar clicado</b>
                <br />
                Latitud: {clickedLocation.lat}, Longitud: {clickedLocation.lng}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      

      <h1>daisdisaj</h1>
      {clickedLocation && (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <h4>Coordenadas del último clic:</h4>
          <p>Latitud: {clickedLocation.lat}</p>
          <p>Longitud: {clickedLocation.lng}</p>
        </div>
      )}
    </div>
  );
};

export default MapView;
