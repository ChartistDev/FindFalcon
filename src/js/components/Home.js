import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../falconeStyle.module.css";
import Planet from "./Planet";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      heading: "Finding Falcone",
      planets: []
    };
  }
componentDidMount(){
  const url = "https://findfalcone.herokuapp.com/planets";
        fetch(url)
          .then(response => response.json())
          .then(parsedJSON => this.setState({planets: parsedJSON}))
          .catch(error => console.log(error));
  // let xhr = new XMLHttpRequest();
  // xhr.addEventListener('load', ()=> {
  //   this.setState({
  //     planets : JSON.parse(xhr.responseText)
  //   });
  // })
  // xhr.open('GET', 'https://findfalcone.herokuapp.com/planets')
  //   // send the request
  //   xhr.send()
}

  render() {
    const {planets} = this.state;
    return (
      <div>
    <div className = "headingDiv" >
      <h1>
        { this.state.heading }
      </h1>
    </div>
      {
        planets.length ? <Planet planetsData = {planets}/> : null
      }
      </div>
    );
  }
}

export default Home;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;