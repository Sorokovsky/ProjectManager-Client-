import {GlobalState} from "../../types/globalState";
import {GlobalAction, GlobalTypesAction} from "../../types/globalAction";
const initialState:GlobalState = {
    error:null,
    loading:false,
    settings:false
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
        case GlobalTypesAction.SET_SETTINGS:
            return {...state, settings:action.payload};
            break;
        default:
            return state;
    }
}