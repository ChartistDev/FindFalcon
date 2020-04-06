const initialState = {
    planets : []
}
const fetchPlanets = (state = initialState, action) => {
    switch(action.type) {
        case "SET_PLANETS": return {
            planets : action.payload
        }
        default: return state
    }
}
export default fetchPlanets;