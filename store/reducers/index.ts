import userReducer from "./user";
import {combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import {globalReducer} from "./global";
const rootReducer = combineReducers({
    user:userReducer,
    global:globalReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export const reducer = (state:any, action:any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    } else {
        return rootReducer(state, action);
    }
}