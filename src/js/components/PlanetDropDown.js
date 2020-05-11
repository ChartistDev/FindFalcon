import React from "react";
import "../../falconeStyle.module.css";
import {connect} from "react-redux";
import {setSelectedPlanets, setSelectedVehicles} from "../Actions";
class PlanetDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.selectedPlanet = undefined;
        this.vehicleChange = this.vehicleChange.bind(this)
        this.getRadios = this.getRadios.bind(this);
    }
    vehicleChange(selectedOption) {
        // let selectedVehicle = this.props.vehicles.find((vehicle) => {
        //     return vehicle.name === selectedOption.target.value
        // });
        console.log(this.selectedPlanet);
        this.props.setSelectedVehicles(selectedOption.target.value, this.props.destination);
    }
    handleChange (slectedOption) {
        let selected = this.props.planets.find((planet)=> {
            return(planet.name === slectedOption.target.value)
        })
        this.selectedPlanet = selected.name;
        selected.selectedBy = this.props.destination;
        this.props.planetSelected(selected);
    }
    getRadios() {
        let radios = [];
            for( var key in this.props.vehicles) {
                radios.push(
                    <div key = {"Div_" + key}>   
                         <input disabled = {this.props.vehicles[key] === 0} type="radio" id={key+this.props.destination} name= {"vehicle"+ this.props.destination} value={key} onChange = {this.vehicleChange}/> 
                         <label>{key + "(" + this.props.vehicles[key] + ")"}</label> <br/>
                         </div>
                )
            }
            return(radios);
    }
    render() {
        const selectedPlanet = this.props.selectedPlanets.find((planet) => {
            return(planet.selectedBy === this.props.destination)
        });
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
            <div className = {this.selectedPlanet!==undefined? "radioDiv" : "hideDiv"}>
                {
                    
                    this.getRadios()            
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
    setSelectedVehicles: (vehicle, destination) => dispatch(setSelectedVehicles(vehicle, destination))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlanetDropDown);