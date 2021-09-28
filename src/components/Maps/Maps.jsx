import React from "react";
import './Maps.css';
import img from '../image/rouute.png'

export default function Maps(){
    return(
        <div >
              <img  src={img} className="maps" />
        </div>
    )
}
// import React, { useState } from 'react';
// import './Maps.css';

//   const Maps = () => {
//   const [lat, setLat] = useState(null);
//   const [lng, setLng] = useState(null);
//   const [status, setStatus] = useState(null);

//   const getLocation = () => {
//     if (!navigator.geolocation) {
//       setStatus('Geolocation is not supported by your browser');
//     } else {
//       setStatus('Locating...');
//       navigator.geolocation.getCurrentPosition((position) => {
//         setStatus(null);
//         setLat(position.coords.latitude);
//         setLng(position.coords.longitude);
//       }, () => {
//         setStatus('Unable to retrieve your location');
//       });
//     }
//   }

//   return (
//     <div className="Maps">
//       <button onClick={getLocation}>Get Location</button>
//       <h1>Coordinates</h1>
//       <p>{status}</p>
//       {lat && <p>Latitude: {lat}</p>}
//       {lng && <p>Longitude: {lng}</p>}
//     </div>
//   );
// }

// export default Maps;
