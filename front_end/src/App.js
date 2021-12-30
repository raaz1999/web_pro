import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import MenuBar from './menu_bar/MenuBar.jsx'
import './App.css'
import Register from './register/Register.jsx';
import Login from './Login/Login.jsx'

function App() {
  const [viewport, setViewport] = useState({
    latitude: 48.856614,
    longitude: 2.3522219,
    zoom: 11.5
  });

  const [currentUser, setCurrentUser]=useState(null);

  const [openRegister, setopenRegister]=useState(false);
  const [openLogin, setopenLogin]=useState(false);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
       mapStyle="mapbox://styles/mapbox/dark-v10"
        >
        <MenuBar/>


        {currentUser? ( <button className='LogoutButton' >Logout</button>)
        :( 
        <div className='notconnected'>
          <button className='LoginButton' onClick={() => setopenLogin(true)}>Login</button>
          <button className='RegisterButton' onClick={() => setopenRegister(true)}>Register</button>
        </div>
        )}


        {openRegister && (<Register setopenRegister={setopenRegister} />)}
        {openLogin && (<Login setopenLogin={setopenLogin} />)}
       
      </ReactMapGL>
    </div>
  );
}

export default App;
