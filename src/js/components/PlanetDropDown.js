import React from "react";
import "../../falconeStyle.module.css";
import {connect} from "react-redux";
import {setSelectedPlanets} from "../Actions";
class PlanetDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (slectedOption) {
        let selected = this.props.planets.find((planet)=> {
            return(planet.name === slectedOption.target.value)
        })
        this.props.planetSelected(selected);
    }
    render() {
        return (
            // <div className = "planetsContainer">
            <div className = "planetsDiv">
            <label htmlFor = "planet-select-1">Destination {this.props.destination}</label>
            <select  onChange = {this.handleChange}>
                {/* <option key = {this.props.data.planets.selected} value = {this.props.data.planets.selected}>{this.props.data.planets.selected}</option> */}
                {
                   this.props.planets.map((planet) => {
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
const mapStateToProps = (state) => {
    return {
        planets: state.fetchPlanets.planets
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    planetSelected : (planet) => dispatch(setSelectedPlanets(planet))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlanetDropDown);