import React from 'react';
import './AstroCard.css';
import image from './place-holder.jpg';

const AstroCard = ( {astros} ) => {
console.log(astros);
//Make a function call to fetchImage with astro.name to return a single imageURL
  return (
    <div className="container astro_container grid">
        {astros && astros.map((astro, index) => (
            <div className="astro astro_card" key={index}>
              <div className="astro astro_cover">
                <img className="astro astro_image" src={image} />
              </div>
                <h3 className="astro astro_name">{astro.name}</h3>
                <h6 className="astro astro_ship">Current Spacecraft: {astro.craft}</h6>
            </div>
        ))}
    </div>
  );
};

export default AstroCard;
