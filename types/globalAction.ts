export enum GlobalTypesAction{
    SET_LOADING = "SET_LOADING",
    SET_ERROR = "SET_ERROR",
    CLEAR_ERROR = "CLEAR_ERROR"
}
export type SetLoadingAction = {
    type: GlobalTypesAction.SET_LOADING;
    payload: boolean;
}
export type SetErrorAction = {
    type: GlobalTypesAction.SET_ERROR;
    payload: string;
}
export type ClearErrorAction = {
    type: GlobalTypesAction.CLEAR_ERROR;
}
export type GlobalAction = SetErrorAction | ClearErrorAction | SetLoadingAction;