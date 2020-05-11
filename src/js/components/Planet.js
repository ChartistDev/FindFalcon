import React from "react";
import "../../falconeStyle.module.css";
import PlanetDropDown from "./PlanetDropDown";
import { connect } from "react-redux";
class Planet  extends React.Component{
    constructor() {
        super();    
    }
    render() {
        return (
            <div className = "planetsContainer">
            <PlanetDropDown destination = "1"/>
            <PlanetDropDown destination = "2"/>
            <PlanetDropDown destination = "3"/>
            <PlanetDropDown destination = "4"/>
            <div className = "headingDiv">
                <h1>
                Time Taken : {this.props.timeTaken}
                </h1>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        timeTaken : state.vehicles.TimeTaken
    }
}

export default connect(mapStateToProps)(Planet);