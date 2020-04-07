export const getPlanets = () => {
    return {
        type: "GET_PLANETS"
    }
}

export const setSelectedPlanets = (planet) => {
    return {
        type: "SELECTED_PLANETS",
        payload: planet
    }
}

export const setPlanets = (planets) => {
    return {
        type : "SET_PLANETS",
        payload : planets
    }
}