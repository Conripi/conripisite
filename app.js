var express = require("express");

//appの生成
var app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/public", express.static("public"));
app.use("/", require("./routes/index.js"));

app.listen(3000);

console.log("Server is running...");