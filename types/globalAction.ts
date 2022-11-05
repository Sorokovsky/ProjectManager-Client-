export enum GlobalTypesAction{
    SET_LOADING = "SET_LOADING",
    SET_ERROR = "SET_ERROR",
    CLEAR_ERROR = "CLEAR_ERROR",
    SET_SETTINGS = "SET_SETTINGS",
}
export type SetLoadingAction = {
    type: GlobalTypesAction.SET_LOADING;
    payload: boolean;
}
export type VisiableSettingsAction = {
    type:GlobalTypesAction.SET_SETTINGS;
    payload:boolean;
}
export type SetErrorAction = {
    type: GlobalTypesAction.SET_ERROR;
    payload: string;
}
export type ClearErrorAction = {
    type: GlobalTypesAction.CLEAR_ERROR;
}
export type GlobalAction = SetErrorAction | ClearErrorAction | SetLoadingAction | VisiableSettingsAction;