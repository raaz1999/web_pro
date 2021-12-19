import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function App() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '1000vh',
    latitude: 48.856614,
    longitude: 2.3522219,
    zoom: 11
  });
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default App;
