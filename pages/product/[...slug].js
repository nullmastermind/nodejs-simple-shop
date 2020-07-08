import React from "react";
import { getBaseURL, rq } from "../../utils/axios";
import Head from "next/head";

export default function Product(props) {
    return (
        <React.Fragment>
            <Head>
                <title>Green Food - {props.name}</title>
                <meta name={"description"} content={props.SEO_desc} />
                <meta name={"keywords"} content={props.tags} />
                <meta property={"og:title"} content={props.name} />
                <meta property={"og:description"} content={props.SEO_desc} />
                <meta property={"og:image"} content={props.image} />
                <meta property={"og:image:url"} content={props.image} />
            </Head>
            <main></main>
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
