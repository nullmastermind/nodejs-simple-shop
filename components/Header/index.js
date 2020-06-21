import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CenterMiddleContentComponent from "../CenterMiddleContent";
import Box from "@material-ui/core/Box";
// noinspection ES6CheckImport
import { Animated } from "react-animated-css";
import { Assignment, Help, WhatsApp } from "@material-ui/icons";

const { useState } = require("react");

export default function HeaderComponent() {
    const [showFullLogo, setShowFullLogo] = useState(true);

    useEffect(() => {
        let scrollTimer = setInterval(() => {
            if (document.body.getBoundingClientRect().top <= -30) {
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
                <div style={{ background: "#000000" }}>
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
                            <Grid item={true} xs={false} sm={3} style={{ textAlign: "right" }}>
                                <Button size={"small"} color={"inherit"} startIcon={<Help />}>
                                    Hướng dẫn
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </div>
                <AppBar position={"sticky"}>
                    <Toolbar style={{ maxWidth: 1200, margin: "auto", width: "100%" }}>
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
                        <Grid container={true}>
                            <Grid item={true} xs={6}>
                                {["Trang chủ"].map((v) => (
                                    <Button color={"inherit"} key={v}>
                                        {v}
                                    </Button>
                                ))}
                            </Grid>
                            <Grid item={true} xs={6} style={{ textAlign: "right" }}>
                                <Button color={"secondary"} variant={"contained"} startIcon={<WhatsApp />}>
                                    0376 651 156
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Hidden>
            {/*Mobile*/}
            <Hidden smUp={true}>
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
                                <img src={"https://homeeat.vn/wp-content/uploads/2020/05/home-eat.png"} className={styles.logoMobile} alt={"logo"} />
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
                        <div style={{ flexGrow: 1 }} />
                        <Button color={"secondary"} variant={"contained"} size={"small"} startIcon={<WhatsApp />}>
                            0376 651 156
                        </Button>
                    </Toolbar>
                </AppBar>
            </Hidden>
        </React.Fragment>
    );
}
