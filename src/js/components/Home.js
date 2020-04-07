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
 async componentDidMount(){
  const url = "https://findfalcone.herokuapp.com/planets";
      //  fetch(url)
      //     .then(response => response.json())
      //     .then(parsedJSON => this.props.setPlanets(parsedJSON))
      //     .catch(error => console.log(error));
      const response = await fetch(url);
      const data = await response.json();
      this.props.setPlanets(data);
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
      setPlanets : (planets) => dispatch((setPlanets(planets)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

