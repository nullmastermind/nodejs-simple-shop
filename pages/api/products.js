import { getDoc } from "../../utils/sheet";
import cache from "memory-cache";
import slug from "slug";

export default async (req, res) => {
    res.json(await getProducts());
};

export const getProducts = async () => {
    let productsFromCache = cache.get("products");
    if (productsFromCache) return productsFromCache;
    let doc = await getDoc();
    let sheet = await doc.sheetsByIndex[1];
    let rows = await sheet.getRows();
    return await cache.put(
        "products",
        rows.map((v, i) => ({
            id: slug(v._rawData[0]),
            name: v._rawData[0],
            image: v._rawData[1],
            originPrice: v._rawData[3] ? parseInt(v._rawData[3]) : null,
            currentPrice: v._rawData[2] ? parseInt(v._rawData[2]) : null,
            type: v._rawData[4],
            typeFilter: (v._rawData[4] || "").split(",").map((v) => v.trim().toUpperCase()),
            desc: v._rawData[5],
        }))
    );
};
