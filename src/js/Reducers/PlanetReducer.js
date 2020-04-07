const UNDEF = undefined;
const initialState = {
    planets : [],
    remainingPlanets: [],
    selectedPlanets: []
}
const fetchPlanets = (state = initialState, action) => {
    switch(action.type) {
        case "SET_PLANETS": return {
            ...state,
            planets : action.payload,
            remainingPlanets :action.payload
        }
        case "SELECTED_PLANETS" :{
            let foundIndex = UNDEF; 
            foundIndex = state.selectedPlanets.findIndex((planet) => {
                return (planet.selectedBy === action.payload.selectedBy)
            });
            if(foundIndex !== -1) {
                state.selectedPlanets.splice(foundIndex,1,action.payload);
            } else {
                state.selectedPlanets.push(action.payload);
            }
            return {
            ...state,
            selectedPlanets : state.selectedPlanets,
            remainingPlanets: state.planets.filter((planet) => {
                return !state.selectedPlanets.includes(planet)
            })
        }
    }
        case "REMAINING_PLANETS" : return {
            ...state,
            remainingPlanets: state.planets.filter((planet) => {
                return !state.selectedPlanets.includes(planet)
            })
        }
        default: return state
    }
}
export default fetchPlanets;