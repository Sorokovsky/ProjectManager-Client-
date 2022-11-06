import React from "react";
import {Meta} from "../types/Meta";
import Head from "next/head";
import Header from "./Header";
import Error from "./Error";
import Settings from "./SettingsBar";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
interface iProps{
    children:React.ReactNode;
    meta:Meta;
}
const MainLayout:React.FC<iProps> = ({children, meta}):JSX.Element => {
    const { id, token } = useTypedSelector(state => state.user);
    const { fetchUser, fetchUserId, setUserId, setToken } = useActions();
    React.useEffect(() => {
        setToken(JSON.stringify(localStorage.getItem('token')));
        if (token) fetchUserId(token);
        if(id) fetchUser(id);
    }, []);
    return (
        <>
            <Head>
                <meta name='description' content={meta.description}/>
                <meta name='keywords' content={meta.keywords}/>
                <title>{meta.title}</title>
            </Head>
            <Header />
            <Error />
            <div className="page">
                <main>
                    {children}
                </main>
                <Settings />
            </div>
        </>
    )
}
export default React.memo(MainLayout);