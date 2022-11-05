import React from "react";
import styles from '../styles/Header.module.sass';
import Logo from "./Logo";
import Avatar from "./Avatar";
const Header:React.FC = ():JSX.Element => {
    return (
        <header className={[styles.header].join(" ")}>
            <div className={["container", styles.container].join(" ")}>
                <Logo />
                <Avatar />
            </div>
        </header>
    )
}
export default React.memo(Header);