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
                <a onClick={()=>{this.props.setCurrentPlace("Restaurant")}}>Restaurant</a>
                <a onClick={()=>{this.props.setCurrentPlace("eve")}}>Evenement</a>
                <a onClick={()=>{this.props.setCurrentPlace("user_place")}}>user_place</a>
                <a onClick={()=>{this.props.setCurrentPlace("Endroit_exotique")}}>Endroit exotique</a>
                <a onClick={()=>{this.props.setCurrentPlace("Parc")}}>Parc attraction</a>
                <a onClick={()=>{this.props.setCurrentPlace("All")}}>all</a>   
                   
                </nav>
            </details>
        </div>);
    }
}



export default MenuBar;