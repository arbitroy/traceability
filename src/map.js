import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// Import Mapbox GL CSS
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxMap = () => {
  useEffect(() => {
    // Set Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXVzdGluZW5kYXV3YSIsImEiOiJjbGs2b2UzNnQwMTNkM3RwNnNoNHA5empwIn0.1XXNeVtKm_aozdj6FmtTQg';

    // Initialize Mapbox map
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9
    });

    return () => {
      // Cleanup map instance
      map.remove();
    };
  }, []);

  return (
    <div id="map" className='rounded-xl shadow border px-64 py-64'></div>
  );
};

export default MapboxMap;
