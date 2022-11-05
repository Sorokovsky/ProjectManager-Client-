import React from "react";
import defaultAvatar from '../asssets/avatar.svg';
import styles from '../styles/Logo.module.sass';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {indexMeta} from "../data/meta";
import {useActions} from "../hooks/useActions";
const Avatar:React.FC = ():JSX.Element => {
    const { user } = useTypedSelector(state => state.user);
    const { settings } = useTypedSelector(state => state.global);
    const [avatar, setAvatar] = React.useState<string>(defaultAvatar.src);
    const [alt, setAlt] = React.useState<string>(indexMeta.description);
    const { SetVisibilitySettings } = useActions();
    const clickHandler = React.useCallback((e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        SetVisibilitySettings(!settings);
    }, [settings]);
    React.useEffect(() => {
        if (user) {
            setAvatar(user.avatar);
            setAlt(user.surname + " " + user.name);
        }
    }, []);
    return (
        <a href="#" onClick={clickHandler} className={styles.logo} id={'avatar'}>
            <img src={avatar} alt={alt}/>
        </a>
    )
}
export default React.memo(Avatar);