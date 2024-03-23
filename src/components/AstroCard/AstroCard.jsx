import React from 'react';
import './AstroCard.css';

const AstroCard = ( {astros} ) => {
console.log(astros);

  return (
    <div className="container astro_container grid">
        {astros && astros.map((astro, index) => (
            <div className="astro astro_card" key={index}>
              <div className="astro astro_cover">
                <img className="astro astro_image" src={astro.profile_image} />
              </div>
                <a href={astro.wiki} target='_blank'><h3 className="astro astro_name">{astro.name}</h3></a>
                <h6 className="astro astro_bio">{astro.bio}</h6>
                {console.log(astro.age)}
            </div>
        ))}
    </div>
  );
};

export default AstroCard;
