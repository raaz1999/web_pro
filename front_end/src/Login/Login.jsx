import React from "react";
import "./login.css";
import {Cancel} from "@material-ui/icons";
import axios from "axios";

class Login extends React.Component {


    constructor(props){
        super(props)
        this.ref_name=React.createRef();
        this.ref_password=React.createRef();
        this.state={
            "state":""
        }

    }

    async handelogin(){
        
            const data={
                "name":this.ref_name.current.value,
                "password":this.ref_password.current.value,
            }
    
            await axios.post('http://localhost:4000/User/login',data) 
                    .then(response => {
                        if(response.status==201){
                            this.props.setUser(this.ref_name.current.value)
                            this.props.setopenLogin(false)
                            this.props.setopenRegister(false)
                        }else{
                            this.setState({
                                "state":"you didn't enter the right identifiers !"
                            })
                        }
                        

                    }).catch(e=>{
                      this.setState({
                        "state":"you didn't enter the right identifiers !"
                    })
            })
        
    }

    render(){
        return(
            <div className="LoginContainer">
                <div className="logo">
                    RLmap: Login
                </div>
                <div className="LoginInput" /*onSubmit={handleSubmit}*/>
                    <input autoFocus id="nom" placeholder="username" ref={this.ref_name} /*ref={usernameRef}*/ /><br/>
                    <input type="password" id="motdepasse" min="6" placeholder="password" ref={this.ref_password} /><br/>
                </div>

                <em style={{color:'red'}}>{this.state.state}</em>

                <button className="LoginBtn" type="submit" onClick={()=>{this.handelogin()}}>
                        Login
                </button>
                <Cancel
                className="registerCancel"
                onClick={() => this.props.setopenLogin(false)}
                />
           </div>
        )
    }
}


export default Login;
