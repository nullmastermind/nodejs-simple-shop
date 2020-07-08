import React from "react";
import { getBaseURL, rq } from "../../utils/axios";
import Head from "next/head";

export default function Product(props) {
    return (
        <React.Fragment>
            <Head>
                <title>Green Food - {props.name}</title>
            </Head>
            <main>Halo</main>
        </React.Fragment>
    );
}

Product.getInitialProps = async ({ Component, ctx, query, req }) => {
    return (
        (
            await rq.post(getBaseURL(req) + "/api/product", {
                id: query.slug[0],
            })
        )?.data || {}
    );
};
