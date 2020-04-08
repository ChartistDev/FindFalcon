
import {combineReducers} from "redux";
import getHeading from "./Heading";
import fetchPlanets from "./PlanetReducer";
import vehicles from "./VehicleReducer";

const rootReducer = combineReducers({
    getHeading,
    fetchPlanets,
    vehicles
});
export default rootReducer;