import React from "react";
import "../../falconeStyle.module.css";
import PlanetDropDown from "./PlanetDropDown";
class Planet  extends React.Component{
    constructor() {
        super();    
    }
    // changeDropDown_1(selectedOption) {
    //     let filteredData = [];
    //         if(selectedOption.target.value!== "Select") {
    //         filteredData = this.getFilteredPlanets(selectedOption.target.value)
    //         // filteredData = this.state.filteredData.filter_1.data.filter((planet) => {
    //         //     return planet.name !== selectedOption.target.value;
    //         // })
    //     }
    //     this.setState({filteredData : {
    //         filter_1 :{data: this.state.filteredData.filter_1.data , selected : selectedOption.target.value},
    //         filter_2:{data:filteredData, selected: this.state.filteredData.filter_2.selected},
    //         filter_3: {data:filteredData, selected: this.state.filteredData.filter_3.selected},
    //         filter_4:{data:filteredData, selected: this.state.filteredData.filter_4.selected}
    //     }})
    // }
    // changeDropDown_2(selectedOption) {
    //     let filteredData = [];
    //         if(selectedOption.target.value!== "Select") {
    //         filteredData = this.state.filteredData.filter_2.data.filter((planet) => {
    //             return planet.name !== selectedOption.target.value;
    //         })
    //     }
    //     this.setState({filteredData : {
    //         filter_1:{data:filteredData,selected:this.state.filteredData.filter_1.selected},
    //         filter_2:{data:this.state.filteredData.filter_2.data, selected:selectedOption.target.value},
    //         filter_3:{data:filteredData,selected:this.state.filteredData.filter_3.selected},
    //         filter_4:{data:filteredData,selected:this.state.filteredData.filter_4.selected}
    //     }})
    // }
    // changeDropDown_3(selectedOption) {
    //     let filteredData = [];
    //         if(selectedOption.target.value!== "Select") {
    //         filteredData = this.state.filteredData.filter_3.data.filter((planet) => {
    //             return planet.name !== selectedOption.target.value;
    //         })
    //     }
    //     this.setState({filteredData : {
    //         filter_1: {data:filteredData, selected: this.state.filteredData.filter_1.selected},
    //         filter_2:{data:filteredData, selected: this.state.filteredData.filter_2.selected},
    //         filter_3:{data:this.state.filteredData.filter_3.data,selected: selectedOption.target.value},
    //         filter_4:{data:filteredData, selected: this.state.filteredData.filter_4.selected}
    //     }})
    // }
    // changeDropDown_4(selectedOption) {
    //     let filteredData = [];
    //         if(selectedOption.target.value!== "Select") {
    //         filteredData = this.state.filteredData.filter_4.data.filter((planet) => {
    //             return planet.name !== selectedOption.target.value;
    //         })
    //     }
    //     this.setState({filteredData : {
    //         filter_1:{data:filteredData, selected: this.state.filteredData.filter_1.selected},
    //         filter_2:{data:filteredData, selected: this.state.filteredData.filter_2.selected},
    //         filter_3:{data:filteredData, selected: this.state.filteredData.filter_3.selected},
    //         filter_4:{data:this.state.filteredData.filter_4.data, selected: selectedOption.target.value}
    //     }})
    // }
    render() {
        return (
            <div className = "planetsContainer">
            <PlanetDropDown destination = "1"/>
            <PlanetDropDown destination = "2"/>
            <PlanetDropDown destination = "3"/>
            <PlanetDropDown destination = "4"/>
            </div>
        )
    }
}
export default Planet;