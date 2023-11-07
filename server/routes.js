const express = require("express");
//ルーターオブジェクト作成
const router = express.Router();

//外部モジュールitem.jsを読み込み
const item = require('./models/item.js');


//各API
//トップページ
router.get("/" ,(req, res) => {
    res.send("hello");
});

//プロフィールページ
router.get("/profile", (req, res) => {
    res.send("プロフィールページ");
});

//id指定されたアイテム表示　:idにてパスパラメータの取得
router.get("/item/:id", (req, res) => {
    let message = "商品が見つかりませんでした";
    //:idの値を取得（Numberで数字に変換）
    const id = Number(req.params.id);

    //item.jsで定義した関すを実行して渡されたidとデータに存在するitemデータを照合
    const selectItem = item.find(id);
    if(selectItem){
        message = selectItem.name;
    }
    res.send(message);
});
//アイテム全件表示　:idにてパスパラメータの取得
router.get("/item/", (req, res) => {
    let message = "商品が見つかりませんでした";
    //item.jsで定義した関すを実行して渡されたidとデータに存在するitemデータを照合
    const selectItem = item.get();
    if(selectItem){
        //mapで新しい配列を定義
        message = selectItem.map(item => `<li>${item.name}</li>`);
        //unshiftで配列の最初に<ul>追加
        message.unshift("<ul>");
        //pushで配列のs最後に</ul>を追加
        message.push("</ul>");
        //新しい配列をjoinの空文字で連結（join→配列の各要素を指定した値で連結）
        newMessage = message.join("");
    }
    res.send(newMessage);
});

//ログイン認証
router.post("/auth", (req,res) => {
    //フォームから送られた値を取得し変数に代入（name属性の値）
    const login_name = req.body.login_name;
    const password = req.body.password;

    //フォームから送られた値と設定した値を比較
    let message = "ログインできませんでした";
    if(login_name === process.env.LOGIN_NAME && password === process.env.PASSWORD){
        message = "ログインしました"
    }
    res.send(message);
});




//routerオブジェクトを外部モジュール化
module.exports = router;