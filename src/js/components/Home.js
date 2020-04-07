import React, { Component } from "react";
import "../../falconeStyle.module.css";
import { connect } from "react-redux";
import Planet from "./Planet";
import { setPlanets } from "../Actions";

class Home extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   heading: "Finding Falcone",
    //   planets: []
    // };
  }
componentDidMount(){
  const url = "https://findfalcone.herokuapp.com/planets";
        fetch(url)
          .then(response => response.json())
          .then(parsedJSON => this.props.setPlanets(parsedJSON))
          .catch(error => console.log(error));
}

  render() {
    const {planets} = this.props;
    return (
      <div>
    <div className = "headingDiv" >
      <h1>
        { this.props.heading }
      </h1>
    </div>
      {/* {
        planets.length ? <Planet planetsData = {planets}/> : null
      } */}
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
      setPlanets : (planets) => dispatch((setPlanets(planets)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

