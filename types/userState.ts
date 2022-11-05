import {UserModel} from "./User.model";
export type UserState = {
    user:null | UserModel;
    id:null | string;
    token:null | string;
}