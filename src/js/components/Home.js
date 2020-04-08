import React, { Component } from "react";
import "../../falconeStyle.module.css";
import { connect } from "react-redux";
import Planet from "./Planet";
import { setPlanets,setVehicles } from "../Actions";
class Home extends Component {
  constructor(props) {
    super(props);
  }
 async componentDidMount(){
  const urlPlanets = "https://findfalcone.herokuapp.com/planets",
        urlVehicles = "https://findfalcone.herokuapp.com/vehicles";
      const responsePlanets = await fetch(urlPlanets);
      const planetsData = await responsePlanets.json();
      this.props.setPlanets(planetsData);
      const responseVehicles = await fetch(urlVehicles);
      const vehiclesData = await responseVehicles.json();
      this.props.setVehicles(vehiclesData);
}

  render() {
    return (
      <div>
    <div className = "headingDiv" >
      <h1>
        { this.props.heading }
      </h1>
    </div>
      {
        <Planet/>
      }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return (
    {
      planets: state.fetchPlanets.planets,
      heading : state.getHeading.heading
    }
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
      setPlanets : (planets) => dispatch((setPlanets(planets))),
      setVehicles : (vehicles) => dispatch(setVehicles(vehicles))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

