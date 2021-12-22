import React from "react";
import './menu.css'


class MenuBar extends React.Component{
    render(){

        return(
        <div className="MenuBar">
            <details>
            <summary></summary>
                <nav class="menu">
                    <a href="#link">Bars</a>
                    <a href="#link">Restaurant</a>
                    <a href="#link">Musée</a>
                    <a href="#link">Endroit exotique</a>
                    <a href="#link">Parc attraction</a>
                    <a href="">....</a>
                </nav>
            </details>
        </div>);
    }
}



export default MenuBar;