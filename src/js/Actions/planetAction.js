export const getPlanets = () => {
    return {
        type: "GET_PLANETS"
    }
}

export const setSelectedPlanets = (planets) => {
    return {
        type: "SELECTED_PLANETS",
        payload: planets
    }
}

export const setPlanets = (planets) => {
    return {
        type : "SET_PLANETS",
        payload : planets
    }
}