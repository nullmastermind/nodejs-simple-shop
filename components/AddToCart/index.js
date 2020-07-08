import React, { useEffect, useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { formatMoney } from "../../pages/index";

export default function AddToCart(props) {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(1);

    const handleClickOpen = () => {
        setCount(1);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (count < 0) setCount(0);
    }, [count]);

    // noinspection DuplicatedCode
    return (
        <React.Fragment>
            <Button
                fullWidth={props.fullWidth}
                color={"secondary"}
                variant={"contained"}
                size={props.size || "small"}
                onClick={(e) => {
                    e.preventDefault();
                    handleClickOpen();
                }}>
                Thêm vào giỏ
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{props.product.name}</DialogTitle>
                <DialogContent>
                    <div style={{ minWidth: 250 }}>
                        <DialogContentText>
                            <Typography>
                                Số tiền: {formatMoney(props.product.currentPrice)} x {count || 0} = {formatMoney(props.product.currentPrice * (count || 0))}đ
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
                        <div style={{ textAlign: "center" }}>
                            <Button variant={"contained"} onClick={() => setCount(count - 1)}>
                                -
                            </Button>
                            <Button variant={"contained"} style={{ marginLeft: 4 }} onClick={() => setCount(count + 1)}>
                                +
                            </Button>
                        </div>
                    </div>
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
        </React.Fragment>
    );
}
