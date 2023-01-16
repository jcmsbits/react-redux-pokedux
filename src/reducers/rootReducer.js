import {combineReducers} from "redux";
import dataReducer from "../slices/dataslice";
import uiReducer from "../slices/uislice";
export const rootReducer= combineReducers({data: dataReducer, ui:uiReducer});
