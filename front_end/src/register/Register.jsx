import React from "react";
import "./register.css";
import {Cancel} from "@material-ui/icons";

class Register extends React.Component {


    constructor(props){
        super(props)
    }


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
                <Cancel
                className="registerCancel"
                onClick={() => this.props.setopenRegister(false)}
                />
           </div>
        )
    }
}


export default Register;
