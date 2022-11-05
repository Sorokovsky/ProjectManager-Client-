import {UserModel} from "./User.model";
export type LinkModel = {
    name:string;
    description:string;
    preview:string;
    href:string;
    user:UserModel
    _id:string;
}