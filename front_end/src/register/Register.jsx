import React from "react";
import "./register.css";
import {Cancel} from "@material-ui/icons";
import axios from "axios";

class Register extends React.Component {


    constructor(props){
        super(props)
        this.ref_name=React.createRef();
        this.ref_email=React.createRef();
        this.ref_password=React.createRef();
        this.state={
            "state":""
        }

    }
    async addUser(){
        const data={
            "name":this.ref_name.current.value,
            "password":this.ref_password.current.value,
            "email":this.ref_email.current.value
        }

        await axios.post('http://localhost:4000/User/register',data) 
                .then(response => {
                    this.setState({
                        "state":"register complet !"
                    })
                    console.log("yes")
                }).catch(e=>{
                  console.log(e)
                  this.setState({
                    "state":"the identifiers exist already !"
                })
                })
    }

    render(){
        return(
            <div className="registerContainer">
                <div className="logo">
                    RLmap: Register
                </div>
                <div className="registerInput" /*onSubmit={handleSubmit}*/>

                    <input autoFocus id="nom" placeholder="username" ref={this.ref_name} required/><br/>
                    <input type="email" id="email" placeholder="email" ref={this.ref_email} required/><br/>
                    <input type="password" id="motdepasse" min="6" placeholder="password" ref={this.ref_password} required/><br/>

                </div>

                <em >{this.state.state}</em>

                <button className="registerBtn" type="submit" onClick={()=>{this.addUser()}}>
                        Register
                </button>


                <Cancel className="registerCancel" onClick={() => this.props.setopenRegister(false)}/>
           </div>
        )
    }
}


export default Register;
