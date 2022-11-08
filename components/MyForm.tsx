import React, {HTMLAttributes} from "react";
import styles from '../styles/MyForm.module.sass';
interface iProps extends HTMLAttributes<HTMLFormElement>{
    children:React.ReactNode;
    sendTo?:string;
    onSubmit?: (e:React.FormEvent) => void;
}
const MyForm:React.FC<iProps> = ({children,
                                  className,
                                  sendTo = "/",
                                  onSubmit,
                                  ...props}):JSX.Element => {
    const form = React.useRef<HTMLFormElement>(null);
    const sendHandler = onSubmit !== undefined ? onSubmit : (e:React.FormEvent) => {

    }
    return (
        <form action="#" ref={form} className={[styles.form].join(" ")} {...props}>
            {children}
        </form>
    )
}
export default React.memo(MyForm);