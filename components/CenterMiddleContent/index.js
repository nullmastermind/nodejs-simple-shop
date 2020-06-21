import React from "react";
import styles from "./styles.module.scss";

export default function CenterMiddleContentComponent(props) {
    return (
        <div className={styles.root} {...props}>
            {props.children}
        </div>
    );
}
