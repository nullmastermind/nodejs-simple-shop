import { getProducts } from "./products";
import _ from "lodash";

export default async (req, res) => {
    let products = await getProducts();
    res.json(_.find(products, { id: req.body.id || req.query.id }));
};
