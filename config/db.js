const mysql = require("mysql");

var conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  multipleStatements: true,
});

conn.connect((err) => {
  console.log(process.env.MYSQL_HOST);
  if (err) throw err;
  console.log("Mysql Connected...");
});

module.exports = conn;
