import "semantic-ui-css/semantic.min.css";
import "../public/style.scss";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import AdBlockDetect from "react-ad-block-detect";

import {
  Button,
  Header,
  Icon,
  Modal,
  Segment,
  List,
  Container,
  Grid,
  Divider,
} from "semantic-ui-react";
import NavBar from "../components/NavBar/NavBar.component";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <meta name="theme-color" content="#db5945" />
      </Head>
      <AdBlockDetect>
        <Modal basic open={true} size="small">
          <Header icon>
            <Icon name="warning sign" />
            AdBlocker Detected
          </Header>
          <Modal.Content className="center">
            <center>
              <p>
                Please disable AdBlocker inorder to continue to website for
                resources!
                <br />
                we only show few ads for continue this site!
              </p>
            </center>
          </Modal.Content>
        </Modal>
      </AdBlockDetect>
      <NavBar />
      <Component {...pageProps} />
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <p> &copy; TheResources.Tech </p>
        </Container>
      </Segment>
    </>
  );
}
