import React from "react";
import "../../falconeStyle.module.css";
class PlanetDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets : this.props.data.planets.data,
        }
    }
    
    render() {
        console.log(this.props.data.planets.data);
        return (
            // <div className = "planetsContainer">
            <div className = "planetsDiv">
            <label htmlFor = "planet-select-1">Destination 1</label>
            <select onChange = {this.props.data.changeDropDown} >
                <option key = {this.props.data.planets.selected} value = {this.props.data.planets.selected}>{this.props.data.planets.selected}</option>
                {
                   this.props.data.planets.data.map((planet) => {
                        return(
                    <option key = {planet.name} value = {planet.name} >{planet.name}</option>
                    )
                    })
                }
            </select>
            </div>
        )
    }
}
export default PlanetDropDown;