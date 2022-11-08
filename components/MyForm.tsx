import React, {HTMLAttributes} from "react";
interface iProps extends HTMLAttributes<HTMLFormElement>{
    children:React.ReactNode;
}
const MyForm:React.FC<iProps> = ({children, className, ...props}):JSX.Element => {
    return (
        <form action="#" className={[className].join(" ")} {...props}>
            {children}
        </form>
    )
}
export default React.memo(MyForm);