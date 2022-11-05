import {GlobalState} from "../../types/globalState";
import {GlobalAction, GlobalTypesAction} from "../../types/globalAction";
const initialState:GlobalState = {
    error:null,
    loading:false
}
export function globalReducer(state = initialState, action:GlobalAction):GlobalState{
    switch (action.type){
        case GlobalTypesAction.SET_LOADING:
            return {...state, loading:action.payload};
            break;
        case GlobalTypesAction.SET_ERROR:
            return {...state, error:action.payload};
            break;
        case GlobalTypesAction.CLEAR_ERROR:
            return {...state, error: null};
            break;
        default:
            return state;
    }
}