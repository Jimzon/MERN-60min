const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://user123:luffyboy2022@cluster0.ywm0jzz.mongodb.net/"
);

app.listen(3001, () => {
  console.log("server runs perfectly");
});
