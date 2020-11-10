import React, {useEffect} from "react";
import Header from "../Header/index.js";
import Meta from "../Meta/index";
import GlobalStyle from "./GlobalStyle";
import StyledPageContent from "./StyledPageContent";
import StyledPage from "./StyledPage";
import Router from "next/router";
import NProgress from "nprogress";
import useDarkMode from "../useDarkMode"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes"

Router.onRouteChangeStart = () => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = (e) => {
  console.log("Error", e);
  NProgress.done();
}

const Page = (props) => {
  const [theme] = useDarkMode();  
  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <Meta/>
        <GlobalStyle/>
        <StyledPage>
            <Header/>
            <StyledPageContent>
              {props.children}
            </StyledPageContent>
        </StyledPage>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Page;