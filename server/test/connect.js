//mysql2の読み込み
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db_info = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
}

console.log(db_info)

const con = mysql.createConnection(db_info);
con.connect((err) => {
    if(err) throw err;
    console.log("DB接続成功");
    console.log("初めてのmysql接続")
});
con.end();




