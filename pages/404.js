import React, { useEffect, useRef } from "react";
import CenterMiddleContentComponent from "../components/centerMiddleContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
}));

export default function NotFound() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <head>
                <title>404 Page Not Found</title>
            </head>
            <main>
                <div className={classes.root}>
                    <CenterMiddleContentComponent>404 Page Not Found</CenterMiddleContentComponent>
                </div>
            </main>
        </React.Fragment>
    );
}
