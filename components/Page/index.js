import React from "react";
import Header from "../Header/index.js";
import Meta from "../Meta/index";
import GlobalStyle from "./GlobalStyle";
import StyledPageContent from "./StyledPageContent";
import StyledPage from "./StyledPage";
import Router from "next/router";
import NProgress from "nprogress";

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

  return (
    <React.Fragment>
    <Meta/>
    <GlobalStyle/>
    <StyledPage>
        <Header/>
        <StyledPageContent>
          {props.children}
        </StyledPageContent>
    </StyledPage>
    </React.Fragment>
  );
};

export default Page;