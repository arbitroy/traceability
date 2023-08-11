import './App.css';

import React, { useEffect, useState } from 'react';
import DashBoard from './dashboard';
import Navbar from './Navbar';

function App() {
  const [licenceid, setLicenseid] = useState('');
  const [guid, setGuid] = useState('');
  const [responseData, setResponseData] = useState(null); // State to store the response data
  const [image, setImage] = useState("");

  useEffect(() => {
    // Function to extract and decode the base64 string
    function decodeBase64String() {
      const path = window.location.pathname;
      const base64String = path.slice(1); // Remove the leading "/"
      const decodedString = atob(base64String); // Decode the base64 string

      // Split the decoded string at the dot (.)
      const parts = decodedString.split('.');

      if (parts.length === 2) {
        const [licenceid, guid] = parts;
        setLicenseid(licenceid);
        setGuid(guid);
      } else {
        console.log('Invalid decoded string format.');
      }
    }

    decodeBase64String(); // Call the function when the component mounts
    if (licenceid && guid) {
      // Only make the POST request when both licenceid and guid are available
      const url = 'http://h2537984.stratoserver.net:22222/jspost';

      // Create the JSON object with the licenseid and guid
      const data = {
        licenceid: licenceid,
        guid: guid,
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((sdata) => {
          // Handle the response from the server and store it in the state
          setResponseData(sdata);

        })
        .catch((error) => {
          // Handle any errors that occur during the POST request
          console.error('Error:', error);
        });
    }
  }, [licenceid, guid]); // Trigger the effect whenever licenceid or guid changes
  useEffect(() => {
    if (responseData && responseData.Country) {
      // Dynamically generate the image URL based on the country
      const countryImage = require(`./assets/${responseData.Country}.jpg`);
      fetch(countryImage)
        .then((response) => response.blob())
        .then((blob) => {
          setImage(URL.createObjectURL(blob));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [responseData]);

  return (
    <div className="bg-fixed bg-center bg-cover min-h-screen" style={{ backgroundImage: `url(${image})` }}>
      <Navbar />
      <div className="flex justify-center items-start min-h-fit">
        <div className="container bg-gray-200 opacity-80 rounded-xl shadow border p-8 m-8">
          <DashBoard data={responseData} /> {/* Pass the response data to Dashboard */}
        </div>
      </div>
    </div>
  );
}

export default App;