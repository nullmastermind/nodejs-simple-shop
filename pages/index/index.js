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
                    <img src={"https://homeeat.vn/wp-content/uploads/2020/05/b2-01.jpg"} alt={"banner"} className={styles.banner} />
                    <div className={styles.bannerDescription}>
                        <CenterMiddleContentComponent>
                            <Box boxShadow={3} borderRadius={8} className={styles.description}>
                                <Typography variant={"h4"}>Ăn Ngon Cùng “Home Eat”</Typography>
                                <Typography>Mang hương vị cơm việt đến tận nơi bạn muốn thưởng thức nó.</Typography>
                                <div className={styles.divider}>
                                    <Divider />
                                </div>
                                <Button variant={"contained"} color={"secondary"}>
                                    Xem thực đơn
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
