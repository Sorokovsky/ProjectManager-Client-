import {NextPage} from "next";
import React from "react";
import MainLayout from "../components/MainLayout";
import {registrationMeta} from "../data/meta";
import styles from '../styles/Registration.module.sass';
import MyForm from "../components/MyForm";
const Registration:NextPage = ():JSX.Element => {
    return (
        <MainLayout meta={registrationMeta}>
            <div className={["container", styles.container].join(" ")}>
                <MyForm>
                    <h1>Зареєструватися</h1>
                </MyForm>
            </div>
        </MainLayout>
    )
}
export default React.memo(Registration);