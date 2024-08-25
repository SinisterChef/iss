import Map from '../components/Map/Map';
import AstroCard from '../components/AstroCard/AstroCard';
import { useState, useEffect } from 'react';
import './bootstrap.min.css';
import './App.css';


export default function App() {

  const [astros, setAstros] = useState([]);
 
  useEffect(() => {
    //prod https://ll.thespacedevs.com/2.2.0/astronaut/?in_space=true
      fetch('https://lldev.thespacedevs.com/2.2.0/astronaut/?age__gt=10&in_space=true')
      .then(response => response.json())
      .then((data) => { 
        setAstros(data.results);
      });
    }, []);

  return (
    <div>
      <Map />
      <div className="background-container">
      <h2 className='text-center hero-text'>
        {astros ? `There are ${astros.length} astronauts in space` : "Loading"}
      </h2>
        <AstroCard astros={astros} />
        <p className="text-center"><small>The astronaut API is usually out of date. This project is just for demonstration purposes.</small></p>
      </div> 
    </div>
  )
}
