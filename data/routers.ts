import {Route} from "../types/Route";
export const unAuthRouters:Route[] = [
    {
        to: '/registration',
        name: "Регістрація"
    },
    {
        to: '/login',
        name: "Авторизація"
    },
];
export const authRouters:Route[] = [
    {
        to: '/settings',
        name: "Налаштування"
    },
]