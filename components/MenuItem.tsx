import React, {Attributes, HTMLInputTypeAttribute} from "react";
import {Route} from "../types/Route";
import Link from "next/link";
interface iProps{
    classNames:string;
    route:Route;
}
const MenuItem:React.FC<iProps> = ({route, classNames}):JSX.Element => {
    return (
        <li>
            <Link href={route.to} className={classNames}>{route.name}</Link>
        </li>
    )
}
export default React.memo(MenuItem);