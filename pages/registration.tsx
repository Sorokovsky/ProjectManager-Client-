import {NextPage} from "next";
import React from "react";
import MainLayout from "../components/MainLayout";
import {registrationMeta} from "../data/meta";
const Registration:NextPage = ():JSX.Element => {
    return (
        <MainLayout meta={registrationMeta}>
            <div className="container">

            </div>
        </MainLayout>
    )
}
export default React.memo(Registration);