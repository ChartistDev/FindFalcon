const initialState = {
    planets : [],
    selectedPlanets: []
}
const fetchPlanets = (state = initialState, action) => {
    switch(action.type) {
        case "SET_PLANETS": return {
            planets : action.payload
        }
        case "SELECTED_PLANETS" : return {
            selectedPlanets : state.selectedPlanets.push(action.payload)
        }
        case "REMAINING_PLANETS" : return {
            remainingPlanets: state.planets.filter((planet) => {
                return !state.selectedPlanets.includes(planet)
            })
        }
        default: return state
    }
}
export default fetchPlanets;