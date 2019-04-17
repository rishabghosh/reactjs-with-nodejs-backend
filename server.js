const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "xiswalder",
  database: "first_db"
});

// connection.query("SELECT title FROM books", (error, result) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log(result);
// });

const PORT = process.env.PORT || 8080;

const getTitle = function(req, res) {
  connection.query("SELECT title FROM books", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(result);
  });
};

app.get("/home", function(req, res) {
  res.json({ data: "hello world" });
});

app.get("/getTitles", getTitle);

/**
 * serves builld from submodule ..
 */
app.use(
  express.static(__dirname + "/reactjs-with-nodejs-backend-client-/build")
);

app.listen(PORT, () => `server is listening at port ${PORT}`);
