import React from "react";
import "./register.css";
import {Room} from "@material-ui/icons";

class Register extends React.Component {
    render(){
        return(
            <div className="registerContainer">
                <div className="logo">
                    RLmap: Register
                </div>
                <div className="registerInput" /*onSubmit={handleSubmit}*/>

                    <input autoFocus id="nom" placeholder="username" /*ref={usernameRef}*/ /><br/>
                    <input type="email" id="email" placeholder="email" /*ref={emailRef}*/ /><br/>
                    <input type="password" id="motdepasse" min="6" placeholder="password"/><br/>

                </div>


                <button className="registerBtn" type="submit">
                        Register
                </button>
                
           </div>
        )
    }
}


export default Register;
