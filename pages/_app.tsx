import '../styles/globals.sass';
import { wrapper } from "../store";
import React from "react";
import {AppProps} from "next/app";
const App:React.FC<AppProps> = ({ Component, pageProps }):JSX.Element => {
  return (
      <React.StrictMode>
        <Component {...pageProps}/>
      </React.StrictMode>
  )
}
export default wrapper.withRedux(React.memo(App));