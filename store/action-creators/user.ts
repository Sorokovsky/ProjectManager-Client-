import {UserModel} from "../../types/User.model";
import {SetTokenAction, SetUserAction, SetUserIdAction, UserTypesAction} from "../../types/userAction";

export function setUser(user:UserModel):SetUserAction{
    return {type:UserTypesAction.SET_USER, payload: user};
}
export function setUserId(id:string):SetUserIdAction{
    return {type:UserTypesAction.SET_USER_ID, payload:id};
}
export function setToken(token:string):SetTokenAction{
    return {type:UserTypesAction.SET_TOKEN, payload:token};
}