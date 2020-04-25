const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8081;

const app = express();

let data = {};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

// Post Route
app.post("/add", addInfo);

function addInfo(req, res) {
  Object.assign(data, req.body);
  res.send(data);
}

app.get("/add", function(req, res) {
  res.send("Test works");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

module.exports = app;
