import Head from "next/head";
import React from "react";
import axios from "../utils/axios";

export default function Home(props) {
    return (
        <React.Fragment>
            <Head>
                <title>Shop</title>
            </Head>
            <main>{props.name}</main>
        </React.Fragment>
    );
}

export async function getStaticProps() {
    let data = await axios.get("/api/hello");
    return {
        props: data.data,
    };
}
