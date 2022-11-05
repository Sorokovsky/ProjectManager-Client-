import React from "react";
import {Meta} from "../types/Meta";
import Head from "next/head";
import Header from "./Header";
interface iProps{
    children:React.ReactNode;
    meta:Meta;
}
const MainLayout:React.FC<iProps> = ({children, meta}):JSX.Element => {
    return (
        <>
            <Head>
                <meta name='description' content={meta.description}/>
                <meta name='keywords' content={meta.keywords}/>
                <title>{meta.title}</title>
            </Head>
            <Header />
            <div className="page">
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}
export default React.memo(MainLayout);