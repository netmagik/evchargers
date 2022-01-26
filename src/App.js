import './App.css';
import React, {useState, useEffect} from 'react';

//const key = process.env.M3O_API_KEY;

// const key = '';

function App() {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  // const [data, setData] = useState(null);

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

    // fetch('/.netlify/functions/evchargers', {
    //   headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   }
    // })
    // .then(res => {console.log(res.json())});
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const url = 'https://api.m3o.com/v1/evchargers/ReferenceData'
  //     const res = await fetch(url, {
  //       method: 'GET', 
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${key}`
  //       }
  //     });
  //     const json = await res.json();
  //     console.log(json);
  //     setData('fetch');
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const fetchData = async () => {
    fetch('/.netlify/functions/evchargers')
    .then(res => {console.log(res.json())});
  }


  return (
    <div className="App">
     <h1>Hello World</h1>
      <h2>Latitude: {lat}</h2>
      <h2>Longitude: {long}</h2>
      <button
        onClick={fetchData} >
          Fetch Data
      </button>
      
    </div>
  );
}

export default App;
