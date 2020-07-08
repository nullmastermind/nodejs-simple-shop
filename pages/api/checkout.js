import { getProducts } from "./products";

// {
//     name: "d",
//     address: "1",
//     mobile: "0376561156",
//     note: "",
//     items: [{ id: "banh-biscotti-vi-mix-250g", name: "Bánh biscotti vị Mix 250g", price: 125000, count: 1 }],
// };

export default async (req, res) => {
    let products = await getProducts();
    let data = req.body;
    console.log(data);
    res.json({ status: "SUCCESS" });
};
