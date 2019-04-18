const express = require("express");
const bodyParser = require("body-parser");
const { getTitle, handleAddTitle } = require("./requestHandlers");

const PORT = process.env.PORT || 8080;
const CLIENT_ADDRESS = "/reactjs-with-nodejs-backend-client-/build";

const app = express();
app.use(bodyParser.text());
app.get("/getTitles", getTitle);
app.post("/addTitle", handleAddTitle);
app.use(express.static(__dirname + CLIENT_ADDRESS));

app.listen(PORT, () => `server is listening at port ${PORT}`);
