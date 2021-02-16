const mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sohaib123",
  database: "BrainBuster",
  multipleStatements: true,
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

module.exports = conn;
