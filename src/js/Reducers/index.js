
import {combineReducers} from "redux";
import getHeading from "./Heading";
import fetchPlanets from "./PlanetReducer";

const rootReducer = combineReducers({
    getHeading,
    fetchPlanets
});
export default rootReducer;