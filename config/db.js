const mysql = require("mysql");

var conn = mysql.createConnection({
  host: "35.193.167.12",
  user: "root",
  password: "F81Lwqk7d5qzdGNa",
  database: "brainbuster",
  multipleStatements: true,
});
// var conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "sohaib123",
//   database: "brainbuster",
//   multipleStatements: true,
// });

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

module.exports = conn;
