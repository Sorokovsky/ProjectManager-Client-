import {NextPage} from "next";
import React from "react";
import MainLayout from "../components/MainLayout";
import {errorMeta} from "../data/meta";
import styles from '../styles/notFoundedPage.module.sass';
const NotFoundedPage:NextPage = ():JSX.Element => {
    return (
        <MainLayout meta={errorMeta} >
            <div className={styles.error}>
                <span>404</span>
                <span>Сторінку не знайдено</span>
            </div>
        </MainLayout>
    )
}
export default React.memo(NotFoundedPage);