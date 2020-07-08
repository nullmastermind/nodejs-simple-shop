import { getProducts } from "./products";
import _ from "lodash";

export default async (req, res) => {
    let products = await getProducts();
    let product = _.find(products, { id: req.body.id || req.query.id });
    product.SEO_desc = product.desc || product.name;
    res.json(product);
};
