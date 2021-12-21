import React from "react";
import './menu.css'


class MenuBar extends React.Component{
    render(){

        return(
        <div className="MenuBar">
            <details>
            <summary></summary>
                <nav class="menu">
                    <a href="#link">Home</a>
                    <a href="#link">Work</a>
                    <a href="#link">Links</a>
                    <a href="#link">Contact</a>
                    <a href="#link">About</a>
                </nav>
            </details>
        </div>);
    }
}



export default MenuBar;