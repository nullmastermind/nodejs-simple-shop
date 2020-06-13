import React from "react";
import "../styles/styles.scss";
import axios from "../utils/axios";
import HeaderComponent from "../components/Header";

export default function MyApp(props) {
    return (
        <React.Fragment>
            <HeaderComponent />
            <props.Component {...props.pageProps} />
        </React.Fragment>
    );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    pageProps.testData = (await axios.get("/api/hello")).data;
    return { pageProps };
};
