import React from "react";
import "../../falconeStyle.module.css";
import PlanetDropDown from "./PlanetDropDown";
class Planet  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {planetsData:this.props.planetsData || []}
    }
    render() {
        return (
            <div className = "planetsContainer">
            <PlanetDropDown planets = {this.state.planetsData}/>
            </div>
        )
    }
}
export default Planet;