import React from "react";
import "../../falconeStyle.module.css";
import PlanetDropDown from "./PlanetDropDown";
class Planet  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                        planetsData:this.props.planetsData,
                        filteredData : {
                            filter_1 : {data:this.props.planetsData,selected:"Select"},
                            filter_2 : {data:this.props.planetsData,selected:"Select"},
                            filter_3 : {data:this.props.planetsData,selected:"Select"},
                            filter_4 : {data:this.props.planetsData,selected:"Select"},
                        }
                     }
        this.selectedPlanets = [];
        this.changeDropDown_1 = this.changeDropDown_1.bind(this);
        this.changeDropDown_2 = this.changeDropDown_2.bind(this);
        this.changeDropDown_3 = this.changeDropDown_3.bind(this);
        this.changeDropDown_4 = this.changeDropDown_4.bind(this);         
    }
    changeDropDown_1(selectedOption) {
        let filteredData = [];
            if(selectedOption.target.value!== "Select") {
            filteredData = this.getFilteredPlanets(selectedOption.target.value)
            // filteredData = this.state.filteredData.filter_1.data.filter((planet) => {
            //     return planet.name !== selectedOption.target.value;
            // })
        }
        this.setState({filteredData : {
            filter_1 :{data: this.state.filteredData.filter_1.data , selected : selectedOption.target.value},
            filter_2:{data:filteredData, selected: this.state.filteredData.filter_2.selected},
            filter_3: {data:filteredData, selected: this.state.filteredData.filter_3.selected},
            filter_4:{data:filteredData, selected: this.state.filteredData.filter_4.selected}
        }})
    }
    changeDropDown_2(selectedOption) {
        let filteredData = [];
            if(selectedOption.target.value!== "Select") {
            filteredData = this.state.filteredData.filter_2.data.filter((planet) => {
                return planet.name !== selectedOption.target.value;
            })
        }
        this.setState({filteredData : {
            filter_1:{data:filteredData,selected:this.state.filteredData.filter_1.selected},
            filter_2:{data:this.state.filteredData.filter_2.data, selected:selectedOption.target.value},
            filter_3:{data:filteredData,selected:this.state.filteredData.filter_3.selected},
            filter_4:{data:filteredData,selected:this.state.filteredData.filter_4.selected}
        }})
    }
    changeDropDown_3(selectedOption) {
        let filteredData = [];
            if(selectedOption.target.value!== "Select") {
            filteredData = this.state.filteredData.filter_3.data.filter((planet) => {
                return planet.name !== selectedOption.target.value;
            })
        }
        this.setState({filteredData : {
            filter_1: {data:filteredData, selected: this.state.filteredData.filter_1.selected},
            filter_2:{data:filteredData, selected: this.state.filteredData.filter_2.selected},
            filter_3:{data:this.state.filteredData.filter_3.data,selected: selectedOption.target.value},
            filter_4:{data:filteredData, selected: this.state.filteredData.filter_4.selected}
        }})
    }
    changeDropDown_4(selectedOption) {
        let filteredData = [];
            if(selectedOption.target.value!== "Select") {
            filteredData = this.state.filteredData.filter_4.data.filter((planet) => {
                return planet.name !== selectedOption.target.value;
            })
        }
        this.setState({filteredData : {
            filter_1:{data:filteredData, selected: this.state.filteredData.filter_1.selected},
            filter_2:{data:filteredData, selected: this.state.filteredData.filter_2.selected},
            filter_3:{data:filteredData, selected: this.state.filteredData.filter_3.selected},
            filter_4:{data:this.state.filteredData.filter_4.data, selected: selectedOption.target.value}
        }})
    }
    render() {
        return (
            <div className = "planetsContainer">
            <PlanetDropDown data = {{planets: this.state.filteredData.filter_1, changeDropDown: this.changeDropDown_1}}/>
            <PlanetDropDown data = {{planets: this.state.filteredData.filter_2, changeDropDown: this.changeDropDown_2}}/>
            <PlanetDropDown data = {{planets: this.state.filteredData.filter_3, changeDropDown: this.changeDropDown_3}}/>
            <PlanetDropDown data = {{planets: this.state.filteredData.filter_4, changeDropDown: this.changeDropDown_4}}/>
            </div>
        )
    }
}
export default Planet;