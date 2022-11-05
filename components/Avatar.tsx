import React from "react";
import defaultAvatar from '../asssets/avatar.svg';
import styles from '../styles/Logo.module.sass';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {indexMeta} from "../data/neta";
const Avatar:React.FC = ():JSX.Element => {
    const { user } = useTypedSelector(state => state.user);
    const [avatar, setAvatar] = React.useState<string>(defaultAvatar.src);
    const [alt, setAlt] = React.useState(indexMeta.description);
    React.useEffect(() => {
        if (user) {
            setAvatar(user.avatar);
            setAlt(user.surname + " " + user.name);
        }
    }, []);
    return (
        <a href="#" className={styles.logo}>
            <img src={avatar} alt={alt}/>
        </a>
    )
}
export default React.memo(Avatar);