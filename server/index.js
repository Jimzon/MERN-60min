const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

mongoose.connect(
  "mongodb+srv://user123:luffyboy2022@cluster0.ywm0jzz.mongodb.net/merntutorial?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({});
});

app.post();

app.listen(3001, () => {
  console.log("server runs perfectly");
});
