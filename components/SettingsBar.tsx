import React from "react";
import {CSSTransition} from "react-transition-group";
import {useTypedSelector} from "../hooks/useTypedSelector";
import styles from '../styles/SettingsBar.module.sass';
import {useActions} from "../hooks/useActions";
import { unAuthRouters, authRouters } from '../data/routers';
import MenuItem from "./MenuItem";
const SettingsBar:React.FC = ():JSX.Element => {
    const { settings } = useTypedSelector(state => state.global);
    const { user } = useTypedSelector(state => state.user);
    const { SetVisibilitySettings } = useActions();
    const sidebar = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        document.querySelector('body')?.addEventListener('click', (e:any) => {
            const target = e.target;
            e.preventDefault();
            const sidebarClasses:string = `.${sidebar?.current?.className.split(" ")[0]}`;
            const avatar:string = '#avatar';
            if((target?.closest(sidebarClasses) === null) && (target?.closest(avatar))?.tagName !== 'A'){
                SetVisibilitySettings(false);
            }
        });
    }, []);
    return (
        <CSSTransition
            nodeRef={sidebar}
            timeout={500}
            unmountOnExit
            mountOnEnter
            in={settings}
            classNames={{
                enterActive: styles.open,
                exitActive: styles.hide
            }}
        >
            <aside ref={sidebar} className={[styles.sidebar].join(" ")}>
                <nav>
                    <ul>
                        {user ? authRouters.map((route) => {
                            return <MenuItem route={route} key={route.to} classNames={[styles.link].join(" ")}/>
                        }) :
                            unAuthRouters.map((route) => {
                                return <MenuItem route={route} key={route.to} classNames={[styles.link].join(" ")}/>
                            })}
                    </ul>
                </nav>
            </aside>
        </CSSTransition>
    )
}
export default React.memo(SettingsBar);