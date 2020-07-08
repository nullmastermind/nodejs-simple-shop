import React, { useEffect } from "react";
import "../styles/styles.scss";
import HeaderComponent from "../components/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import { getBaseURL, rq } from "../utils/axios";

export default function MyApp(props) {
    useEffect(() => {
        let jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <HeaderComponent {...props.pageProps} />
            <div style={{ maxWidth: 1200, margin: "auto" }}>
                <props.Component {...props.pageProps} />
                <div style={{ height: 100 }} />
            </div>
        </ThemeProvider>
    );
}

MyApp.getInitialProps = async function ({ Component, ctx, req }) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    pageProps.web = (await rq.get(getBaseURL(req) + "/api/config")).data;
    return { pageProps };
};
