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
        selected.selectedBy = this.props.destination;
        this.props.planetSelected(selected);
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
            <div className = "radioDiv">
             <div>   
            <input type="radio" id="" name="" value=""/> 
            <label >Hi</label> <br/>
            </div>
            <div>
            <input type="radio" id="" name="" value=""/>
            <label >Hello</label> <br/>
            </div>
            <div>
            <input type="radio" id="" name="" value=""/>
            <label >Chakri</label> <br/>
            </div>
            <div>
            <input type="radio" id="" name="" value=""/>
            <label >Chai</label>
            </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        planets: state.fetchPlanets.remainingPlanets,
        selectedPlanets: state.fetchPlanets.selectedPlanets
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    planetSelected : (planet) => dispatch(setSelectedPlanets(planet))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlanetDropDown);