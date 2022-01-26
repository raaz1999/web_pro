import * as React from 'react';
import { useState } from 'react';
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import MenuBar from './menu_bar/MenuBar.jsx'
import './App.css'
import axios from "axios";
import {ControlCameraOutlined, Room, Update} from "@material-ui/icons";
import Register from './register/Register.jsx';
import Login from './Login/Login.jsx'
import Resto from './menu_bar/Resto.jsx'
import Evenement from './menu_bar/Evenement.jsx'
import Places from './menu_bar/places.jsx'

function App()  {

  const [viewport, setViewport]=useState({
    latitude: 48.856614,
    longitude: 2.3522219,
    zoom: 11.5
  });

  const [currentUser, setCurrentUser]=useState(null);
  const [currentPlace, setCurrentPlace]=useState(null);
  const [openRegister, setopenRegister]=useState(false);
  const [openLogin, setopenLogin]=useState(false);
  const [newplace, setNewPlace]=useState(null)
  const [adresse, setAdresse] = useState(null);
  const [name, setName] = useState(null);
  const [star, setStar] = useState(0);
  const [desc, setDesc] = useState(null);

  const handleaddclick=(id)=>{
    setNewPlace(id)
  }


  const handel_submit= async (e) => {
    e.preventDefault();
    const newPlace = {
      username: name,
      adr: adresse,
      rating: star,
      lat: newplace.lngLat[1],
      long: newplace.lngLat[0],
    };

    console.log(newPlace)
    
    try {
      const res = await axios.post("http://localhost:4000/place/newplace", newPlace);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onDblClick={handleaddclick}
        >
        <MenuBar setCurrentPlace={setCurrentPlace} />

        
        {currentUser? (<button className='LogoutButton' onClick={()=>{setCurrentUser(null); setopenLogin(false); setopenRegister(false)}}>Logout</button>)
        :( 
        <div className='notconnected'>
          <button className='LoginButton' onClick={() => setopenLogin(true)}>Login</button>
          <button className='RegisterButton' onClick={() => setopenRegister(true)}>Register</button>
        </div>
        )}


        {openRegister && (<Register setopenRegister={setopenRegister} />)}
        {openLogin && (<Login setopenLogin={setopenLogin} setopenRegister={setopenRegister} setopenLogin={setopenLogin} setUser={setCurrentUser} />)}    
        {(currentPlace==="Restaurant")&&(<Resto vue={viewport}/>)}
        {(currentPlace==="eve")&&(<Evenement vue={viewport}/>)}
        {(currentPlace==="user_place")&&(<Places vue={viewport}/>)}
        {newplace && currentUser && (
          <>
            <Marker
              latitude={newplace.lngLat[1]}
              longitude={newplace.lngLat[0]}
              offsetLeft={-11 }
              offsetTop={-20 }
            >
              <Room
                style={{
                  fontSize: 2 * viewport.zoom,
                  color: "tomato",
                  cursor: "pointer",
                }}
              />
            </Marker>
            <Popup
              latitude={newplace.lngLat[1]}
              longitude={newplace.lngLat[0]}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setNewPlace(null)}
              anchor="left"
            >
              <div>
                <form onSubmit={handel_submit}>
                <label>Adresse</label><br/><br/>
                  <input
                    placeholder="Enter a adresse"
                    autoFocus
                    onChange={(e) => setAdresse(e.target.value)}
                  /><br/><br/>
                  <label>Name</label><br/><br/>
                  <input
                    placeholder="Enter a name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  /><br/><br/>
                  <label>Description</label><br/><br/>
                  <textarea
                    placeholder="Say us something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  /><br/><br/>

                  
                  <label>Rating</label><br/><br/>
                  <select onChange={(e) => setStar(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select><br/><br/>
                  <button type="submit" className="submitButton" >
                    ajouter
                  </button>
                </form>
              </div>
            </Popup>
          </>
        )}
      </ReactMapGL>
    </div>
  );
}

export default App;
