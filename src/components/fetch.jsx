import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './fetch.css';

const Fetch = () => {
  const [coords, setCoords] = useState([]);
 
  useEffect(() => {
   const fetchData = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then((data) => { 
        setCoords(data.iss_position);
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
    center={[51.505, -0.09]} 
    zoom={2} 
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
};
export default Fetch;