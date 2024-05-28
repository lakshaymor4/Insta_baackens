const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();

app.use(cors());
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlencodedParser);

app.use("/", require("./routes/user"));

const dbURI = process.env.uri;
mongoose
  .connect(dbURI)
  .then((res) => {
    app.listen(3000, () =>
      console.log("Server is live and datbase is connected")
    );
  })
  .catch((err) => console.log(err));
