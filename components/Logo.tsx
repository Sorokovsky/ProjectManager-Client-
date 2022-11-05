import React from "react";
import Link from "next/link";
import {indexMeta} from "../data/neta";
import logo from '../asssets/logo.svg';
import styles from '../styles/Logo.module.sass';
const Logo:React.FC = ():JSX.Element => {
    const clickHandler = React.useCallback((e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
    }, []);
    return (
        <Link href={'/'} onClick={clickHandler} className={styles.logo}>
            <img src={logo.src} alt={indexMeta.description}/>
        </Link>
    )
}
export default React.memo(Logo);