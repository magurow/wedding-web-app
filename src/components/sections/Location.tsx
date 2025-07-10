import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Location.module.css";
import L from "leaflet";

// Leaflet's default icon path can be broken in React, so we fix it manually.
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const position: [number, number] = [39.9086, 32.8539]; // Ankara, Çankaya coordinates

const Location: React.FC = () => {
  return (
    <section id="location" className={styles.location}>
      <h2 className={styles.title}>Konumumuz</h2>
      <div className={styles.mapContainer}>
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Düğün Sarayı <br /> Çankaya, Ankara.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Location;
