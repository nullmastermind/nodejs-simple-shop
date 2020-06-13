import React from "react";
import "../styles/styles.scss";
import axios from "../utils/axios";
import HeaderComponent from "../components/Header";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#212121",
            textColor: "#ffffff",
        },
        secondary: {
            main: "#10ab4e",
            textColor: "#ffffff",
        },
    },
});

export default function MyApp(props) {
    return (
        <ThemeProvider theme={theme}>
            <HeaderComponent />
            <props.Component {...props.pageProps} />
        </ThemeProvider>
    );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    pageProps.testData = (await axios.get("/api/hello")).data;
    return { pageProps };
};
