import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 10000
      }
    );
  }, []);

  const fetchData = () => {
    try {
      
    } catch (error) {
      console.log(error)
    }
    console.log('Fetch');
    setData('fetch');
  }

  return (
    <div className="App">
     <h1>Hello World</h1>
      <h2>Latitude: {lat}</h2>
      <h2>Longitude: {long}</h2>
      <button
        onClick={fetchData}>
          Fetch Data
      </button>
      
    </div>
  );
}

export default App;
