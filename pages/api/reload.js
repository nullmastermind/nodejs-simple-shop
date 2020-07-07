import cache from "memory-cache";
import { getConfig } from "./config";

export default async (req, res) => {
    cache.clear();
    await getConfig();
    res.send("OK");
};
