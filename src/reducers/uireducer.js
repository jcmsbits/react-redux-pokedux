import { fromJS, setIn } from "immutable";
import { SET_LOADING } from "../actions/type";

const initialState=fromJS({
     loading: true,   
});

export const uiReducer=(state=initialState, action)=>{
        switch (action.type){
            case SET_LOADING:
                   return state.set("loading", fromJS(action.payload))
           
            default: return state
        
        }

}