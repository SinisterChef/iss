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
    }, []);

    const fetchImage = async (query) => {
      const apiKey = '7052fabd1cea4af4bbbebad8c5531910';
      const endpoint = 'https://api.bing.microsoft.com/v7.0/images/search';
      const safeSearch = 'Off';
      const count = 1;

      const responseImage = await fetch(`${endpoint}?q=${encodeURIComponent(query)}&count=${count}&safeSearch=${safeSearch}`, {
        method: "GET",
        //header'S' not just header
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey
        },
      });

      const image = await responseImage.json();
      console.log(image.value[0].contentUrl);
      return image.value[0].contentUrl;
    }

  //   useEffect(() => {
  //     if (astros.length > 0) {
  //         const fetchImagesBatched = async () => {
  //             const batchedPromises = [];
  //             for (let i = 0; i < astros.length; i++) {
  //                 const astro = astros[i];
  //                 batchedPromises.push(fetchImage(astro.name));
  //                 if ((i + 1) % 2 === 0 || i === astros.length - 1) {
  //                     // When 3 requests have been added to the batch or it's the last iteration
  //                     // Perform the batched fetch and wait before proceeding to the next batch
  //                     await Promise.all(batchedPromises);
  //                     batchedPromises.length = 0; // Clear the batched promises array
  //                     if (i !== astros.length - 1) {
  //                         // If it's not the last iteration, wait for 1 second before the next batch
  //                         await new Promise(resolve => setTimeout(resolve, 1000));
  //                     }
  //                 }
  //             }
  //         };
  
  //         fetchImagesBatched()
  //             .then(images => {
  //                 setPortrait(images);
  //             })
  //             .catch(error => {
  //                 console.error('Error fetching images:', error);
  //             });
  //     }
  // }, [astros]);

    //fetchImage('Jasmin Moghbeli');

// const imageSrcArr = astros.map((astro, index) => {
//   imageSrcArr[index] = fetchImage(astro.name)
// })

//Make a function call to fetchImage with astro.name to return a single imageURL
  return (
    <div>
        <p>Ass in Space =====</p>
        {astros && astros.map((astro, index) => (
            <div class="astro astro_card">
                <p class="astro astro_name">{astro.name}</p>
                <p class="astro astro_ship">{astro.craft}</p>
            </div>
            //Each items needs to be wrapped in a single parent element
        ))}
    {/* <div>
      {portraits.map((portrait, index) => (
        <div key={index}>
          <p>{portrait.contentUrl}</p>
          <img src={portrait.contentUrl} alt={`Portrait ${index}`} />
        </div>
      ))}
    </div> */}
    </div>
  );
};
export default AstroCard;

//                <img src={fetchImage(astro.name)} alt={`Portrait ${index}`} />

//BING API KEY
//00640be40b0649c3963ae7bb3d4c2094

//END POINT
//https://api.bing.microsoft.com/