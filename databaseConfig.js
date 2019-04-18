const mysql = require("mysql");

const CONNECTION = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "xiswalder",
  database: "first_db"
});

module.exports = { CONNECTION };
