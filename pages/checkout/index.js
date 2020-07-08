import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import styles from "./styles.module.scss";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { formatMoney } from "../index";
import { Delete } from "@material-ui/icons";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import _ from "lodash";
import validator from "validator";
import { rq } from "../../utils/axios";
import { useRouter } from "next/router";

export default function Checkout(props) {
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setItems(JSON.parse(window.localStorage.getItem("items") || "[]"));
        try {
            document.getElementById("cart").style.display = "none";
        } catch (e) {}
        return () => {
            try {
                document.getElementById("cart").style.display = "block";
            } catch (e) {}
        };
    }, []);

    return (
        <React.Fragment>
            <Head>
                <meta name={"robots"} content={"noindex"} />
                <title>Đặt hàng</title>
            </Head>
            <main style={{ paddingLeft: 16, paddingRight: 16 }}>
                <Box boxShadow={3} style={{ maxWidth: 900, margin: "auto", marginTop: 80 }} borderRadius={4}>
                    <Typography variant={"subtitle2"} style={{ marginLeft: 16, paddingTop: 16 }} color={"secondary"}>
                        Sản phẩm đã chọn
                    </Typography>
                    <Box marginTop={2}>
                        <Table size={"small"}>
                            <caption>
                                Tổng thanh toán
                                <Typography color={"secondary"} style={{ textDecoration: "underline" }}>
                                    {formatMoney(calcTotal(items))}đ
                                </Typography>
                            </caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sản Phẩm</TableCell>
                                    <TableCell align={"right"}>Số lượng</TableCell>
                                    <TableCell align={"right"}>Thành tiền</TableCell>
                                    <TableCell align={"right"} />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell align={"right"}>{item.count}</TableCell>
                                        <TableCell align={"right"}>{formatMoney(item.price * item.count)}đ</TableCell>
                                        <TableCell align={"right"}>
                                            <Delete
                                                onClick={() => {
                                                    if (window.confirm("Xác nhận xóa?")) {
                                                        let is = _.cloneDeep(items);
                                                        is.splice(index, 1);
                                                        setItems(is);
                                                        localStorage.setItem("items", JSON.stringify(is));
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                    <form
                        style={{ padding: 16, paddingTop: 0 }}
                        onSubmit={async (e) => {
                            e.preventDefault();
                            if (!validator.isMobilePhone(mobile)) {
                                alert("Vui lòng nhập một số điện thoại hợp lệ!");
                                return;
                            }
                            setLoading(true);
                            try {
                                await rq.post("/api/checkout", {
                                    name,
                                    address,
                                    mobile,
                                    note,
                                    items,
                                });
                                window.confirm("Đặt hàng thành công. Quý khách vui lòng giữ máy GreenFood sẽ liên lạc với bạn sau ít phút. Trân trọng cảm ơn!");
                                localStorage.removeItem("items");
                                await router.push("/");
                            } catch (e) {
                                alert("Đặt hàng thất bại, quý khách vui lòng thử lại!");
                            }
                            setLoading(false);
                        }}>
                        <Typography variant={"subtitle2"} style={{ paddingTop: 16 }} color={"secondary"}>
                            Thông tin đặt hàng
                        </Typography>
                        <div>
                            <TextField className={styles.tf} label={"Họ Tên"} fullWidth={true} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={styles.tf}>
                            <TextField
                                className={styles.tf}
                                label={"Địa chỉ nhận hàng"}
                                fullWidth={true}
                                required={true}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className={styles.tf}>
                            <TextField
                                className={styles.tf}
                                label={"Số điện thoại"}
                                fullWidth={true}
                                required={true}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        <div className={styles.tf}>
                            <TextField className={styles.tf} label={"Ghi chú"} fullWidth={true} onChange={(e) => setNote(e.target.value)} />
                        </div>
                        <div style={{ marginTop: 32 }}>
                            <Button type={"submit"} size={"large"} variant={"contained"} color={"secondary"} fullWidth={true} disabled={loading}>
                                {loading ? "Đang đặt hàng..." : "Đặt hàng"}
                            </Button>
                        </div>
                    </form>
                </Box>
            </main>
        </React.Fragment>
    );
}

function calcTotal(items) {
    let total = 0;
    items.forEach((v) => {
        total += v.price * v.count;
    });
    return total;
}
