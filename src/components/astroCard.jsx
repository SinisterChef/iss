import { useState, useEffect } from 'react';

const AstroCard = () => {
const [astros, setAstros] = useState([]);
//const [portraits, setPortrait] = useState([]);
 
  useEffect(() => {

    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then((data) => { 
        setAstros(data.people);
      });
    }, []);

//Make a function call to fetchImage with astro.name to return a single imageURL
  return (
    <div>
        <p>There are {astros.length} astronauts in space</p>
        {astros && astros.map((astro, index) => (
            <div class="astro astro_card">
                <p class="astro astro_name">{astro.name}</p>
                <p class="astro astro_ship">{astro.craft}</p>
            </div>
        ))}
    </div>
  );
};

export default AstroCard;
