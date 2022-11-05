import '../styles/globals.sass';
import { wrapper } from "../store";
import React from "react";
import {AppProps} from "next/app";
const App:React.FC<AppProps> = ({ Component, pageProps }):JSX.Element => {
  return (
        <Component {...pageProps}/>
  )
}
export default wrapper.withRedux(App);