import React, { useEffect } from "react";
import "../styles/styles.scss";
import HeaderComponent from "../components/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import { db } from "../utils/firebase";

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
            </div>
        </ThemeProvider>
    );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    // firebase
    let dataRef = db.collection("data");
    pageProps.web = (await dataRef.doc("xwZ1adB72aQ4HlBylZyT").get()).data();
    //
    return { pageProps };
};
