import Head from "next/head";
import React from "react";
import styles from "./styles.module.scss";
import CenterMiddleContentComponent from "../../components/CenterMiddleContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

export default function Home(props) {
    return (
        <React.Fragment>
            <Head>
                <title>Shop</title>
            </Head>
            <main>
                <Box boxShadow={3} borderRadius={16} style={{ position: "relative", overflow: "hidden" }}>
                    <img src={props.web["welcome_bg_1"]} alt={"banner"} className={styles.banner} />
                    <div className={styles.bannerDescription}>
                        <CenterMiddleContentComponent>
                            <Box boxShadow={3} borderRadius={8} className={styles.description}>
                                <Typography variant={"h4"}>{props.web["welcome_1"]}</Typography>
                                <Typography>{props.web["welcome_2"]}</Typography>
                                <div className={styles.divider}>
                                    <Divider />
                                </div>
                                <Button variant={"contained"} color={"secondary"}>
                                    {props.web["webcome_button"]}
                                </Button>
                            </Box>
                        </CenterMiddleContentComponent>
                    </div>
                </Box>
                {/*<div style={{ height: "calc(100vh + 100vh)" }}>{props.testData.name}</div>*/}
            </main>
        </React.Fragment>
    );
}
