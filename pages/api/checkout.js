import { getProducts } from "./products";
import { getDoc } from "../../utils/sheet";
import Queue from "better-queue";
import moment from "moment-timezone";

const q = new Queue(
    (fn, cb) => {
        if (typeof fn === "function") {
            fn()
                .then((v) => cb(null, v))
                .catch(cb);
        } else {
            cb(new Error("fn not found"));
        }
    },
    { concurrent: 1, maxRetries: 1, retryDelay: 1000 }
);

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
    q.push(
        async () => {
            if (!data.items || !data.items.length) return;
            let sheet = await getOrderSheet();
            let product = data.items[0];
            await sheet.addRow([
                data.mobile,
                data.name || "-",
                data.address,
                data.note || "-",
                product.name,
                product.count,
                product.count * product.price,
                calcTotal(data.items),
                moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY HH:mm"),
            ]);
            let promises = [];
            for (let i = 1; i < data.items.length; i++) {
                product = data.items[i];
                promises.push(sheet.addRow(["-", "-", "-", "-", product.name, product.count, product.count * product.price]));
            }
            await Promise.all(promises);
        },
        (err) => {
            if (err) return res.status(500).send(err.toString());
            res.json({ status: "SUCCESS" });
        }
    );
};

let sheet;

async function getOrderSheet() {
    if (!sheet) {
        let doc = await getDoc();
        sheet = await doc.sheetsByIndex[0];
    }
    return sheet;
}

function calcTotal(items) {
    let total = 0;
    items.forEach((v) => {
        total += v.price * v.count;
    });
    return total;
}
