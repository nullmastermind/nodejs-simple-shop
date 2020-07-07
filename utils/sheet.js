const { GoogleSpreadsheet } = require("google-spreadsheet");

const doc = new GoogleSpreadsheet("1kICudXdrSirXMvYUHZhuVR8Tpbd3HDcOfcyJDtTyA6w");

export const getDoc = async () => {
    if (!doc.authMode) {
        await doc.useServiceAccountAuth(require("./cert.json"));
        await doc.loadInfo();
    }

    return doc;
};
