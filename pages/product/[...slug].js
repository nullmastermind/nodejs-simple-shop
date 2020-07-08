import React, { useEffect } from "react";
import { getBaseURL, rq } from "../../utils/axios";
import Head from "next/head";
import styles from "./styles.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CenterMiddleContentComponent from "../../components/CenterMiddleContent";
import { formatMoney } from "../index";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import AddToCart from "../../components/AddToCart";

export default function Product(props) {
    useEffect(() => {
        try {
            FB.XFBML.parse();
        } catch (e) {}
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Green Food - {props.name}</title>
                <meta name={"description"} content={props.SEO_desc} />
                <meta name={"keywords"} content={props.tags} />
                <meta property={"og:title"} content={props.name} />
                <meta property={"og:type"} content={"website"} />
                <meta property={"og:url"} content={props.url} />
                <meta property={"og:description"} content={props.SEO_desc} />
                <meta property={"og:image"} content={props.image} />
                <meta property={"og:image:url"} content={props.image} />
            </Head>
            <main style={{ paddingLeft: 16, paddingRight: 16 }}>
                <Card elevation={3} className={styles.product}>
                    <Grid container={true} spacing={0}>
                        <Grid item={true} xs={4}>
                            <Box padding={2} className={styles["product__image--container"]}>
                                <img src={props.image} alt={props.name} className={styles.product__image} />
                            </Box>
                        </Grid>
                        <Grid item={true} xs={8}>
                            <Box padding={2}>
                                <Typography variant={"h4"} component={"h1"} className={styles.product__title}>
                                    {props.name}
                                </Typography>
                                <Box marginTop={1}>
                                    <div style={{ display: "inline-block" }}>
                                        <Grid container={true} spacing={1}>
                                            <Grid item={true} style={{ textAlign: "right" }}>
                                                <div className={"fb-save"} data-uri={props.url} data-size={"small"} />
                                            </Grid>
                                            <Grid item={true} style={{ textAlign: "left" }}>
                                                <div className={"fb-share-button"} data-href={props.url} data-layout={"button_count"} data-size={"small"} />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Box>
                                <Box borderRadius={4} marginTop={2} className={styles.price}>
                                    <Typography variant={"h5"} color={"secondary"}>
                                        {props.originPrice && props.currentPrice !== props.originPrice && (
                                            <span className={styles.dropPrice}>{formatMoney(props.originPrice)}</span>
                                        )}
                                        {formatMoney(props.currentPrice)}đ
                                    </Typography>
                                </Box>
                                <Box marginTop={2}>
                                    <AddToCart product={props} size={"large"} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    {props.desc && (
                        <React.Fragment>
                            <Divider />
                            <Box className={styles.desc} padding={2}>
                                <Typography>{props.desc}</Typography>
                            </Box>
                        </React.Fragment>
                    )}
                    <Box marginTop={1} padding={2}>
                        <div className={"fb-comments"} data-href={props.url} data-numposts={"5"} data-width={"100%"} />
                    </Box>
                </Card>
            </main>
        </React.Fragment>
    );
}

Product.getInitialProps = async ({ Component, ctx, query, req }) => {
    let props =
        (
            await rq.post(getBaseURL(req) + "/api/product", {
                id: query.slug[0],
            })
        )?.data || {};
    props.url = getBaseURL(req) + "/product/" + props.id;
    return props;
};
