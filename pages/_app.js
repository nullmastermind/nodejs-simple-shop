import React from "react";
import "../styles/styles.scss";

export default function MyApp(props) {
    return <props.Component {...props.pageProps} />;
}
