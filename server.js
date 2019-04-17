const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/home", function(req, res) {
  res.json({ data: "hello world" });
});

app.listen(PORT, () => `server is listening at port ${PORT}`);
