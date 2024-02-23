import { useState, useEffect } from 'react';

const AstroList = () => {
  const [astros, setAstros] = useState([]);
 
  useEffect(() => {

    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then((data) => { 
        setAstros(data.people);
      });
    }, []);

  return (
    <div>
        <p>Ass in Space =====</p>
        {astros && astros.map((astro) => (
            <div>
                <p>Name: {astro.name}</p>
                <p>Spaceship: {astro.craft}</p>
            </div>
        ))}
    </div>
  );
};
export default AstroList;