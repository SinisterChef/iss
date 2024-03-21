import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
//importing this as direct url refercing it from the iconUrl property caused an error for some reason
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
 
  useEffect(() => {
   const fetchData = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then((data) => { 
        setCoords(data.iss_position);
        setLoading(false);
      });
      //then runs sequenctiall through all the commands
      //fetch URL
      //Parse the data
      //take that data and do something with it
      //useEffect is a React Hook that lets you synchronize a component with an external system. 
    }
    //intial call
    fetchData();
    //contining call
    const intervalId = setInterval(fetchData, 1000);
    //clean up upon re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    }, []);

if (loading) {
  return <div>Loading... if this takes longer than 5 second you probably have to reload the page with http only. The Notify API doesn't support https</div>
}

  return (
  // <div>
  //     <p>ISS Location =====</p>
  //     {coords && ( //&& render only if position has data, or truthy
  //         <div>
  //             <p>latitude: {coords.latitude}</p>
  //             <p>longitude: {coords.longitude}</p>
  //         </div>
  //     )}
  // </div>
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
      <Popup>
        ISS Location <br /> Latitude: {coords.latitude} <br /> Longitude: {coords.longitude}
      </Popup>
    </Marker>
  </MapContainer>
  );
};
export default Map;