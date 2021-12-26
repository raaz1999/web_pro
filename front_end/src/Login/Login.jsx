import React from "react";
import "./login.css";
import {Room} from "@material-ui/icons";

class Login extends React.Component {
    render(){
        return(
            <div className="LoginContainer">
                <div className="logo">
                    RLmap: Login
                </div>
                <div className="LoginInput" /*onSubmit={handleSubmit}*/>

                    <input autoFocus id="nom" placeholder="username" /*ref={usernameRef}*/ /><br/>
                    <input type="password" id="motdepasse" min="6" placeholder="password"/><br/>

                </div>


                <button className="LoginBtn" type="submit">
                        Login
                </button>
                
           </div>
        )
    }
}


export default Login;
