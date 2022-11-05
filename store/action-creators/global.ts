import {ClearErrorAction, GlobalTypesAction, SetErrorAction, SetLoadingAction} from "../../types/globalAction";
export function setIsLoading(isLoading:boolean):SetLoadingAction{
    return {type: GlobalTypesAction.SET_LOADING, payload: isLoading};
}
export function setError(error:string):SetErrorAction{
    return {type:GlobalTypesAction.SET_ERROR, payload:error};
}
export function clearError():ClearErrorAction{
    return {type:GlobalTypesAction.CLEAR_ERROR};
}