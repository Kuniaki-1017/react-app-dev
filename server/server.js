//各パッケージの読み込み
const express = require("express");
const dotenv = require("dotenv");

//expressを使用できるよう変数に代入
const app = express();

//dotenvを使用できるようにする
dotenv.config();
//.envファイルにアクセスし、設定した値を取得
const host = process.env.HOST;
const port = process.env.PORT;

console.log(host, port)

//各API
app.get("/" ,(req, res) => {
    res.send("hello");
});


//listnでサーバーを待機状態（起動）する
app.listen(port, host, () => {
    console.log("サーバー待機中");


});