import Head from "next/head";
import React, { useEffect } from "react";
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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

const { useState } = require("react");

export default function Home(props) {
    const [menu, setMenu] = useState("default");
    const [open, setOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState({});
    const [count, setCount] = useState(1);

    const handleClickOpen = (order) => {
        setCount(1);
        setSelectedOrder(order);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedOrder({});
        setOpen(false);
    };

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
                <Box className={styles.selectBox}>
                    <FormControl style={{ minWidth: "30%" }}>
                        <InputLabel>Menu</InputLabel>
                        <Select
                            value={menu}
                            onChange={(e) => {
                                setMenu(e.target.value);
                            }}>
                            <MenuItem value={"default"}>Thực đơn hôm nay</MenuItem>
                            <MenuItem value={"1"}>Twenty</MenuItem>
                            <MenuItem value={"2"}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box className={styles.orders}>
                    <Grid container={true} spacing={1}>
                        {orders.map((order, i) => {
                            return (
                                <Grid item={true} xs={6} sm={4} md={3} key={i}>
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
                                            <Button
                                                fullWidth={true}
                                                color={"secondary"}
                                                variant={"contained"}
                                                size={"small"}
                                                onClick={() => {
                                                    handleClickOpen(order);
                                                }}>
                                                Thêm vào giỏ
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{selectedOrder.name}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography>
                                Số tiền: {formatMoney(selectedOrder.currentPrice)} x {count || 0} = {formatMoney(selectedOrder.currentPrice * (count || 0))}đ
                            </Typography>
                        </DialogContentText>
                        <TextField
                            onFocus={(e) => e.target.select()}
                            autoFocus={true}
                            margin={"dense"}
                            type={"number"}
                            fullWidth={true}
                            label={"Số lượng"}
                            value={count}
                            onChange={(e) => setCount(parseInt(e.target.value))}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Đóng
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Thêm
                        </Button>
                    </DialogActions>
                </Dialog>
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
        id: i,
        name: "Cơm rang ốp trứng",
        image: "https://homeeat.vn/wp-content/uploads/2020/05/C%C6%A1m-rang-tr%E1%BB%A9ng-%E1%BB%91p.jpg",
        originPrice: 30000,
        currentPrice: 25000,
    });
}
