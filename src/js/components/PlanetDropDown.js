import React from "react";
import "../../falconeStyle.module.css";
class PlanetDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets : this.props.planets
        }
    }
    render() {
        return (
            <div className = "planetsDiv">
            <label htmlFor = "planet-select-1">Destination 1</label>
            <select id = "planet-select-1">
                <option value = "">Select</option>
                {
                    this.state.planets.map((planet) => {
                        return(
                    <option key = {planet.name} value = {planet.name}>{planet.name}</option>
                    )
                    })
                }
            </select>
            </div>
        )
    }
}
export default PlanetDropDown;