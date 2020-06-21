import Head from "next/head";
import React from "react";
import styles from "./styles.module.scss";
import CenterMiddleContentComponent from "../../components/CenterMiddleContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";

export default function Home(props) {
    return (
        <React.Fragment>
            <Head>
                <title>Shop</title>
            </Head>
            <main>
                <Box boxShadow={3} borderRadius={8} style={{ position: "relative", overflow: "hidden" }}>
                    <img src={props.web["welcome_bg_1"]} alt={"banner"} className={styles.banner} />
                    <Hidden xsDown={true}>
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
                    </Hidden>
                </Box>
                <Box className={styles.orders}>
                    <Grid container={true} spacing={1}>
                        {orders.map((order) => {
                            return (
                                <Grid item={true} xs={6} sm={4} md={3}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia image={order.image} title={order.name} className={styles.media} />
                                            <CardContent>
                                                <Typography gutterBottom variant={"h6"} color={"primary"} component={"h2"}>
                                                    {order.name}
                                                </Typography>
                                                <Typography variant={"subtitle2"} color={"primary"}>
                                                    {order.currentPrice !== order.originPrice && (
                                                        <span className={styles.dropPrice}>{formatMoney(order.originPrice)}</span>
                                                    )}
                                                    {formatMoney(order.currentPrice)}đ
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button fullWidth={true} color={"secondary"} variant={"contained"} size={"small"}>
                                                Thêm vào giỏ
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
                <div style={{ height: 100 }} />
            </main>
        </React.Fragment>
    );
}

function formatMoney(v) {
    v = v + "";
    return v.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

const orders = [];

for (let i = 0; i < 20; i++) {
    orders.push({
        name: "Cơm rang ốp trứng",
        image: "https://homeeat.vn/wp-content/uploads/2020/05/C%C6%A1m-rang-tr%E1%BB%A9ng-%E1%BB%91p.jpg",
        originPrice: 30000,
        currentPrice: 25000,
    });
}
