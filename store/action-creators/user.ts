import {UserModel} from "../../types/User.model";
import {SetTokenAction, SetUserAction, SetUserIdAction, UserTypesAction} from "../../types/userAction";
import {Dispatch} from "redux";
import {AxiosError} from "axios";
import {useAxios} from "../../hooks/useAxios";
import {setError} from "./global";

export function setUser(user:UserModel):SetUserAction{
    return {type:UserTypesAction.SET_USER, payload: user};
}
export function setUserId(id:string):SetUserIdAction{
    return {type:UserTypesAction.SET_USER_ID, payload:id};
}
export function setToken(token:string):SetTokenAction{
    return {type:UserTypesAction.SET_TOKEN, payload:token};
}
export function fetchUser(id:string){
    return async (dispatch:Dispatch) =>{
        try {
            const response = await useAxios().get<UserModel>(`/users/${id}`);
            return dispatch(setUser(response.data));
        }catch (e:AxiosError | any) {
            return dispatch(setError(e.response.data.message));
        }
    }
}
export function fetchUserId(token:string){
    return async (dispatch:Dispatch) =>{
        try {
            const response = await useAxios().get<{ id:string }>(`/auth/check/`, {
                headers:{Authorization: `Bearer ${token}`}
            });
            return dispatch(setUserId(response.data.id));
        }catch (e:AxiosError | any) {
            return dispatch(setError(e.response.data.message));
        }
    }
}