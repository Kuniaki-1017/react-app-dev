
const fs = require("fs");

//readFileSyncでitems.jsonを読み込み→JSON.parseでjson形式からオブジェクトに変換
const values = JSON.parse(fs.readFileSync("./data/items.json", "utf8"));

//ecportsで外部モジュール化※外部ではitem.get or find で実行できる
//全てのデータを取得
exports.get = () => {
    return values;
}
//IDからデータを取得
exports.find = (id) => {
    return values.find((value) => value.id === id)
}