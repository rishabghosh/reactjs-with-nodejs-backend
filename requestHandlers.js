const { CONNECTION } = require("./databaseConfig");

const insert = function(columnName, value) {
  return `INSERT INTO books (${columnName}) VALUES ("${value}");`;
};

const getTitle = function(req, res) {
  CONNECTION.query("SELECT title FROM books;", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(JSON.stringify(result));
  });
};

const handleAddTitle = function(req, res) {
  CONNECTION.query(insert("title", req.body), (err, result) => {
    if (err) console.error(err);
  });
};

module.exports = { getTitle, handleAddTitle };
