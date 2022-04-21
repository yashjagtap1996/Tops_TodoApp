import { combineReducers } from "redux";
import apiReducer from "./ApiReducer";
import TodoReducer from "./TodoReducer";


const rootReducer=combineReducers({TodoReducer,apiReducer});

export default rootReducer;