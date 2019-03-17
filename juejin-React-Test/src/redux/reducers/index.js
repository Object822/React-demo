import {combineReducers} from "redux";
let initState = {
    themeColor: "#333"
}

const contentReducer = (state = initState, action)=> {
    switch(action.type) {
        case "TOGGLE_COLOR":
            return {
                ...state,
                themeColor: action.themeColor
            }
        default:
            return state;
    }
}
let rootReducer = combineReducers(
    {
        contentReducer
    }
);
export default rootReducer;