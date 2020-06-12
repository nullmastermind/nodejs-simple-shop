import Head from "next/head";
import React from "react";

export default function Home(props) {
    return (
        <React.Fragment>
            <Head>
                <title>Shop</title>
            </Head>
            <main>{props.testData.name}</main>
        </React.Fragment>
    );
}
