import {UserModel} from "./User.model";
export enum UserTypesAction{
    SET_USER = "SET_USER",
    SET_USER_ID = "SET_USER_ID",
    SET_TOKEN = "SET_TOKEN"
}
export type SetUserAction = {
    type:UserTypesAction.SET_USER;
    payload:UserModel;
}
export type SetUserIdAction = {
    type:UserTypesAction.SET_USER_ID;
    payload: string;
}
export type SetTokenAction = {
    type:UserTypesAction.SET_TOKEN;
    payload:string;
}
export type UserAction = SetUserAction | SetUserIdAction | SetTokenAction;