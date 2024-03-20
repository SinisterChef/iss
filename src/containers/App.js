import Map from '../components/Map/Map';
import AstroCard from '../components/AstroCard/AstroCard';
import { useState, useEffect } from 'react';
import './bootstrap.min.css';
import './App.css';


export default function App() {

  const [astros, setAstros] = useState([]);
//const [portraits, setPortrait] = useState([]);
 
  useEffect(() => {

    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then((data) => { 
        console.log(data);
        setAstros(data.people);
      });
    }, []);

  return (
    <div>
      <Map />
      <h2 className='text-center'>There are {astros.length} astronauts in space</h2>
      <AstroCard astros={astros} />
    </div>
  )
}
