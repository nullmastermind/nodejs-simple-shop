import cache from "memory-cache";
import { getConfig } from "./config";
import { getProducts } from "./products";

export default async (req, res) => {
    cache.clear();
    await getConfig();
    await getProducts();
    res.send("OK");
};
