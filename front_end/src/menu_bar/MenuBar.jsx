import React from "react";
import './menu.css'
import {Room} from "@material-ui/icons"

class MenuBar extends React.Component{
    render(){

        return(
        <div className="MenuBar">
            <details>
            <summary></summary>
                <nav class="menu">
                    <a>Bars</a>
                    <a>Restaurant</a>
                    <a>Musée</a>
                    <a>Endroit exotique</a>
                    <a>Parc attraction</a>
                    <a>....</a>
                </nav>
            </details>
        </div>);
    }
}



export default MenuBar;