import { useState, useEffect } from 'react';

const AstroCard = () => {
const [astros, setAstros] = useState([]);
const [portraits, setPortrait] = useState([]);
 
  useEffect(() => {

    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then((data) => { 
        setAstros(data.people);
      });

    const fetchImage = async () => {
      const apiKey = '7052fabd1cea4af4bbbebad8c5531910';
      const endpoint = 'https://api.bing.microsoft.com/v7.0/images/search';
      const query = 'Latina-Asses';
      const safeSearch = 'Off';
      const count = 10;

      const responseImage = await fetch(`${endpoint}?q=${encodeURIComponent(query)}&count=${count}&safeSearch=${safeSearch}`, {
        method: "GET",
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey
        },
      });

      const images = await responseImage.json();
      setPortrait(images.value);
      //const imageUrls = images.value.map(image => image.contentUrl);
      console.log(images.value);
      //{images.map(image => console.log(image))}
    }
    fetchImage();
    }, []);



  return (
    <div>
        <p>Ass in Space =====</p>
        {astros && astros.map((astro) => (
            <div class="astro astro_card">
                <p class="astro astro_name">{astro.name}</p>
                <p class="astro astro_ship">{astro.craft}</p>
            </div>
            //Each items needs to be wrapped in a single parent element
        ))}
    <div>
      {portraits.map((portrait, index) => (
        <div key={index}>
          <p>{portrait.contentUrl}</p>
          <img src={portrait.contentUrl} alt={`Portrait ${index}`} />
        </div>
      ))}
    </div>
    </div>
  );
};
export default AstroCard;


//BING API KEY
//00640be40b0649c3963ae7bb3d4c2094

//END POINT
//https://api.bing.microsoft.com/