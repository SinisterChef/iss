import React from 'react';
import './AstroCard.css';

//Creating my own temparoy image array, I will find an API that has this data in it in the 2.0
const astroImg = [
  'https://upload.wikimedia.org/wikipedia/commons/d/dc/Jasmin_Moghbeli_official_portrait.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/f/f0/Andreas_Mogensen_official_portrait.jpg',
  'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/06/satoshi_furukawa/24929995-1-eng-GB/Satoshi_Furukawa_pillars.jpg',
  'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/06/this_is_konstantin_borisov/24930040-1-eng-GB/This_is_Konstantin_Borisov_pillars.jpg',
  'https://www.nasa.gov/wp-content/uploads/2023/10/jsc2023e052791.jpg',
  'https://www.nasa.gov/wp-content/uploads/2023/10/jsc2023e052792.jpg',
  'https://www.nasa.gov/wp-content/uploads/2020/06/jsc2017e114808_0.jpg?w=640'
];

const AstroCard = ( {astros} ) => {
console.log(astros);
//Make a function call to fetchImage with astro.name to return a single imageURL
  return (
    <div className="container astro_container grid">
        {astros && astros.map((astro, index) => (
            <div className="astro astro_card" key={index}>
              <div className="astro astro_cover">
                <img className="astro astro_image" src={astroImg[index]} />
              </div>
                <h3 className="astro astro_name">{astro.name}</h3>
                <h6 className="astro astro_ship">Current Spacecraft: {astro.craft}</h6>
            </div>
        ))}
    </div>
  );
};

export default AstroCard;
