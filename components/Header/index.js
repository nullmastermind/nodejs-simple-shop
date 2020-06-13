import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CenterMiddleContentComponent from "../CenterMiddleContent";
import Box from "@material-ui/core/Box";
import { Animated } from "react-animated-css";
import { Assignment, Help } from "@material-ui/icons";

const { useState } = require("react");

export default function HeaderComponent() {
    const [showFullLogo, setShowFullLogo] = useState(true);

    useEffect(() => {
        let scrollTimer = setInterval(() => {
            if (document.body.getBoundingClientRect().top <= -100) {
                if (showFullLogo) setShowFullLogo(false);
            } else {
                if (!showFullLogo) setShowFullLogo(true);
            }
        }, 33);
        return () => {
            clearInterval(scrollTimer);
        };
    }, [showFullLogo]);

    return (
        <React.Fragment>
            {/*PC*/}
            <Hidden xsDown={true}>
                <Toolbar className={styles.root}>
                    <Grid container={true}>
                        <Grid item={true} xs={12} sm={9}>
                            <Animated
                                animationIn="pulse"
                                animationOut="zoomOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={showFullLogo}>
                                <Button size={"small"} color={"inherit"} startIcon={<Assignment />}>
                                    Home Eat - Hân hạnh được phục vụ quý khách!
                                </Button>
                            </Animated>
                        </Grid>
                        <Grid item={true} xs={0} sm={3} style={{ textAlign: "right" }}>
                            <Button size={"small"} color={"inherit"} startIcon={<Help />}>
                                Hướng dẫn
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
                <AppBar position={"sticky"}>
                    <Toolbar>
                        <div className={styles.logoContainer}>
                            <Animated
                                animationIn="zoomIn"
                                animationOut="zoomOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={!showFullLogo}
                                animateOnMount={false}>
                                <img src={"https://homeeat.vn/wp-content/uploads/2020/05/home-eat.png"} className={styles.logo} alt={"logo"} />
                            </Animated>
                            <Animated
                                animationIn="zoomIn"
                                animationOut="zoomOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={showFullLogo}
                                animateOnMount={false}>
                                <Box className={styles.logoBg} boxShadow={3}>
                                    <CenterMiddleContentComponent>
                                        <img src={"https://homeeat.vn/wp-content/uploads/2020/05/home-eat.png"} alt={"logo"} />
                                    </CenterMiddleContentComponent>
                                </Box>
                            </Animated>
                        </div>
                        {/*{["Trang chủ", "Combo", "Cơm", "Mỳ", "Ăn Nhanh"].map((v) => (*/}
                        {["Trang chủ"].map((v) => (
                            <Button color={"inherit"} key={v}>
                                {v}
                            </Button>
                        ))}
                        <Button color={"inherit"}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Hidden>
            {/*Mobile*/}
        </React.Fragment>
    );
}
