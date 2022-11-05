import React from "react";
import Link from "next/link";
import {indexMeta} from "../data/neta";
import logo from '../asssets/logo.svg';
import styles from '../styles/Logo.module.sass';
const Logo:React.FC = ():JSX.Element => {
    return (
        <Link href={'/'} className={styles.logo}>
            <img src={logo.src} alt={indexMeta.description}/>
        </Link>
    )
}
export default React.memo(Logo);