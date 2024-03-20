import Map from '../components/Map';
import AstroCard from '../components/AstroCard';
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
      <AstroCard astros={astros} />
    </div>
  )
}
