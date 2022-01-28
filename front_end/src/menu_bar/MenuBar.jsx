import React from "react";
import './menu.css'
import {Room} from "@material-ui/icons"

class MenuBar extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){

        
        return(
        <div className="MenuBar">
            <details>
                <summary></summary>
                <nav className="menu">
                    <a onClick={()=>{this.props.setCurrentPlace("Restaurant")}}>Restaurant(nodejs json database)</a>
                    <a onClick={()=>{this.props.setCurrentPlace("eve")}}>Evenement(api exterieur)</a>
                    <a onClick={()=>{this.props.setCurrentPlace("user_place")}}>user_place(nodejs nosql)</a>
                    <a onClick={()=>{this.props.setCurrentPlace("")}}>enlever les markeurs</a>
                </nav>
            </details>
        </div>);
    }
}



export default MenuBar;