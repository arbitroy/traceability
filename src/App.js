import React, { useEffect, useState } from 'react';

import './App.css';
import Navbar from './Navbar';
import DashBoard from './dashboard';

function App() {
  const [licenceid, setLicenseid] = useState('');
  const [guid, setGuid] = useState('');

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
  }, []);

  const handlePostRequest = () => {
    const url = 'http://localhost:8083/jspost';

    // Create the JSON object with the licenseid and guid
    const data = {
      licenceid: licenceid,
      guid: guid,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server if needed
        console.log('Response from server:', data);
      })
      .catch((error) => {
        // Handle any errors that occur during the POST request
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-8">
        <DashBoard />
        <button onClick={handlePostRequest}>Send POST Request</button>
      </div>
    </>
  );
}

export default App;