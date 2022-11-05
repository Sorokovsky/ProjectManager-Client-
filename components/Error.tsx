import React from "react";
import styles from '../styles/Error.module.sass';
import {CSSTransition} from "react-transition-group";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
const Error:React.FC = ():JSX.Element => {
    const { error } = useTypedSelector(state => state.global);
    const { clearError } = useActions();
    const errorNode = React.useRef<HTMLDivElement>(null);
    const clickHandler = React.useCallback((e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        clearError();
    }, []);
    return (
        <CSSTransition
            nodeRef={errorNode}
            timeout={500}
            in={error !== null}
            mountOnEnter
            unmountOnExit
            classNames={{
                enterActive:styles.open,
                exitActive:styles.hide
            }}
        >
            <div ref={errorNode} className={styles.error}>
                <a href="#" className={styles.close} onClick={clickHandler}>+</a>
                {error}
            </div>
        </CSSTransition>
    )
}
export default React.memo(Error);