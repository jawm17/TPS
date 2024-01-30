import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = (props) => {
  const navigate = useNavigate();
  const [center, setCenter] = useState([30.2672, -97.7431]);

  useEffect(() => {
    if (props.mapCenter) {
      setCenter(props.mapCenter);
    } else {
      setCenter([30.2672, -97.7431]);
    }
  }, [props.mapCenter])

  const markerIcon = L.icon({
    iconUrl: 'https://www.pngall.com/wp-content/uploads/10/Map-Marker-PNG-Image.png', // Replace with the URL or path to your marker icon image
    iconSize: [35, 35],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  const markerPosition = [30.2672, -97.7431]; // Specify the latitude and longitude of the marker position
  const location5 = [30.5788, -97.8531]; // leander
  const location6 = [30.6333, -97.6772]; // georgetown
  const location7 = [30.5083, -97.6789]; // Round Rock
  const location8 = [30.5052, -97.8203]; // Cedar Park
  const location9 = [30.4394 , -97.6200] // Pflugerville
  const location10 = [30.9475, -97.5383] // Salado
  const location11 = [31.1260, -97.9038] // Copperas Cove
  const location12 = [30.6644, -97.9222] // Liberty Hill
  const location13 = [30.7583, -98.2283] // Burnet
  const location14 = [30.5788, -98.2722] // Marble Falls
  const location15 = [30.1902, -98.0867] // Dripping Springs
  const location16 = [29.9975, -98.0986] // Wimberley

  return (
    <div id="blocker" >
      <div id="blocker2">

      </div>
      <MapContainer zoomControl={false} scrollWheelZoom={false} key={center.toString()} center={center} zoom={8} style={{ width: '100%', height: '100%', borderRadius: 8, position: "relative" }} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Add other map components, markers, etc. */}
        <Marker position={markerPosition} icon={markerIcon}>
          <Popup>
            <div>
              <p>Austin</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location5} icon={markerIcon}>
          <Popup>
            <div>
              <p>Leander</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location6} icon={markerIcon}>
          <Popup>
            <div>
              <p>georgetown</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location7} icon={markerIcon}>
          <Popup>
            <div>
              <p>Round Rock</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location8} icon={markerIcon}>
          <Popup>
            <div>
              <p>Cedar Park</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location9} icon={markerIcon}>
          <Popup>
            <div>
              <p>Pflugerville</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location10} icon={markerIcon}>
          <Popup>
            <div>
              <p>Salado</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location11} icon={markerIcon}>
          <Popup>
            <div>
              <p>Copperas Cove</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location12} icon={markerIcon}>
          <Popup>
            <div>
              <p>Liberty Hill</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location13} icon={markerIcon}>
          <Popup>
            <div>
              <p>Burnet</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location14} icon={markerIcon}>
          <Popup>
            <div>
              <p>Marble Falls</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location15} icon={markerIcon}>
          <Popup>
            <div>
              <p>Dripping Springs</p>
            </div>
          </Popup>
        </Marker>

        <Marker position={location16} icon={markerIcon}>
          <Popup>
            <div>
              <p>Wimberley</p>
            </div>
          </Popup>
        </Marker>


      </MapContainer>
    </div>
  );
};

export default MapComponent;
