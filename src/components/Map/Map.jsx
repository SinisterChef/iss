import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import rocket from './rocket-solid.svg';

const iconISS = new L.Icon({
  iconUrl: rocket,
  iconRetinaUrl: rocket,
  iconAnchor: null,
  popupAnchor: [-0, -5],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 45)
});

const Map = () => {
  const [coords, setCoords] = useState([]);
  const [loading, setLoading] = useState(true);
 
//https://wheretheiss.at/w/developer

  useEffect(() => {
   const fetchData = () => {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then(response => response.json())
      .then((data) => { 
        setCoords(data);
        setLoading(false);
      });
    }

    //intial call
    fetchData();
    //contining call
    const intervalId = setInterval(fetchData, 3000);
    //clean up upon re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    }, []);

if (loading) {
  return <div className="load">Retrieving ISS coordinate data...</div>
}

  return (
    <MapContainer
    className="iss-map"
    center={[coords.latitude, coords.longitude]} 
    zoom={4} 
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker 
    position={[coords.latitude, coords.longitude]}
    icon={ iconISS }
    >
      <Popup
      autoClose={false}
      >
        ISS Location <br /> Latitude: {Math.round(coords.latitude * 1000)/1000} <br /> Longitude: {Math.round(coords.longitude * 1000)/1000}
      </Popup>
    </Marker>
  </MapContainer>
 
  );
};
export default Map;