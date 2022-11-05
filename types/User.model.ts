import {LinkModel} from "./Link.model";
export type UserModel = {
    surname: string;
    name: string;
    password: string;
    email: string;
    avatar: string;
    links: LinkModel[];
    _id: string;
}