import React from 'react';
import './AstroCard.css';

const AstroCard = ( {astros} ) => {
console.log(astros);
//Make a function call to fetchImage with astro.name to return a single imageURL
  return (
    <div>
        {astros && astros.map((astro, index) => (
            <div className="astro astro_card" key={index}>
                <p className="astro astro_name">{astro.name}</p>
                <p className="astro astro_ship">{astro.craft}</p>
            </div>
        ))}
    </div>
  );
};

export default AstroCard;
