const initialState = {
    vehicles : [],
    remainingVehicles: [],
    destinationsHash : { ///Hash for destinations used to build vehicleCounter
        "1" : 0,
        "2" : 1,
        "3" : 2,
        "4" : 3,
    },
    vehicleCounter: []
}
const vehicles = (state = initialState, action)=> {
    switch(action.type) {
        case "SET_VEHICLES" :{ 
            const vehicleCounterObj = createVehicleCounter(action.payload, {});
            return {
            ...state,
            vehicles: action.payload,
            remainingVehicles: vehicleCounterObj
        }
    }
        case "SET_SELECTED_VEHICLE" : {
            for(let key in state.destinationsHash) {
                if(key === action.payload.destination) {
                    state.vehicleCounter[state.destinationsHash[key]] = {name: action.payload.vehicle, status: "selected"};
                }
            }
            let arr = state.vehicles.slice();
            let vehicleCounterObj = findRemainingVehicles(arr,state.vehicleCounter);
            console.log(vehicleCounterObj);
            return {
                ...state,
                remainingVehicles: vehicleCounterObj
            }
        }
        default : return state
    }
}
const createVehicleCounter = (vehicles, obj) => {
    vehicles.forEach((vehicle) => {
        if(vehicle.name) {
            obj[vehicle.name] = obj[vehicle.name] + 1 || vehicle.total_no
        }
    })
    return(obj);
}
const findRemainingVehicles = (remainingObj, selectedVehiclesArr) => {
    let obj = {};
    console.log(selectedVehiclesArr);
   for(let index = 0;index<remainingObj.length;index++) {
    obj[remainingObj[index].name] = remainingObj[index].total_no;
       for(let i=0;i<selectedVehiclesArr.length;i++) {
           if(selectedVehiclesArr[i] && selectedVehiclesArr[i].status === "selected" && selectedVehiclesArr[i].name === remainingObj[index].name) {
               obj[remainingObj[index].name] = obj[remainingObj[index].name] - 1;
           }
       }
   }
   return obj;
}
export default vehicles;