import React from "react";
import CenterMiddleContentComponent from "../../components/CenterMiddleContent";
import styles from "./styles.module.scss";

export default function NotFound() {
    return (
        <React.Fragment>
            <head>
                <title>404 Page Not Found</title>
            </head>
            <main className={styles.root}>
                <CenterMiddleContentComponent>404 Page Not Found</CenterMiddleContentComponent>
            </main>
        </React.Fragment>
    );
}
