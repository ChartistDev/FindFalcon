const initialState = {
    vehicles : [],
    remainingVehicles: []
}
const vehicles = (state = initialState, action)=> {
    switch(action.type) {
        case "SET_VEHICLES" : return {
            ...state,
            vehicles: action.payload,
            remainingVehicles: action.payload
        }
        case "SET_SELECTED_VEHICLE" : {
            console.log(action.payload);
            const selectedIndex = state.vehicles.findIndex((vehicle)=> {
                return (vehicle.name === action.payload.name)
            })
            if(selectedIndex!== -1) {
                action.payload.total_no -= 1;
                state.remainingVehicles.splice(selectedIndex, 1, action.payload)
            }
            return {
                ...state,
                remainingVehicles: state.remainingVehicles
            }
        }
        default : return state
    }
}
export default vehicles;