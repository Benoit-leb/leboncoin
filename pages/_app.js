import App from "next/app";
import "../components/style/_index.scss";
import Page from "../components/Page/index";

class MonApp extends App {
  render() {
    const { Component, pageProps} = this.props;
    return (
        <Page>
          <Component {...pageProps}/>
        </Page>
    );
  }
};

export default MonApp;