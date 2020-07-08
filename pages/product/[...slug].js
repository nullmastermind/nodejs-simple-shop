import React from "react";
import { getBaseURL } from "../../utils/axios";

export default function Product(props) {
    return <div>Halo</div>;
}

Product.getInitialProps = async ({ Component, ctx, query, req }) => {
    let baseURL = getBaseURL(req);
    return {};
};
