import { getDoc } from "../../utils/sheet";
import cache from "memory-cache";

export default async (req, res) => {
    res.json(await getConfig());
};

export const getConfig = async () => {
    let configFromCache = cache.get("config");
    if (configFromCache) {
        return { ...configFromCache, cached: true };
    }
    let doc = await getDoc();
    let sheet = await doc.sheetsByIndex[2];
    await sheet.loadCells("A2:H2");
    let result = await Promise.all([
        sheet.getCellByA1("A2"),
        sheet.getCellByA1("B2"),
        sheet.getCellByA1("C2"),
        sheet.getCellByA1("D2"),
        sheet.getCellByA1("E2"),
        sheet.getCellByA1("F2"),
        sheet.getCellByA1("G2"),
        sheet.getCellByA1("H2"),
    ]);
    return await cache.put("config", {
        logo: result[0].value,
        logo2: result[1].value,
        phone: result[2].value,
        webcome_button: result[3].value,
        welcome: result[4].value,
        welcome_1: result[5].value,
        welcome_2: result[6].value,
        welcome_bg_1: result[7].value,
    });
};
