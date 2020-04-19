export const setVehicles = (vehicles)=> {
    return {
        type: "SET_VEHICLES",
        payload: vehicles
    }
}
export const setSelectedVehicles = (vehicle, destination) => {
    return {
        type: "SET_SELECTED_VEHICLE",
        payload: {
            vehicle,
            destination
        }
    }
}