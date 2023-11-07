//各パッケージの読み込み
const express = require("express");
const dotenv = require("dotenv");



//外部ルーターファイルの読み込み
const routes = require('./routes');

//expressを使用できるよう変数に代入
const app = express();

//dotenvを使用できるようにする
dotenv.config();
//.envファイルにアクセスし、設定した値を取得
const host = process.env.HOST;
const port = process.env.PORT;

console.log(host, port);


//ミドルウェア設定※設定しないと使用できない
//staticで静的ファイルの読み込み
app.use(express.static(__dirname + "/public"));
//URLのエンコード化（マルチバイト文字の文字化け防止）
app.use(express.urlencoded({extended: true}));
//ルータをミドルウェアで処理
app.use(routes);



//listnでサーバーを待機状態（起動）する
app.listen(port, host, () => {
    console.log(`サーバー待機中 PORT:${port} HOST:${host}`);
});