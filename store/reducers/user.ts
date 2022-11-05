import {UserAction, UserTypesAction} from "../../types/userAction";
import {UserState} from "../../types/userState";
const initialState:UserState = {
    user:null,
    token:null,
    id:null
}
export default function userReducer(state = initialState, action:UserAction):UserState{
    switch (action.type){
        case UserTypesAction.SET_USER:
            return {...state, user:action.payload};
            break;
        case UserTypesAction.SET_USER_ID:
            return {...state, id:action.payload};
            break;
        case UserTypesAction.SET_TOKEN:
            return {...state, token: action.payload};
            break;
        default:
            return state;
            break;
    }
}