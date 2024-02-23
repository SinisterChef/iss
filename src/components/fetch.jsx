import { useState, useEffect } from 'react';

const Fetch = () => {
  const [coords, setCoords] = useState([]);
 
  useEffect(() => {
   const fetchData = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then((data) => { 
        setCoords(data.iss_position);
      });
      //then runs sequenctiall through all the commands
      //fetch URL
      //Parse the data
      //take that data and do something with it
      //useEffect is a React Hook that lets you synchronize a component with an external system. 
    }
    //intial call
    fetchData();
    //contining call
    const intervalId = setInterval(fetchData, 1000);
    //clean up upon re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    }, []);

  return (
    <div>
        <p>ISS Location =====</p>
        {coords && ( //&& render only if position has data, or truthy
            <div>
                <p>latitude: {coords.latitude}</p>
                <p>longitude: {coords.longitude}</p>
            </div>
        )}
    </div>
  );
};
export default Fetch;