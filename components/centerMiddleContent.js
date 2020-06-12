import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        "& tr": {
            width: "100%",
            height: "100%",
            "& td": {
                width: "100%",
                height: "100%",
                textAlign: "center",
                verticalAlign: "middle",
            },
        },
    },
}));

export default function CenterMiddleContentComponent(props) {
    const classes = useStyles();

    return (
        <table {...props} className={classes.root}>
            <tbody>
                <tr>
                    <td>{props.children}</td>
                </tr>
            </tbody>
        </table>
    );
}
