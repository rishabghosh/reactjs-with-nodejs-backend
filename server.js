const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.text());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "xiswalder",
  database: "first_db"
});

const PORT = process.env.PORT || 8080;

const getTitle = function(req, res) {
  connection.query("SELECT title FROM books;", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(JSON.stringify(result));
  });
};

const handleAddTitle = function(req, res) {
  connection.query(
    `INSERT INTO books (title) VALUES ("${req.body}");`,
    (err, result) => {
      if (err) console.error("error is *****\n", err);
    }
  );
  console.log(req.body, typeof req.body);
};

app.get("/getTitles", getTitle);
app.post("/addTitle", handleAddTitle);

/**
 * serves builld from submodule ..
 */
app.use(
  express.static(__dirname + "/reactjs-with-nodejs-backend-client-/build")
);

app.listen(PORT, () => `server is listening at port ${PORT}`);
