import { getProducts } from "./products";

export default async (req, res) => {
    let products = await getProducts();
    let data = req.body;
    console.log(data);
    res.json({ status: "SUCCESS" });
};
