//mysql2の読み込み
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();


const db_info = {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
}

exports.connect = () => {
    const con = mysql.createConnection(db_info);
    con.connect();
    con.end();
}

exports.inserts = (table, posts) => {
    ///insertクエリを定義
    let sql = `INSERT INTO ${table} SET ?;`;
    //dbに接続
    const con = mysql.createConnection(db_info)
    posts.forEach((post) => {
        //queryでデータベースに依頼（第一引数にクエリ、第二引数にバインド= ? したいデータ挿入）
        con.query(sql, post)
    });
    //データベース接続を解除
    con.end();
}

exports.deletes = (table) => {
    let sql = `DELETE FROM ${table};`;
    const con = mysql.createConnection(db_info);
    con.query(sql); 
    con.end();
}