import {NextPage} from "next";
import React from "react";
import MainLayout from "../components/MainLayout";
import {indexMeta} from "../data/neta";
const Index:NextPage = ():JSX.Element => {
    return (
        <MainLayout meta={indexMeta}>
            a
        </MainLayout>
  )
}
export default React.memo(Index);