import React, { useEffect } from "react";
import "../styles/styles.scss";
import axios from "../utils/axios";
import HeaderComponent from "../components/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";

export default function MyApp(props) {
    useEffect(() => {
        let jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <HeaderComponent />
            <div style={{ maxWidth: 1200, margin: "auto" }}>
                <props.Component {...props.pageProps} />
            </div>
        </ThemeProvider>
    );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    pageProps.testData = (await axios.get("/api/hello")).data;
    return { pageProps };
};
