import React from "react";
import "../../falconeStyle.module.css";
import PlanetDropDown from "./PlanetDropDown";
class Planet  extends React.Component{
    constructor() {
        super();    
    }
    render() {
        return (
            <div className = "planetsContainer">
            <PlanetDropDown destination = "1"/>
            <PlanetDropDown destination = "2"/>
            {/* <PlanetDropDown destination = "3"/>
            <PlanetDropDown destination = "4"/> */}
            </div>
        )
    }
}
export default Planet;