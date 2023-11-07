//bcryptの読み込み
const bcrypt = require("bcrypt");
//db.jsを読み込んでdb接続関数を使えるようにする
const db = require("../lib/db");
//bcryptでpasswordという文字を10回ストレッチング（10回ハッシュ化）し変数passwordに代入
const password = bcrypt.hashSync('password', 10);

let posts = [
    { name: 'Adam', email: 'adam@test.com', password: password, 'hobby': '旅行,グルメ' },
    { name: 'Bob', email: 'bob@test.com', password: password, 'hobby': 'スポーツ,音楽' },
    { name: 'Chris', email: 'chris@test.com', password: password, 'hobby': '映画,読書' },
    { name: 'David', email: 'david@test.com', password: password, 'hobby': 'スポーツ,ゲーム' },
    { name: 'Eliza', email: 'eliza@test.com', password: password, 'hobby': 'ゲーム,グルメ' },
];

db.inserts("users", posts);