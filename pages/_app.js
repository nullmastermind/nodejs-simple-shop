import React from "react";
import "../styles/styles.scss";
import axios from "../utils/axios";

export default function MyApp(props) {
    return <props.Component {...props.pageProps} />;
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    pageProps.testData = (await axios.get("/api/hello")).data;
    return { pageProps };
};
