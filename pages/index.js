import Head from "next/head";
import React from "react";

export default function Home(props) {
    return (
        <React.Fragment>
            <Head>
                <title>Shop</title>
            </Head>
            <main>
                <div style={{ height: "calc(100vh + 100vh)" }}>{props.testData.name}</div>
            </main>
        </React.Fragment>
    );
}
