import React from "react";
import "../../falconeStyle.module.css";
import {connect} from "react-redux";
import {setSelectedPlanets, setSelectedVehicles} from "../Actions";
class PlanetDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.vehicleChange = this.vehicleChange.bind(this)
    }
    vehicleChange(selectedOption) {
        let selectedVehicle = this.props.vehicles.find((vehicle) => {
            return vehicle.name === selectedOption.target.value
        });
        this.props.setSelectedVehicles(selectedVehicle);
    }
    handleChange (slectedOption) {
        let selected = this.props.planets.find((planet)=> {
            return(planet.name === slectedOption.target.value)
        })
        selected.selectedBy = this.props.destination;
        this.props.planetSelected(selected);
    }
    render() {
        const selectedPlanet = this.props.selectedPlanets.find((planet) => {
            return(planet.selectedBy === this.props.destination)
        });
        console.log("hello");
        return (
            // <div className = "planetsContainer">
            <div className = "planetsDiv">
            <label htmlFor = "planet-select-1">Destination {this.props.destination}</label>
            <select  onChange = {this.handleChange}>
                <option key = {selectedPlanet ? selectedPlanet.name : "Select"} value = {selectedPlanet ? selectedPlanet.name : "Select"}>{selectedPlanet ? selectedPlanet.name : "Select"}</option>
                {
                   this.props.planets.map((planet) => {
                        return(
                    <option key = {planet.name} value = {planet.name} >{planet.name}</option>
                    )
                    })
                }
            </select>
            <div className = "radioDiv">
                {
                this.props.vehicles.map((vehicle, index) =>{
                    return (
                        <div key = {"myVehicleDiv" + index}>   
                        <input type="radio" id={vehicle.name+this.props.destination} name= {"vehicle"+ this.props.destination} value={vehicle.name} onChange = {this.vehicleChange}/> 
                        <label>{vehicle.name + "(" + vehicle.total_no + ")"}</label> <br/>
                        </div>
                    )
                })
             
                }
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        planets: state.fetchPlanets.remainingPlanets,
        selectedPlanets: state.fetchPlanets.selectedPlanets,
        vehicles: state.vehicles.remainingVehicles
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    planetSelected : (planet) => dispatch(setSelectedPlanets(planet)),
    setSelectedVehicles: (vehicle) => dispatch(setSelectedVehicles(vehicle))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlanetDropDown);