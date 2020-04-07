const initialState = {
    planets : [],
    selectedPlanets: []
}
const fetchPlanets = (state = initialState, action) => {
    switch(action.type) {
        case "SET_PLANETS": return {
            ...state,
            planets : action.payload
        }
        case "SELECTED_PLANETS" :{ 
            state.selectedPlanets.push(action.payload);
            return {
            ...state,
            selectedPlanets : state.selectedPlanets
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